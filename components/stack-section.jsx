import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Bot,
  Cloud,
  Compass,
} from "lucide-react";

const STACK_CATEGORIES = [
  {
    category: "Core",
    icon: Code2,
    description: "Foundational web & execution runtime",
    skills: ["JavaScript", "Node.js", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    icon: Layout,
    description: "Declarative, high-speed user interfaces",
    skills: ["React", "Next.js", "TailwindCSS", "Zustand"],
  },
  {
    category: "Backend",
    icon: Server,
    description: "High-throughput APIs & microservices",
    skills: ["Node.js", "Fastify", "Express"],
  },
  {
    category: "Data",
    icon: Database,
    description: "Structured storage, caching & key-value stores",
    skills: ["PostgreSQL", "SQLite", "Redis"],
  },
  {
    category: "Systems",
    icon: Cpu,
    description: "Protocols, authentication & offline layers",
    skills: ["REST APIs", "WebSockets", "WebAuthn / Passkeys", "PWA / Service Workers"],
  },
  {
    category: "AI & LLM Integration",
    icon: Bot,
    description: "Model integration, moderation & AI tooling",
    skills: ["Together AI API", "ChatGPT API", "ChatGPT Moderation API", "Vercel AI"],
  },
  {
    category: "Services & Cloud",
    icon: Cloud,
    description: "Edge networks, database hosts & deployments",
    skills: ["Cloudflare R2 & CDN", "Vercel Deploying", "Supabase", "Firebase FCM"],
  },
  {
    category: "Exploring & Mobile",
    icon: Compass,
    description: "Active research & expansion domains",
    skills: ["React Native", "Kotlin", "Swift", "Go"],
  },
];

export function StackSection() {
  return (
    <section id="stack" className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32 scroll-mt-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-accent text-sm font-semibold tracking-widest uppercase">
          04 — Technologies
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-32" />
      </div>

      <h2 className="text-3xl sm:text-5xl font-unbounded font-bold text-white tracking-tight mb-4">
        The Stack
      </h2>

      <p className="font-mono text-zinc-400 text-sm sm:text-base max-w-2xl mb-12">
        Grouped by what it&apos;s for. Tools chosen for resilience, clarity, and real operational predictability.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {STACK_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.category}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono font-bold text-sm uppercase tracking-wider text-white group-hover:text-accent transition-colors">
                    {cat.category}
                  </h3>
                  <div className="p-2 rounded-lg bg-white/[0.03] text-zinc-400 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                    <Icon size={16} />
                  </div>
                </div>

                <p className="font-mono text-xs text-zinc-500 mb-5 leading-normal">
                  {cat.description}
                </p>

                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 font-mono text-xs text-zinc-300 hover:text-white transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[11px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                {cat.skills.length} technologies
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
