import {
  Monitor,
  Smartphone,
  Package,
  Server,
  Database,
  Radio,
  ArrowRight,
} from "lucide-react";

const BUILD_DOMAINS = [
  {
    index: "01",
    title: "Interfaces",
    icon: Monitor,
    description: "Component-driven UI built for clarity and speed, not decoration.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    highlight: "Clarity & Speed",
  },
  {
    index: "02",
    title: "Applications",
    icon: Smartphone,
    description: "Full products with robust auth, predictable state, and real-time interaction.",
    tech: ["WebAuthn", "Zustand", "WebSocket"],
    highlight: "State & Auth",
  },
  {
    index: "03",
    title: "Products",
    icon: Package,
    description: "Taking all of the above and shipping it as something people actually use — end to end. Shorado is the proof.",
    tech: ["Shorado", "Solo-built", "In production"],
    highlight: "End-to-End Proof",
  },
  {
    index: "04",
    title: "Backends",
    icon: Server,
    description: "APIs and services designed cleanly around the data they actually need to move.",
    tech: ["Node.js", "Fastify", "Express"],
    highlight: "Data-driven APIs",
  },
  {
    index: "05",
    title: "Data",
    icon: Database,
    description: "Schemas built for growth — immutable event logs and query indexes that hold under load.",
    tech: ["PostgreSQL", "Redis", "SQLite"],
    highlight: "Resilient Schemas",
  },
  {
    index: "06",
    title: "Real-time systems",
    icon: Radio,
    description: "Sockets and push pipelines that stay synchronized with zero wasteful polling.",
    tech: ["WebSocket", "FCM", "Service Workers"],
    highlight: "Push & Sync",
  },
];

export function BuildSection() {
  return (
    <section id="build" className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32 scroll-mt-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-accent text-sm font-semibold tracking-widest uppercase">
          03 — Capabilities
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-32" />
      </div>

      <h2 className="text-3xl sm:text-5xl font-unbounded font-bold text-white tracking-tight mb-4">
        What I build
      </h2>

      <p className="font-mono text-zinc-400 text-sm sm:text-base max-w-2xl mb-12">
        Interfaces, applications, backends, and the systems that connect them into cohesive products.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BUILD_DOMAINS.map((domain) => {
          const Icon = domain.icon;
          return (
            <div
              key={domain.index}
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-accent tracking-widest">
                    {domain.index}
                  </span>
                  <div className="p-2 rounded-lg bg-white/[0.03] text-zinc-300 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="font-unbounded font-bold text-lg text-white mb-2">
                  {domain.title}
                </h3>

                <p className="font-mono text-zinc-400 text-sm leading-relaxed mb-6">
                  {domain.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {domain.tech.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/[0.03] text-zinc-300 border border-white/5 group-hover:border-accent/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
