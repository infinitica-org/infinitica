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
        <span
          className={`w ${cls}`}
          key={i}
          style={{ marginRight: i < arr.length - 1 ? "0.28em" : 0 }}
        >
          <span className="wi">
            {[...word].map((c, j) => (
              <span className="c" key={j}>
                {c}
              </span>
            ))}
          </span>
        </span>
      ))}
    </>
  );
}

const steps = [
  {
    no: "01",
    title: "Identify the consequential.",
    text: "We investigate complex problems, challenge established assumptions and identify opportunities where new technological approaches can create meaningful advantage.",
  },
  {
    no: "02",
    title: "Establish the foundation.",
    text: "We examine underlying principles, formulate hypotheses and validate technical feasibility. Evidence, not assumption, determines the direction of development.",
  },
  {
    no: "03",
    title: "Build with intent.",
    text: "We translate validated concepts into functional systems. Architecture, precision and rigorous testing govern how technologies are designed, developed and deployed.",
  },
  {
    no: "04",
    title: "Advance continuously.",
    text: "Deployment establishes the conditions for further progress. We evaluate operational performance, incorporate new intelligence and continuously strengthen the systems we build.",
  },
];

const manifesto =
   
"We are not here to follow the trajectory of technology. We are here to shape it. Through rigorous research, unconventional thinking, and uncompromising engineering, we build intelligent systems for a world that demands more.";

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

      if (field) {
        gsap.to(fieldIntro, { y: 2.4, pitch: -0.07, duration: 2, ease: "power3.out" });
        gsap.to(fieldIntro, { size: 1, duration: 1.5, ease: "power2.out" });
      }

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
          <Link href="/products" className="text-xs font-mono uppercase tracking-[0.18em] opacity-80 hover:opacity-100 hover:text-[var(--pink)] transition-all">
            Products
          </Link>
          <Link className="pill magnetic text-[#07060b] font-semibold" href="/contact">
            Let&rsquo;s talk
          </Link>
          <button className={`burger ${menu ? "x" : ""}`} onClick={toggleMenu} aria-label="Menu" aria-expanded={menu}>
            <i />
            <i />
          </button>
        </nav>
      </header>

      <div className="menu" aria-hidden={!menu}>
        <Link href="/products">Products</Link>
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

        {/* ── Products Showcase ── */}
        <section className="px-6 sm:px-12 py-20 sm:py-28 max-w-[1200px] mx-auto w-full relative z-10" id="products">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 border-b border-[var(--line)] pb-8">
            <div>
              <p className="eyebrow text-[var(--pink)] mb-3">( Product )</p>
              <h2 className="font-[family-name:var(--display)] text-5xl sm:text-7xl uppercase tracking-tight text-[var(--cream)]">
                Our Products
              </h2>
            </div>
          </div>

          <Link
            href="/products"
            className="group block p-8 sm:p-14 rounded-3xl border border-[var(--line)] bg-gradient-to-br from-[#1a1128] via-[#0f0a18] to-[#07060b] hover:border-[var(--pink)] transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--pink)]">
                Product
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--cream)] opacity-60 group-hover:opacity-100 group-hover:text-[var(--pink)] transition-all">
                View Product →
              </span>
            </div>

            <h3 className="font-[family-name:var(--display)] text-5xl sm:text-7xl lg:text-8xl uppercase tracking-wide text-[var(--cream)] mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--cream)] group-hover:to-[var(--pink)] transition-all">
              HelloSmart.ai
            </h3>
            <p className="text-lg sm:text-2xl text-[var(--cream)] opacity-85 max-w-2xl font-light leading-relaxed">
              The AI-native hiring platform. AI agents run your recruitment end to end.
            </p>
          </Link>
        </section>

        <section className="process" id="process">
          <div className="process-head">
            <p className="eyebrow">( Our Operating Philosophy )</p>
            <h2>From first principles to consequential technology.</h2>
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
          <p className="eyebrow reveal">( BE PART OF WHAT&apos;S NEXT )</p>
          <h2>
          
            <Split text="Build what comes next." cls="grad" />
          </h2>
          <p className="cta-desc reveal">
            We are advancing the frontiers of intelligence through research, engineering and ambitious technological work.
          </p>
          <div className="cta-row reveal">
            <Link href="/contact" className="pill big magnetic text-[#07060b] font-semibold">
              Explore with us
              <svg viewBox="0 0 24 24">
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </Link>
            <a href="mailto:josh@infinitica.com" className="mail">
              josh@infinitica.com
            </a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="foot-links">
          <span>© {new Date().getFullYear()} Infinitica</span>
          <Link href="/products">Products</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="wordmark" aria-label="Infinitica">
          <Split text="INFINITICA" />
        </div>
      </footer>
    </div>
  );
}
