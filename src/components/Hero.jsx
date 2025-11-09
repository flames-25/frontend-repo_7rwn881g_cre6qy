import Spline from "@splinetool/react-spline";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient and vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_30%,black_60%,transparent_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Live telemetry-ready
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            F1 benchmark monitoring for teams that move fast
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            ApexBench turns raw laps into real-time insights. Compare power units, aero packages,
            and strategy across circuits with beautiful, actionable dashboards.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow hover:opacity-95 transition"
            >
              Explore Features <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#benchmarks"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition"
            >
              Quick Demo <Play className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-white/60">
            Trusted by performance analysts, race engineers, and sim ops.
          </p>
        </div>
      </div>
    </section>
  );
}
