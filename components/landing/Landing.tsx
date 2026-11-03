"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { FieldScene } from "./FieldScene";
import { Ambient } from "./ambient";
import RibbonHero from "./RibbonHero";
import LogoMark from "./LogoMark";
import "./landing.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);
// stop mobile URL-bar show/hide from re-measuring every pinned section
if (typeof window !== "undefined") ScrollTrigger.config({ ignoreMobileResize: true });

function Split({ text, cls = "" }: { text: string; cls?: string }) {
  return (
    <>
      {text.split(" ").map((word, i, arr) => (
        <span className={`w ${cls}`} key={i}>
          <span className="wi">
            {[...word].map((c, j) => (
              <span className="c" key={j}>
                {c}
              </span>
            ))}
          </span>
          {i < arr.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

const products = [
  { no: "01", name: "Orbit", kind: "Team workspace", line: "Docs, tasks and chat that orbit one source of truth.", status: "Live", art: "orbit" },
  { no: "02", name: "Pulse", kind: "Product analytics", line: "Know what users love before they tell you.", status: "Live", art: "pulse" },
  { no: "03", name: "Ledger", kind: "Finance autopilot", line: "Books that close themselves at the end of every month.", status: "Beta", art: "ledger" },
  { no: "04", name: "Nova", kind: "AI companion", line: "A writing partner that learns your voice, not the internet's.", status: "In the lab", art: "nova" },
];

const steps = [
  { no: "01", title: "Spark", text: "Every product starts as a problem we live with ourselves. If we wouldn't use it daily, we don't build it." },
  { no: "02", title: "Prototype", text: "Working software in days, not decks in weeks. Real people touch it before we fall in love with it." },
  { no: "03", title: "Ship", text: "Small team, sharp scope, launch day. Then we listen harder than we talk." },
  { no: "04", title: "Compound", text: "We never hand it over. Products get better every week, for as long as people need them." },
];

const manifesto =
  "We don't take client briefs. We don't bill hours. We build our own products — obsess over them, ship them, and keep making them better. Forever.";

export default function Landing() {
  const root = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const scene = useRef<FieldScene | null>(null);
  const audio = useRef<Ambient | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [menu, setMenu] = useState(false);
  const menuTl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // smooth scroll driving ScrollTrigger
      const lenis = new Lenis({ duration: 1.15, smoothWheel: true, touchMultiplier: 1.4 });
      lenis.stop();
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (t: number) => lenis.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      let field: FieldScene | null = null;
      try {
        field = new FieldScene(fieldRef.current!);
      } catch {
        /* no WebGL — the gradient background still shows */
      }
      const fieldIntro = field?.intro ?? { y: 0, pitch: 0, size: 0 };
      scene.current = field;
      audio.current = new Ambient();

      // header hides on scroll down, returns on scroll up; marquee skews with speed
      const header = q(".hdr")[0];
      const skew = gsap.quickTo(q(".marquee-row"), "skewX", { duration: 0.5, ease: "power3" });
      lenis.on("scroll", (l: Lenis) => {
        field?.setVelocity(l.velocity);
        skew(gsap.utils.clamp(-12, 12, l.velocity * -0.35));
        if (l.scroll > 120) header.classList.toggle("hide", l.direction === 1);
        else header.classList.remove("hide");
      });

      // ── loader → intro
      const count = { v: 0 };
      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
      intro
        .to(count, {
          v: 100,
          duration: reduce ? 0.3 : 1.8,
          ease: "power2.inOut",
          onUpdate: () => (q(".ld-num")[0].textContent = String(Math.round(count.v)).padStart(3, "0")),
        })
        .to(q(".ld-bar i"), { scaleX: 1, duration: 1.8, ease: "power2.inOut" }, 0)
        .to(q(".ld-inner"), { yPercent: -30, opacity: 0, duration: 0.6, ease: "power3.in" })
        .to(q(".loader"), { clipPath: "inset(0 0 100% 0)", duration: 1.1, ease: "expo.inOut" }, "-=.15")
        .to(fieldIntro, { y: 2.4, pitch: -0.07, duration: 3.4, ease: "power3.out" }, "<")
        .to(fieldIntro, { size: 1, duration: 2.4, ease: "power2.out" }, "<")
        .from(q(".rh-in"), { yPercent: 120, opacity: 0, duration: 1.6, stagger: 0.12 }, "<.45")
        .from(q(".rh-cross"), { scaleX: 0, duration: 1.6, ease: "expo.inOut" }, "<")
        .from(q(".rh-cross i"), { scale: 0, rotate: -180, duration: 1.4, ease: "back.out(1.6)" }, "<.4")
        .from(q(".rh-glow"), { opacity: 0, duration: 1.6 }, "<")
        .from(q(".rh-fade"), { y: 24, opacity: 0, duration: 1.1, stagger: 0.08 }, "<.2")
        .from(q(".hdr > *"), { y: -30, opacity: 0, duration: 1, stagger: 0.08 }, "<")
        .add(() => lenis.start());

      // field dims as content takes over
      gsap.to(q(".field"), {
        opacity: 0.28,
        scrollTrigger: { trigger: ".manifesto", start: "top bottom", end: "center center", scrub: true },
      });
      gsap.to(q(".field"), {
        opacity: 0.85,
        scrollTrigger: { trigger: ".cta", start: "top bottom", end: "center center", scrub: true },
      });

      // ── manifesto words light up as you read
      gsap.fromTo(
        q(".manifesto .w"),
        { opacity: 0.12, y: 14 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: ".manifesto", start: "top 70%", end: "bottom 60%", scrub: 1 },
        }
      );
      gsap.from(q(".manifesto .eyebrow"), {
        opacity: 0,
        x: -30,
        scrollTrigger: { trigger: ".manifesto", start: "top 80%" },
      });

      // ── products: pinned horizontal rail
      const track = q(".rail")[0] as HTMLElement;
      const dist = () => track.scrollWidth - window.innerWidth;
      const rail = gsap.to(track, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: ".products",
          start: "top top",
          end: () => "+=" + dist(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (s) => gsap.set(q(".rail-progress i"), { scaleX: s.progress }),
        },
      });
      q(".card").forEach((card) => {
        gsap.from(card.querySelector(".art"), {
          scale: 1.25,
          rotate: -6,
          ease: "none",
          scrollTrigger: { trigger: card, containerAnimation: rail, start: "left right", end: "center center", scrub: true },
        });
        gsap.from(card.querySelectorAll(".card-meta > *"), {
          y: 40,
          opacity: 0,
          stagger: 0.08,
          scrollTrigger: { trigger: card, containerAnimation: rail, start: "left 75%" },
        });
      });
      gsap.from(q(".products-head .c"), {
        yPercent: 110,
        stagger: 0.02,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: ".products", start: "top 75%" },
      });

      // ── process: stacked cards that recede as the next one arrives
      const stack = q(".step");
      stack.forEach((card, i) => {
        const next = stack[i + 1];
        if (!next) return;
        gsap.to(card, {
          scale: 0.9,
          rotateX: 8,
          filter: "brightness(.45)",
          ease: "none",
          scrollTrigger: { trigger: next, start: "top bottom", end: "top 18%", scrub: true },
        });
      });
      stack.forEach((card) =>
        gsap.from(card.querySelector(".step-no"), {
          xPercent: -40,
          opacity: 0,
          scrollTrigger: { trigger: card, start: "top 80%", end: "top 30%", scrub: true },
        })
      );

      // ── numbers
      q(".num").forEach((el, i) => {
        const val = el.querySelector<HTMLElement>(".num-v")!;
        const to = Number(val.dataset.to);
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          delay: i * 0.08,
          ease: "expo.out",
          scrollTrigger: { trigger: ".numbers", start: "top 75%" },
        });
        if (!isNaN(to)) {
          const o = { v: 0 };
          gsap.to(o, {
            v: to,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: { trigger: ".numbers", start: "top 75%" },
            onUpdate: () => (val.textContent = String(Math.round(o.v))),
          });
        }
      });
      gsap.to(q(".inf-sym"), { rotate: 360, repeat: -1, duration: 9, ease: "none" });

      // ── marquee: endless rows, opposite directions
      q(".marquee-row").forEach((row, i) => {
        const inner = row.querySelector(".marquee-inner")!;
        gsap.fromTo(inner, { xPercent: i ? -50 : 0 }, { xPercent: i ? 0 : -50, repeat: -1, duration: 28, ease: "none" });
      });

      // ── CTA
      gsap.from(q(".cta .c"), {
        yPercent: 120,
        rotate: 6,
        stagger: 0.025,
        ease: "expo.out",
        duration: 1.3,
        scrollTrigger: { trigger: ".cta", start: "top 65%" },
      });
      gsap.from(q(".cta .reveal"), {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: { trigger: ".cta", start: "top 55%" },
      });

      // ── footer wordmark rises letter by letter
      gsap.from(q(".wordmark .c"), {
        yPercent: 100,
        stagger: 0.04,
        ease: "none",
        scrollTrigger: { trigger: ".foot", start: "top bottom", end: "bottom bottom", scrub: 1 },
      });

      // ── magnetic buttons + cursor (pointer devices only)
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      if (fine) {
        q(".magnetic").forEach((el) => {
          const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1,.4)" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1,.4)" });
          el.addEventListener("pointermove", (ev) => {
            const e = ev as PointerEvent;
            const r = el.getBoundingClientRect();
            xTo((e.clientX - r.left - r.width / 2) * 0.35);
            yTo((e.clientY - r.top - r.height / 2) * 0.35);
          });
          el.addEventListener("pointerleave", () => {
            xTo(0);
            yTo(0);
          });
        });
        const cur = q(".cursor")[0];
        const cx = gsap.quickTo(cur, "x", { duration: 0.35, ease: "power3" });
        const cy = gsap.quickTo(cur, "y", { duration: 0.35, ease: "power3" });
        window.addEventListener("pointermove", (e) => {
          cx(e.clientX);
          cy(e.clientY);
        });
        q("a, button").forEach((el) => {
          el.addEventListener("pointerenter", () => cur.classList.add("big"));
          el.addEventListener("pointerleave", () => cur.classList.remove("big"));
        });
      }

      // anchor links go through lenis
      q('a[href^="#"]').forEach((a) =>
        a.addEventListener("click", (e) => {
          const id = a.getAttribute("href")!;
          if (id.length < 2) return;
          e.preventDefault();
          setMenu(false);
          lenis.scrollTo(id, { duration: 1.8 });
        })
      );

      // menu timeline
      menuTl.current = gsap
        .timeline({ paused: true })
        .set(q(".menu"), { visibility: "visible" })
        .fromTo(q(".menu"), { clipPath: "circle(0% at 100% 0%)" }, { clipPath: "circle(150% at 100% 0%)", duration: 0.9, ease: "expo.inOut" })
        .from(q(".menu a"), { yPercent: 120, opacity: 0, stagger: 0.06, duration: 0.8, ease: "expo.out" }, "-=.4");

      return () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
        field?.dispose();
      };
    },
    { scope: root }
  );

  const toggleMenu = () => {
    const open = !menu;
    setMenu(open);
    if (open) menuTl.current?.play();
    else menuTl.current?.reverse();
  };

  return (
    <div className="inf" ref={root}>
      <div className="loader" aria-hidden="true">
        <div className="ld-inner">
          <LogoMark className="ld-mark" />
          <span className="ld-num">000</span>
          <span className="ld-bar">
            <i />
          </span>
        </div>
      </div>
      <div className="cursor" aria-hidden="true" />

      <div className="field" aria-hidden="true">
        <div className="horizon" />
        <div className="field-canvas" ref={fieldRef} />
        <div className="vignette" />
        <div className="grain" />
      </div>

      <header className="hdr">
        <Link href="/" className="logo">
          <LogoMark className="logo-mark" />
          Infinitica
        </Link>
        <nav aria-label="Main">
          <a href="#products">Products</a>
          <a href="#process">How we build</a>
          <a href="#numbers">Studio</a>
          <Link className="pill magnetic" href="/contact">
            Let&rsquo;s talk
          </Link>
          <button className={`burger ${menu ? "x" : ""}`} onClick={toggleMenu} aria-label="Menu" aria-expanded={menu}>
            <i />
            <i />
          </button>
        </nav>
      </header>

      <div className="menu" aria-hidden={!menu}>
        <a href="#products">Products</a>
        <a href="#process">How we build</a>
        <a href="#numbers">Studio</a>
        <Link href="/contact">Contact</Link>
      </div>

      <main>
        <RibbonHero soundOn={soundOn} onSound={() => setSoundOn(audio.current?.toggle() ?? false)} />

        <section className="manifesto">
          <p className="eyebrow">( Manifesto )</p>
          <p className="mf-text">
            {manifesto.split(" ").map((w, i) => (
              <span className="w" key={i}>
                {w}{" "}
              </span>
            ))}
          </p>
        </section>

        <section className="products" id="products">
          <div className="products-head">
            <p className="eyebrow">( Our products )</p>
            <h2>
              <Split text="Made here. Owned here." />
            </h2>
          </div>
          <div className="rail">
            {products.map((p) => (
              <article className="card" key={p.no}>
                <div className={`art art-${p.art}`}>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="card-meta">
                  <div className="card-top">
                    <span>{p.no}</span>
                    <span className={`status s-${p.status === "Live" ? "live" : "soon"}`}>{p.status}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="kind">{p.kind}</p>
                  <p className="line">{p.line}</p>
                </div>
              </article>
            ))}
            <article className="card card-next">
              <p>Next one is already brewing.</p>
              <span className="inf-sym big">∞</span>
            </article>
          </div>
          <div className="rail-progress">
            <i />
          </div>
        </section>

        <section className="process" id="process">
          <div className="process-head">
            <p className="eyebrow">( How a product is born )</p>
            <h2>From itch to institution.</h2>
          </div>
          {steps.map((s, i) => (
            <div className="step" key={s.no} style={{ top: `calc(12vh + ${i * 22}px)` }}>
              <span className="step-no">{s.no}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="numbers" id="numbers">
          <div className="num">
            <span className="num-v" data-to="0">0</span>
            <p>client projects. Ever.</p>
          </div>
          <div className="num">
            <span className="num-v" data-to="100">100</span>
            <span className="unit">%</span>
            <p>of what we ship, we own.</p>
          </div>
          <div className="num">
            <span className="num-v inf-sym">∞</span>
            <p>iterations after launch.</p>
          </div>
          <div className="num">
            <span className="num-v" data-to="1">1</span>
            <p>obsession: the person using it.</p>
          </div>
        </section>

        <section className="marquee" aria-hidden="true">
          {[0, 1].map((r) => (
            <div className="marquee-row" key={r}>
              <div className="marquee-inner">
                {Array.from({ length: 2 }).map((_, k) => (
                  <span key={k}>
                    {(r ? ["Research", "Craft", "Growth", "Systems", "Taste"] : ["Product", "Design", "Engineering", "AI", "Motion"]).map(
                      (t) => (
                        <b key={t}>
                          {t} <em>✦</em>{" "}
                        </b>
                      )
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="cta">
          <p className="eyebrow reveal">( Join the build )</p>
          <h2>
            <Split text="Let's make something" />
            <br />
            <Split text="that never ends." cls="grad" />
          </h2>
          <div className="cta-row reveal">
            <Link href="/contact" className="pill big magnetic">
              Start a conversation
              <svg viewBox="0 0 24 24">
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </Link>
            <a href="mailto:hello@infinitica.com" className="mail">
              hello@infinitica.com
            </a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="foot-links">
          <span>© {new Date().getFullYear()} Infinitica</span>
          <a href="#products">Products</a>
          <a href="#process">Process</a>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="wordmark" aria-label="Infinitica">
          <Split text="INFINITICA" />
        </div>
      </footer>
    </div>
  );
}
