"use client";

import { useState } from "react";

import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#AC58E9] via-[#C084FC] to-[#AC58E9] origin-left z-[100] pointer-events-none shadow-[0_0_12px_rgba(172,88,233,0.8)]"
      />
    <nav className="w-full bg-[#0A0A0A] border-b border-white/10 sticky top-0 z-50 transition-all duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-light  tracking-tight text-white hover:text-[#AC58E9] transition-colors  font-sans"
            >
              Infinitica
            </Link>
          </div>

       

       

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-white text-black border border-white font-semibold text-[15px] px-6 py-2.5 rounded-none hover:bg-[#AC58E9] hover:text-white hover:border-[#AC58E9] active:scale-95 transition-all duration-200 tracking-tight"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              aria-label="Shopping Cart"
              className="p-2 rounded-none border border-white/10 bg-[#111] text-zinc-300 hover:text-[#AC58E9] hover:border-[#AC58E9]"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-none border border-transparent text-zinc-400 hover:text-[#AC58E9] hover:border-white/10 hover:bg-[#111] focus:outline-none transition-all"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-[#AC58E9] py-2 transition-colors border-l-2 border-transparent hover:border-[#AC58E9] pl-2"
            >
              Features
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-[#AC58E9] py-2 transition-colors border-l-2 border-transparent hover:border-[#AC58E9] pl-2"
            >
              About us
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-[#AC58E9] py-2 transition-colors border-l-2 border-transparent hover:border-[#AC58E9] pl-2"
            >
              Pricing
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-[#AC58E9] py-2 transition-colors border-l-2 border-transparent hover:border-[#AC58E9] pl-2"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-[#AC58E9] py-2 transition-colors border-l-2 border-transparent hover:border-[#AC58E9] pl-2"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-white text-black border border-white font-semibold py-3 rounded-none hover:bg-[#AC58E9] hover:text-white hover:border-[#AC58E9] transition-colors mt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
