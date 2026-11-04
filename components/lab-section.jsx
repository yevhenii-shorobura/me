import {
  Smartphone,
  ScanBarcode,
  BellRing,
  Gauge,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";

const LAB_EXPERIMENTS = [
  {
    index: "01",
    title: "Onboarding & Mobile UX",
    icon: Smartphone,
    summary:
      "Programmatic phone mockups with perspective-warped screenshots, collapsible navigation, and a keyboard-safe chat UI tuned specifically for Android's viewport quirks.",
    focus: "Mobile Viewports & Keyboard Resizing",
    tag: "UI Engineering",
  },
  {
    index: "02",
    title: "Cross-Platform Barcode Scanning",
    icon: ScanBarcode,
    summary:
      "A BarcodeDetector-based scanner implementation with an automated polyfill fallback for legacy engines and browsers without native hardware-accelerated camera detection.",
    focus: "Native Hardware APIs & Polyfills",
    tag: "Web APIs",
  },
  {
    index: "03",
    title: "Notification Architecture",
    icon: BellRing,
    summary:
      "Firebase Cloud Messaging paired with a specialized Service Worker layer that isolates offline asset caching logic from background push delivery handling.",
    focus: "Decoupled Push & Offline Workers",
    tag: "PWA & Workers",
  },
  {
    index: "04",
    title: "Edge Caching & Low-Latency ISR",
    icon: Gauge,
    summary:
      "Cloudflare CDN placed strategically in front of Next.js Incremental Static Regeneration, crushing time-to-first-byte (TTFB) down to ~20ms globally.",
    focus: "Next.js ISR + Cloudflare Edge (~20ms TTFB)",
    tag: "Performance",
  },
];

export function LabSection() {
  return (
    <section id="lab" className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32 scroll-mt-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-accent text-sm font-semibold tracking-widest uppercase">
          05 — R&D Experiments
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-32" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl sm:text-5xl font-unbounded font-bold text-white tracking-tight mb-3">
            Lab
          </h2>
          <p className="font-mono text-zinc-400 text-sm sm:text-base max-w-2xl">
            Where the stack gets tested before it&apos;s trusted. Deep-dive prototypes, performance benchmarks, and browser edge cases.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-accent px-3 py-1.5 rounded-lg border border-accent/20 bg-accent/5 w-fit">
          <FlaskConical size={14} />
          <span>Active Prototyping</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LAB_EXPERIMENTS.map((exp) => {
          const Icon = exp.icon;
          return (
            <div
              key={exp.index}
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-accent tracking-widest">
                      {exp.index}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white/[0.04] text-zinc-400 border border-white/5">
                      {exp.tag}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.03] text-zinc-400 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="font-unbounded font-bold text-lg text-white mb-3">
                  {exp.title}
                </h3>

                <p className="font-mono text-zinc-400 text-sm leading-relaxed mb-6">
                  {exp.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="text-zinc-300 font-medium">{exp.focus}</span>
                <span className="text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Verified <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
