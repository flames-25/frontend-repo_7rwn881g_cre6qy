import { Gauge, Activity, LineChart, Shield } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Real-time telemetry",
    desc: "Stream and visualize lap-by-lap performance with millisecond resolution.",
  },
  {
    icon: LineChart,
    title: "Benchmark comparisons",
    desc: "Stack power units, aero kits, and compounds across circuits and sessions.",
  },
  {
    icon: Activity,
    title: "Anomaly detection",
    desc: "Surface outliers in temps, pressures, and deltas before they become problems.",
  },
  {
    icon: Shield,
    title: "Enterprise security",
    desc: "SSO, RBAC, and encrypted pipelines that meet paddock-grade requirements.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Built for speed, designed for clarity
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            Everything you need to monitor, compare, and win with data.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 via-rose-500 to-orange-500 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
