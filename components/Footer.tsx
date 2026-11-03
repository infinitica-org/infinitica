import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 border-t border-zinc-900 mt-auto relative z-10">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link href="/" className="text-white font-bold tracking-tight hover:text-[#AC58E9] transition-colors">
            INFINITICA
          </Link>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Infinitica. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
          <Link href="/#about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors text-white font-medium">Contact & Offices</Link>
        </div>
      </div>
    </footer>
  );
}

