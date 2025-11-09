import { motion } from "framer-motion";

const rows = [
  { team: "Redline Racing", circuit: "Monza", best: "1:20.114", delta: "-0.148s", color: "text-emerald-500" },
  { team: "Apex Motors", circuit: "Spa", best: "1:42.993", delta: "+0.041s", color: "text-yellow-500" },
  { team: "Quantum GP", circuit: "Suzuka", best: "1:28.301", delta: "+0.213s", color: "text-rose-500" },
  { team: "Velocity Works", circuit: "Silverstone", best: "1:26.517", delta: "-0.072s", color: "text-emerald-500" },
];

export default function Benchmarks() {
  return (
    <section id="benchmarks" className="relative bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Live benchmark board
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-xl">
              Compare best sectors, stint averages, and tyre-adjusted laps across teams.
            </p>
          </div>
          <a href="#" className="text-sm font-medium text-red-600 hover:text-red-700">View all circuits →</a>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900">
          <div className="grid grid-cols-4 gap-0 border-b border-black/5 dark:border-white/10 text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            <div className="px-4 py-3">Team</div>
            <div className="px-4 py-3">Circuit</div>
            <div className="px-4 py-3">Best Lap</div>
            <div className="px-4 py-3">Delta</div>
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={r.team}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-4 gap-0 border-b last:border-b-0 border-black/5 dark:border-white/10"
            >
              <div className="px-4 py-4 font-medium text-neutral-900 dark:text-white">{r.team}</div>
              <div className="px-4 py-4 text-neutral-700 dark:text-neutral-300">{r.circuit}</div>
              <div className="px-4 py-4 text-neutral-700 dark:text-neutral-300">{r.best}</div>
              <div className={`px-4 py-4 font-medium ${r.color}`}>{r.delta}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
