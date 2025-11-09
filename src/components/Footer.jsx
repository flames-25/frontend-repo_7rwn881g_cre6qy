export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} ApexBench. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
