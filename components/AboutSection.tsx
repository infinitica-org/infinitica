"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Compass,
  Users,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Calendar,
  Check,
  MessageSquare
} from "lucide-react";

const values = [
  {
    title: "Innovation",
    desc: "We keep exploring better ways to solve problems.",
    icon: Lightbulb,
    tag: ""
  },
  {
    title: "Quality",
    desc: "We build products that are dependable and made to last.",
    icon: ShieldCheck,
    tag: ""
  },
  {
    title: "Simplicity",
    desc: "Great products should be easy to understand and use.",
    icon: Compass,
    tag: ""
  },
  {
    title: "Customer Focus",
    desc: "Our customers' feedback shapes everything we make.",
    icon: Users,
    tag: ""
  },
  {
    title: "Integrity",
    desc: "We are honest, transparent and accountable in all we do.",
    icon: CheckCircle2,
    tag: ""
  }
];

const highlights = [
  "Products designed around real customer needs",
  "Consistent quality from design to delivery",
  "Responsive, friendly customer support",
  "Continuous improvement and new releases"
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#0A0A0A] text-white border-t border-white/10 py-20 lg:py-28 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwdjIwSDIwVjIweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIi8+PC9zdmc+')] opacity-30 pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
      

        {/* Bento Grid: About Infinitica, What We Do, Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20 items-stretch">
          
          {/* Left Column: About Infinitica Master Anchor Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#111] border border-white/10 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-[#AC58E9] transition-all duration-500 hover:shadow-[4px_4px_0_rgba(172,88,233,1)]"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#AC58E9]/15 blur-3xl pointer-events-none group-hover:bg-[#AC58E9]/25 transition-all duration-700" />
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#AC58E9] via-[#AC58E9]/50 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 border border-[#AC58E9]/40 bg-[#AC58E9]/10 text-[10px] font-semibold tracking-widest text-[#AC58E9] uppercase mb-6">
                Company Profile
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.05] uppercase font-sans mb-8">
                About <span className="text-[#AC58E9]">Infinitica</span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed border-l-2 border-[#AC58E9] pl-6">
                Infinitica is a product-based company dedicated to creating smart, reliable, and easy-to-use solutions for modern needs. We turn ideas into well-designed products that make everyday work and life simpler.
              </p>
            </div>

            {/* Bottom Accent Detail */}
            <div className="relative z-10 mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="w-16 h-1 bg-[#AC58E9] group-hover:w-28 transition-all duration-500" />
              <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors uppercase tracking-widest">
                Est. 2026
              </span>
            </div>

            {/* Corner Bracket */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/10 group-hover:border-[#AC58E9] transition-colors pointer-events-none" />
          </motion.div>

          {/* Right Column: What We Do + Mission & Vision Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            {/* What We Do Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111] border border-white/10 p-8 sm:p-10 relative overflow-hidden group hover:border-[#AC58E9] transition-all duration-500 hover:shadow-[4px_4px_0_rgba(172,88,233,1)] flex-1 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#AC58E9]/40 to-transparent group-hover:via-[#AC58E9] transition-all" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold tracking-widest text-[#AC58E9] uppercase">
                    Core Function
                  </span>
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-[#AC58E9] transition-colors">
                    ACTION
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
                  What We Do
                </h3>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                  We design, build and deliver products that solve real problems. Every product we create goes through careful research, thoughtful design and rigorous testing, so it works the way people expect it to, from day one.
                </p>
              </div>

              <div className="w-12 h-1 bg-[#AC58E9]/60 mt-6 group-hover:w-20 group-hover:bg-[#AC58E9] transition-all duration-300" />

              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#AC58E9]/20 group-hover:border-[#AC58E9] transition-colors pointer-events-none" />
            </motion.div>

            {/* Bottom Row: Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#111] border border-white/10 p-8 flex flex-col justify-between group hover:border-[#AC58E9] transition-all duration-500 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(172,88,233,1)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase border border-white/10 px-2.5 py-1 group-hover:border-[#AC58E9] group-hover:text-[#AC58E9] transition-colors">
                      Purpose
                    </span>
                    <span className="text-2xl font-mono text-zinc-600 group-hover:text-[#AC58E9] transition-colors"></span>
                  </div>
                  <h3 className="text-2xl font-medium text-white tracking-tight mb-3">
                    Our Mission
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    To build products that make a real difference by combining innovation, quality and simplicity, and to support our customers every step of the way.
                  </p>
                </div>
                <div className="w-12 h-1 bg-[#AC58E9] mt-8 group-hover:w-20 transition-all duration-300" />
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#111] border border-white/10 p-8 flex flex-col justify-between group hover:border-[#AC58E9] transition-all duration-500 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(172,88,233,1)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase border border-white/10 px-2.5 py-1 group-hover:border-[#AC58E9] group-hover:text-[#AC58E9] transition-colors">
                      Future
                    </span>
                    <span className="text-2xl font-mono text-zinc-600 group-hover:text-[#AC58E9] transition-colors"></span>
                  </div>
                  <h3 className="text-2xl font-medium text-white tracking-tight mb-3">
                    Our Vision
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    To be a trusted name in product innovation, known for solutions that stand the test of time and grow with the people who use them.
                  </p>
                </div>
                <div className="w-12 h-1 bg-white mt-8 group-hover:bg-[#AC58E9] group-hover:w-20 transition-all duration-300" />
              </motion.div>

            </div>

          </div>

        </div>

        {/* What We Stand For: Values Matrix */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6"
          >
            <div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-sans">
                What We Stand For
              </h3>
            </div>
            <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light leading-relaxed border-l-2 border-[#AC58E9]/40 pl-4">
              The foundational values that drive every decision, architecture, and feature we deliver.
            </p>
          </motion.div>

          {/* Connected Monolithic Pillar Frame */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/10 bg-[#0C0C0C] relative overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
          >
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-8 sm:p-7 lg:p-8 flex flex-col justify-between relative group hover:bg-[#141414] transition-all duration-300 min-h-[300px]"
                >
                  {/* Top Glowing Hover Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#AC58E9] transition-colors duration-300" />

                  {/* Watermark Number in Background */}
                  <span className="text-6xl sm:text-7xl font-mono font-bold text-white/[0.03] group-hover:text-[#AC58E9]/10 select-none pointer-events-none absolute right-4 bottom-2 transition-colors duration-300">
                    {val.tag}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-11 h-11 border border-white/15 bg-[#141414] flex items-center justify-center text-zinc-300 group-hover:border-[#AC58E9] group-hover:bg-[#AC58E9] group-hover:text-white transition-all duration-300 shadow-[2px_2px_0_rgba(172,88,233,0.3)]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-zinc-600 group-hover:text-[#AC58E9] transition-colors">
                        {val.tag}
                      </span>
                    </div>

                    <h4 className="text-xl font-semibold text-white tracking-tight mb-3 group-hover:text-[#AC58E9] transition-colors">
                      {val.title}
                    </h4>

                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="relative z-10 pt-6">
                    <div className="h-0.5 w-6 bg-white/20 group-hover:w-full group-hover:bg-[#AC58E9] transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Why Choose Infinitica & Get In Touch CTA Card */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Why Choose Infinitica (The Advantage) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#111] border border-white/10 p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between group hover:border-[#AC58E9] transition-all duration-500 hover:shadow-[4px_4px_0_rgba(172,88,233,1)]"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#AC58E9]/10 blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#AC58E9] via-[#AC58E9]/40 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 border border-[#AC58E9]/40 bg-[#AC58E9]/10 text-[10px] font-semibold tracking-widest text-[#AC58E9] uppercase mb-4">
                The Advantage
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight uppercase mb-8 font-sans">
                Why Choose <span className="text-[#AC58E9]">Infinitica</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((point) => (
                  <div
                    key={point}
                    className="p-4 sm:p-5 bg-[#0C0C0C] border border-white/10 flex items-start gap-4 group/point hover:border-[#AC58E9] hover:bg-[#161616] transition-all duration-300"
                  >
                    <div className="w-6 h-6 mt-0.5 border border-[#AC58E9] bg-[#AC58E9]/10 flex items-center justify-center flex-shrink-0 text-[#AC58E9] group-hover/point:bg-[#AC58E9] group-hover/point:text-white transition-colors">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-zinc-200 text-sm font-light leading-snug group-hover/point:text-white transition-colors">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corner Decorative Bracket */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/10 group-hover:border-[#AC58E9] transition-colors pointer-events-none" />
          </motion.div>

          {/* Right: Get in Touch Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-[#AC58E9] transition-all duration-500 hover:shadow-[4px_4px_0_rgba(172,88,233,1)]"
          >
            {/* Ambient Purple Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#AC58E9]/20 blur-3xl pointer-events-none group-hover:bg-[#AC58E9]/35 transition-all duration-700" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#AC58E9] to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#AC58E9] text-xs font-mono uppercase tracking-widest mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4 leading-snug">
                Have a question or want to know more about what we do?
              </h4>
              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-8">
                Contact us and our team will be happy to help.
              </p>
            </div>
            
            <div className="relative z-10 pt-4">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-between bg-white text-black font-semibold text-sm px-7 py-4 border border-white hover:bg-[#AC58E9] hover:text-white hover:border-[#AC58E9] transition-all duration-300 tracking-tight shadow-[4px_4px_0_rgba(172,88,233,0.5)] active:translate-x-0.5 active:translate-y-0.5 group/btn"
              >
                <span className="uppercase tracking-wider text-xs font-bold">Contact Our Team</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Link>
            </div>

            {/* Corner Bracket */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/10 group-hover:border-[#AC58E9] transition-colors pointer-events-none" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

