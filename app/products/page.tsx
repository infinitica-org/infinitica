"use client";

import Link from "next/link";
import LogoMark from "@/components/landing/LogoMark";
import "@/components/landing/landing.css";

const gains = [
  {
    title: "Hire faster",
    text: "shorten time-to-hire so great candidates never slip away to competitors.",
  },
  {
    title: "Hire on proof, not promises",
    text: "decisions backed by real work, not polished résumés.",
  },
  {
    title: "Spend less per hire",
    text: "automate the repetitive screening and coordination that eats recruiter hours.",
  },
  {
    title: "Hire fairly",
    text: "every candidate is judged on the same real tasks, reducing bias and guesswork.",
  },
  {
    title: "Scale without extra headcount",
    text: "handle surges in hiring without growing your recruiting team.",
  },
  {
    title: "Free your team for what matters",
    text: "your people focus on the final conversations, not the paperwork.",
  },
];

export default function HelloSmartProductPage() {
  return (
    <div className="inf min-h-screen flex flex-col relative selection:bg-[#ac58e9] selection:text-white">
      {/* ── Ambient Background Layer ── */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="horizon" />
        <div className="vignette" />
        <div className="grain" />
      </div>

      {/* ── Header ── */}
      <header className="relative z-20 w-full flex items-center justify-between px-6 sm:px-12 py-6 border-b border-[var(--line)] bg-[rgba(7,6,11,0.65)] backdrop-blur-md">
        <Link href="/" className="logo group flex items-center gap-3">
          <LogoMark className="logo-mark" />
          <span className="font-medium tracking-tight">Infinitica</span>
        </Link>

        <nav className="flex items-center gap-6 sm:gap-10">
          <Link
            href="/"
            className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--cream)] opacity-70 hover:opacity-100 hover:text-[var(--pink)] transition-all"
          >
            Overview
          </Link>
          <Link
            href="/contact"
            className="pill text-xs font-semibold !text-[#07060b] hover:!text-white"
          >
            Let&rsquo;s talk
          </Link>
        </nav>
      </header>

      {/* ── Main Product Stage ── */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 px-6 sm:px-12 max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <p className="eyebrow text-[var(--pink)] mb-5 tracking-[0.24em]">
            ( HelloSmart.ai )
          </p>

          <h1 className="font-[family-name:var(--display)] text-5xl sm:text-7xl lg:text-[96px] uppercase tracking-[-0.015em] leading-[0.92] mb-8 text-[var(--cream)] max-w-5xl">
            Hire smarter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cream)] via-[var(--pink)] to-[var(--violet)]">
              Let AI agents do the heavy lifting.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--cream)] opacity-80 font-light leading-relaxed max-w-3xl mb-10">
            HelloSmart.ai is an AI-native hiring platform where intelligent agents manage the entire recruitment lifecycle, from sourcing to a confident offer.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/contact?subject=HelloSmart.ai+Request+a+Demo"
              className="pill big !h-14 sm:!h-16 px-8 sm:px-10 text-sm font-semibold !text-[#07060b] hover:!text-white"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact?subject=HelloSmart.ai+Join+the+Early+Access+List"
              className="inline-flex items-center justify-center h-14 sm:h-16 px-8 sm:px-10 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.08)] text-sm font-medium tracking-wide uppercase transition-all hover:border-[var(--pink)]"
            >
              Join the Early Access List
            </Link>
          </div>
        </section>

        {/* ── What is HelloSmart.ai? ── */}
        <section className="w-full py-16 sm:py-24 px-6 sm:px-12 border-t border-[var(--line)] bg-[rgba(12,8,24,0.4)]">
          <div className="max-w-[1000px] mx-auto">
            <p className="eyebrow text-[var(--pink)] mb-4 tracking-[0.22em]">
              ( Overview )
            </p>
            <h2 className="font-[family-name:var(--display)] text-4xl sm:text-6xl uppercase tracking-tight text-[var(--cream)] mb-6">
              What is HelloSmart.ai?
            </h2>
            <p className="text-base sm:text-xl text-[var(--cream)] opacity-85 font-light leading-relaxed">
              Hiring is slow, manual and built on résumés that say little about real ability. HelloSmart.ai replaces that with AI agents that source, screen, assess and shortlist candidates for you, so your team spends time only on the people worth meeting.
            </p>
          </div>
        </section>

        {/* ── What you gain ── */}
        <section className="w-full py-20 sm:py-28 px-6 sm:px-12 border-t border-[var(--line)] max-w-[1200px] mx-auto">
          <div className="mb-14 sm:mb-16 max-w-[900px]">
            <p className="eyebrow text-[var(--pink)] mb-4 tracking-[0.22em]">
              ( Advantage )
            </p>
            <h2 className="font-[family-name:var(--display)] text-5xl sm:text-7xl uppercase tracking-tight text-[var(--cream)] mb-4">
              What you gain
            </h2>
            <p className="text-base sm:text-xl text-[var(--cream)] opacity-80 font-light leading-relaxed">
              HelloSmart.ai turns hiring from a slow cost centre into a real competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gains.map((item, idx) => (
              <div
                key={item.title}
                className="p-8 sm:p-9 rounded-2xl border border-[var(--line)] bg-gradient-to-b from-[#181126] to-[#0c0816] flex flex-col justify-between hover:border-[var(--pink)] transition-all duration-300"
              >
                <div>
                  <div className="w-2 h-2 rounded-full bg-[var(--pink)] mb-6" />
                  <h3 className="font-[family-name:var(--display)] text-2xl sm:text-3xl uppercase tracking-wide text-[var(--cream)] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--cream)] opacity-75 leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing line & Call-to-action buttons ── */}
        <section className="w-full py-24 sm:py-32 px-6 sm:px-12 text-center border-t border-[var(--line)] bg-[rgba(10,7,18,0.5)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--display)] text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[var(--cream)] mb-10 leading-[0.98]">
              The future of hiring isn’t more tools. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cream)] via-[var(--pink)] to-[var(--violet)]">
                It’s smarter agents.
              </span>
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <Link
                href="/contact?subject=HelloSmart.ai+Request+a+Demo"
                className="pill big !h-14 sm:!h-16 px-8 sm:px-10 text-sm font-semibold !text-[#07060b] hover:!text-white"
              >
                Request a Demo
              </Link>
              <Link
                href="/contact?subject=HelloSmart.ai+Join+the+Early+Access+List"
                className="inline-flex items-center justify-center h-14 sm:h-16 px-8 sm:px-10 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.08)] text-sm font-medium tracking-wide uppercase transition-all hover:border-[var(--pink)]"
              >
                Join the Early Access List
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-20 foot border-t border-[var(--line)] bg-[#07060b]">
        <div className="foot-links flex flex-wrap gap-8 py-8 text-xs font-mono uppercase tracking-[0.16em] opacity-70">
          <span>© {new Date().getFullYear()} Infinitica Technology Solutions</span>
          <Link href="/" className="hover:text-[var(--pink)]">Home</Link>
          <Link href="/products" className="text-[var(--pink)] opacity-100 font-semibold">HelloSmart.ai</Link>
          <Link href="/privacy" className="hover:text-[var(--pink)]">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[var(--pink)]">Terms &amp; Conditions</Link>
          <Link href="/contact" className="hover:text-[var(--pink)]">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
