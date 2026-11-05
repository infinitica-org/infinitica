"use client";

import { useState } from "react";
import Link from "next/link";
import LogoMark from "@/components/landing/LogoMark";
import {
  MapPin,
  Mail,
  Send,
  Building2,
  ArrowUpRight,
  CheckCircle2,
  ArrowLeft,
  Clock,
  Globe,
  Sparkles
} from "lucide-react";
import "@/components/landing/landing.css";

interface OfficeLocation {
  id: string;
  type: string;
  city: string;
  state: string;
  country: string;
  badge: string;
  name: string;
  coordinates: string;
  addressLines: string[];
  fullAddress: string;
  mapQuery: string;
}

const officeLocations: OfficeLocation[] = [
    {
    id: "registered-office",
    type: "Registered Office",
    city: "Salem",
    state: "Tamil Nadu",
    country: "India",
    badge: "Corporate Registered Office",
    name: "Infinitica Technology Solutions Private Limited",
    coordinates: "11.6643° N, 78.1460° E",
    
    addressLines: [
      "No. 3/55, Christ Home, Kattur",
      "Sarkar Kollapatti",
      "Salem – 636030, Tamil Nadu, India."
    ],
    fullAddress: "No. 3/55, Christ Home, Kattur, Sarkar Kollapatti, Salem – 636030, Tamil Nadu, India.",
    mapQuery: "No. 3/55, Christ Home, Kattur, Sarkar Kollapatti, Salem 636030"
  },
  {
    id: "head-office",
    type: "Head Office",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    badge: "Operational Headquarters",
    name: "Infinitica Technology Solutions Private Limited",
    coordinates: "12.9897° N, 77.5873° E",
    addressLines: [
      "Sona Basecamp, Sona Towers",
      "Vasanth Nagar",
      "Bengaluru – 560001, Karnataka, India."
    ],
    fullAddress: "Sona Basecamp, Sona Towers, Vasanth Nagar, Bengaluru – 560001, Karnataka, India.",
    mapQuery: "Sona Basecamp, Sona Towers, Vasanth Nagar, Bengaluru 560001"
  },
  {
    id: "branch-office",
    type: "Branch Office",
    city: "Salem",
    state: "Tamil Nadu",
    country: "India",
    badge: "Campus Branch Office",
    name: "Infinitica Technology Solutions Private Limited",
    coordinates: "11.6784° N, 78.1396° E",
    addressLines: [
      "Basement Floor, Sona College Campus",
      "Junction Main Road",
      "Salem – 636005, Tamil Nadu, India."
    ],
    fullAddress: "Basement Floor, Sona College Campus, Junction Main Road, Salem – 636005, Tamil Nadu, India.",
    mapQuery: "Sona College Campus, Junction Main Road, Salem 636005"
  }
];

const topics = [
  "Enterprise Solutions",
  "AI & Machine Learning",
  "Product Partnerships",
  "General Inquiry"
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "Enterprise Solutions",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="inf min-h-screen flex flex-col relative selection:bg-[#ac58e9] selection:text-white">
      {/* ── Ambient Background Layer (Cosmic Horizon & Film Grain) ── */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="horizon" />
        <div className="vignette" />
        <div className="grain" />
      </div>

      {/* ── Immersive Header ── */}
      <header className="relative z-20 w-full flex items-center justify-between px-6 sm:px-12 py-6 border-b border-[var(--line)] bg-[rgba(7,6,11,0.65)] backdrop-blur-md">
        <Link href="/" className="logo group flex items-center gap-3">
          <LogoMark className="logo-mark" />
          <span className="font-medium tracking-tight">Infinitica</span>
        </Link>

        
      </header>

      {/* ── Main Contact Stage ── */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* Hero Headline Section */}
        <section className="w-full pt-16 sm:pt-24 pb-12 sm:pb-16 px-6 sm:px-12 max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <p className="eyebrow text-[var(--pink)] mb-5 tracking-[0.24em]">
              ( Explore with us )
            </p>
            <h1 className="font-[family-name:var(--display)] text-5xl sm:text-7xl lg:text-[92px] uppercase tracking-[-0.015em] leading-[0.92] mb-6 text-[var(--cream)]">
              Let&apos;s Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cream)] via-[var(--pink)] to-[var(--violet)]">
                Without Boundaries.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[var(--cream)] opacity-75 font-light leading-relaxed max-w-2xl border-l border-[var(--line)] pl-5 mt-4">
              Whether you are architecting an enterprise intelligence product, scaling a proprietary platform, or scheduling an engineering consultation, our team is at your disposal.
            </p>
          </div>
        </section>

        {/* Transmission Console & Headquarters Grid */}
        <section className="w-full pb-20 sm:pb-28 px-6 sm:px-12 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Transmission Form */}
            <div className="lg:col-span-7 rounded-[26px] border border-[var(--line)] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle,rgba(172,88,233,0.2),transparent_70%)] pointer-events-none" />

              <div className="mb-8">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--pink)]">
                  ( 01 · Dispatch )
                </span>
                <h2 className="font-[family-name:var(--display)] text-3xl sm:text-4xl uppercase tracking-tight text-[var(--cream)] mt-1">
                  Send a Message
                </h2>
                <p className="text-xs sm:text-sm text-[var(--cream)] opacity-60 font-light mt-1">
                  Fill in your project requirements. Direct engineering response within 2–4 business hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-6 border border-[var(--line)] rounded-[20px] bg-black/40 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--violet)]/20 border border-[var(--violet)] flex items-center justify-center text-[var(--pink)] mb-5 shadow-[0_0_24px_rgba(172,88,233,0.5)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-[family-name:var(--display)] text-3xl uppercase tracking-tight text-[var(--cream)] mb-2">
                    Message Transmitted
                  </h3>
                  <p className="text-sm text-[var(--cream)] opacity-75 max-w-md font-light leading-relaxed mb-8">
                    Thank you, <span className="text-white font-medium">{formData.name || "friend"}</span>. An assigned specialist will reach out to <span className="text-[var(--pink)] font-mono">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="pill magnetic text-[#07060b] px-8 py-3 text-xs uppercase tracking-wider font-semibold"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                
                  {/* Dual Input Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-[var(--cream)] opacity-70 mb-2">
                        Your Name <span className="text-[var(--pink)]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full bg-black/40 border border-[var(--line)] px-4 py-3 text-sm text-[var(--cream)] placeholder:text-zinc-600 rounded-xl focus:outline-none focus:border-[var(--pink)] focus:ring-1 focus:ring-[var(--violet)] transition-all font-light"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-[var(--cream)] opacity-70 mb-2">
                        Work Email <span className="text-[var(--pink)]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full bg-black/40 border border-[var(--line)] px-4 py-3 text-sm text-[var(--cream)] placeholder:text-zinc-600 rounded-xl focus:outline-none focus:border-[var(--pink)] focus:ring-1 focus:ring-[var(--violet)] transition-all font-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-[var(--cream)] opacity-70 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Global Inc."
                      className="w-full bg-black/40 border border-[var(--line)] px-4 py-3 text-sm text-[var(--cream)] placeholder:text-zinc-600 rounded-xl focus:outline-none focus:border-[var(--pink)] focus:ring-1 focus:ring-[var(--violet)] transition-all font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-[var(--cream)] opacity-70 mb-2">
                      Message / Brief <span className="text-[var(--pink)]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your system architecture, timelines, or partnership goals..."
                      className="w-full bg-black/40 border border-[var(--line)] p-4 text-sm text-[var(--cream)] placeholder:text-zinc-600 rounded-xl focus:outline-none focus:border-[var(--pink)] focus:ring-1 focus:ring-[var(--violet)] transition-all font-light resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="pill big magnetic text-[#07060b] font-semibold w-full sm:w-auto inline-flex items-center justify-center gap-3"
                  >
                    <span>Submit</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Channels & Operational Status */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Card 1: Direct Channels */}
              <div className="rounded-[26px] border border-[var(--line)] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-xl p-8 relative overflow-hidden group hover:border-[var(--pink)] transition-all duration-300">
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--pink)]">
                    ( 02 · Channels )
                  </span>
                </div>

                <h3 className="font-[family-name:var(--display)] text-2xl uppercase tracking-tight text-[var(--cream)] mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-[var(--cream)] opacity-60 font-light leading-relaxed mb-6">
                  Reach our executive and engineering teams directly for immediate collaboration.
                </p>

                <div className="space-y-4 pt-4 border-t border-[var(--line)]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--cream)] opacity-50 block mb-1">
                      Email Communication
                    </span>
                    <a
                      href="mailto:josh@infinitica"
                      className="text-base sm:text-lg text-[var(--cream)] hover:text-[var(--pink)] transition-colors font-medium block"
                    >
                      josh@infinitica
                    </a>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--cream)] opacity-50 block mb-1">
                      Operational Timezone
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--cream)] opacity-85">
                      <Clock className="w-3.5 h-3.5 text-[var(--pink)]" />
                      <span>IST (UTC +5:30) · 09:00 — 19:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Entity & Registered Legal Info */}
              <div className="rounded-[26px] border border-[var(--line)] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-xl p-8 relative overflow-hidden group hover:border-[var(--pink)] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--pink)]">
                    ( 03 · Legal Entity )
                  </span>
                  <Building2 className="w-4 h-4 text-[var(--pink)]" />
                </div>

                <h4 className="font-medium text-white text-sm sm:text-base mb-1">
                  Infinitica Technology Solutions Private Limited
                </h4>
                <p className="text-xs text-[var(--cream)] opacity-60 font-light leading-relaxed mb-5">
                  An independent product engineering enterprise incorporated in Tamil Nadu, India.
                </p>

                
              </div>
            </div>
          </div>
        </section>

        {/* ── Office Locations Section ── */}
        <section className="w-full py-20 sm:py-28 border-t border-[var(--line)] bg-[rgba(7,6,11,0.5)]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
            
            <div className="max-w-2xl mb-14">
              <p className="eyebrow text-[var(--pink)] mb-3 tracking-[0.24em]">
                ( Presence & Hubs )
              </p>
              <h2 className="font-[family-name:var(--display)] text-4xl sm:text-6xl uppercase tracking-[-0.015em] text-[var(--cream)]">
                Our Office Locations
              </h2>
              <p className="text-sm text-[var(--cream)] opacity-60 font-light mt-2 leading-relaxed">
                Operating across Karnataka and Tamil Nadu tech corridors. Visit or reach our hubs below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {officeLocations.map((office, idx) => (
                <div
                  key={office.id}
                  className="rounded-[24px] border border-[var(--line)] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-xl p-7 sm:p-8 flex flex-col justify-between group hover:border-[var(--pink)] transition-all duration-500 hover:-translate-y-1"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[var(--violet)]/20 border border-[var(--pink)]/30 text-[var(--pink)]">
                        {office.type}
                      </span>
                    </div>

                    {/* Badge / Title */}
                    <h3 className="font-[family-name:var(--display)] text-2xl sm:text-3xl uppercase tracking-tight text-[var(--cream)] mb-1">
                      {office.city}
                    </h3>
                    <p className="text-xs font-mono text-[var(--pink)] opacity-90 tracking-wider mb-4">
                      {office.badge}
                    </p>

                    {/* Telemetry Coordinates */}
                    <div className="text-[11px] font-mono text-[var(--cream)] opacity-40 mb-5 flex items-center gap-1.5">
                      <Globe className="w-3 h-3 text-[var(--pink)]" />
                      <span>{office.coordinates}</span>
                    </div>

                    {/* Address Lines */}
                    <div className="space-y-1.5 pt-4 border-t border-[var(--line)] text-sm text-[var(--cream)] opacity-85 font-light leading-relaxed">
                      {office.addressLines.map((line, lIdx) => (
                        <p
                          key={lIdx}
                          className={lIdx === office.addressLines.length - 1 ? "text-xs font-mono text-[var(--cream)] opacity-60 pt-1" : ""}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Map Link */}
                  <div className="pt-6 mt-6 border-t border-[var(--line)] flex items-center justify-between">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--cream)] opacity-70 group-hover:opacity-100 hover:text-[var(--pink)] transition-all"
                    >
                      <span>Open in Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <span className="text-[11px] font-mono text-[var(--cream)] opacity-30">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Bottom Monumental Wordmark Footer ── */}
      <footer className="relative z-10 w-full border-t border-[var(--line)] bg-[var(--ink)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[var(--cream)] opacity-60">
          <span>&copy; {new Date().getFullYear()} Infinitica Technology Solutions Private Limited.</span>
         
        </div>
        <div className="wordmark" aria-label="Infinitica">
          <span className="wi">
            {["I", "N", "F", "I", "N", "I", "T", "I", "C", "A"].map((c, i) => (
              <span className="c" key={i}>
                {c}
              </span>
            ))}
          </span>
        </div>
      </footer>
    </div>
  );
}
