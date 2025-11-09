import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-red-500 via-rose-500 to-orange-500 shadow-lg" />
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">
            ApexBench
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#benchmarks" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Benchmarks</a>
          <a href="#pricing" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm hover:opacity-90 transition">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
