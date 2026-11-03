"use client";

import Link from "next/link";
import { ChevronRight, Infinity } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  })
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0A] text-white md:pt-10 md:pb-10">

      {/* Subtle Noise / Grid Pattern for Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwdjIwSDIwVjIweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIi8+PC9zdmc+')] opacity-40 pointer-events-none z-0 mask-[linear-gradient(to_bottom,black,transparent)]" />

      {/* Main Content Wrapper */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section: Asymmetrical Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16">

          {/* Left Column: Massive Bold Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            <h1 className="text-[50px] sm:text-[75px] md:text-[90px] lg:text-[110px] font-bold text-white tracking-tighter leading-[0.9] font-sans uppercase">
              INTELLIGENCE<br />
              FOR THE<br />
              <span className="flex items-center">
                REAL
                {/* Purple Brutalist Infinity Button */}
                <span className="relative flex items-center justify-center w-12 h-12 md:w-20 md:h-20 mx-3 md:mx-6 rounded-none border-2 border-white bg-[#AC58E9] shadow-[4px_4px_0_white] -mt-2 md:-mt-4">
                  <Infinity className="w-6 h-6 md:w-10 md:h-10 text-white" strokeWidth={2} />
                </span>
                WORLD
              </span>
            </h1>
          </motion.div>

          {/* Right Column: Editorial Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-center lg:pt-12"
          >
            <div className="w-12 h-1 bg-[#AC58E9] mb-8 rounded-none" />
            <h2 className="text-2xl sm:text-3xl font-light text-zinc-300 mb-6 tracking-tight">
              Intelligence. <span className="font-semibold text-[#AC58E9]">Without boundaries.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-10 font-light max-w-md border-l-2 border-[#AC58E9]/50 pl-6">
              INFINITICA is a global AI-led product company. We build intelligent products that solve meaningful real-world problems and create measurable human and economic value.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section: Editorial Cards Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: Minimal Dark with Purple Hover */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative h-[450px] sm:h-[500px] bg-[#111] border border-white/10 rounded-none p-8 flex flex-col justify-start overflow-hidden cursor-pointer hover:bg-[#1A1A1A] transition-all duration-500 hover:-translate-y-2 hover:border-[#AC58E9]"
          >
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-none border border-white/20 text-[10px] font-semibold tracking-widest text-zinc-400 uppercase mb-6 group-hover:text-[#AC58E9] group-hover:border-[#AC58E9] transition-colors">Core Value</span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-tight">
                Problem Before Technology
              </h3>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-none group-hover:bg-[#AC58E9]/10 transition-all duration-700 border border-white/5 group-hover:border-[#AC58E9]/20" />
          </motion.div>

          {/* Card 2: Minimal Accent */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative h-[450px] sm:h-[500px] bg-[#0A0A0A] border border-white/20 rounded-none p-8 flex flex-col justify-start overflow-hidden cursor-pointer hover:border-[#AC58E9] transition-all duration-500 hover:-translate-y-2 hover:shadow-[4px_4px_0_rgba(172,88,233,1)]"
          >
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-none border border-[#AC58E9]/40 text-[10px] font-semibold tracking-widest text-white uppercase mb-6 bg-[#AC58E9]/20">Core Value</span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-tight">
                Intelligence by Design
              </h3>
            </div>
            <div className="absolute bottom-8 right-8 w-20 h-20 rounded-none border border-[#AC58E9] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#AC58E9] transition-all duration-500 bg-[#111]">
              <div className="w-8 h-8 rounded-none border border-[#AC58E9]/50 group-hover:border-white/50" />
            </div>
          </motion.div>

          {/* Card 3: Purple Brutalist Accent */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative h-[450px] sm:h-[500px] bg-[#111] border border-white/10 rounded-none p-8 flex flex-col justify-start overflow-hidden cursor-pointer hover:bg-black transition-all duration-500 hover:-translate-y-2 hover:border-[#AC58E9] hover:shadow-[4px_4px_0_rgba(172,88,233,1)]"
          >
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-none border border-white/20 text-[10px] font-semibold tracking-widest text-zinc-300 uppercase mb-6 bg-black/50 group-hover:bg-[#AC58E9] group-hover:text-white group-hover:border-[#AC58E9] transition-colors">Core Value</span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-tight">
                Real-World Impact
              </h3>
            </div>
            {/* Brutalist geometric purple accent */}
            <div className="absolute -bottom-16 -left-16 w-64 h-64 border-[4px] border-[#AC58E9] opacity-30 rotate-12 group-hover:rotate-0 group-hover:opacity-100 group-hover:bg-[#AC58E9]/10 transition-all duration-700 rounded-none flex items-center justify-center">
              <div className="w-32 h-32 border-[2px] border-white/20 rotate-45 group-hover:rotate-0 transition-all duration-700" />
            </div>
            <div className="absolute top-1/2 right-[-20%] w-full h-[1px] bg-[#AC58E9]/20 group-hover:bg-[#AC58E9]/50 transition-colors duration-500" />
            <div className="absolute top-[-20%] right-1/4 w-[1px] h-full bg-[#AC58E9]/20 group-hover:bg-[#AC58E9]/50 transition-colors duration-500" />
          </motion.div>

          {/* Card 4: Minimal Grid Focus */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative h-[450px] sm:h-[500px] bg-[#111] border border-white/10 rounded-none p-8 flex flex-col justify-start overflow-hidden cursor-pointer hover:bg-[#151515] transition-all duration-500 hover:-translate-y-2 hover:border-[#AC58E9]"
          >
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-none border border-white/10 text-[10px] font-semibold tracking-widest text-zinc-400 uppercase mb-6 bg-black/20 group-hover:border-[#AC58E9]/50 transition-colors">Core Value</span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-tight">
                Global by Default
              </h3>
            </div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 border border-white/10 rounded-none group-hover:scale-110 transition-transform duration-1000 flex items-center justify-center rotate-45 group-hover:border-[#AC58E9]/40">
              <div className="w-60 h-60 border border-white/10 rounded-none flex items-center justify-center group-hover:border-[#AC58E9]/30">
                <div className="w-40 h-40 border border-white/10 rounded-none flex items-center justify-center bg-white/5 group-hover:bg-[#AC58E9]/10 group-hover:border-[#AC58E9]/20" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
