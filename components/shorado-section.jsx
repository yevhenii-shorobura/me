import Image from "next/image";
import {
  Layers,
  ShieldCheck,
  Zap,
  LayoutGrid,
  Database,
  ExternalLink,
  Flame,
  KeyRound,
  Radio,
} from "lucide-react";
import { getAssetPath } from "../src/lib/utils";

const SHORADO_PILLARS = [
  {
    step: "01",
    title: "The Problem",
    icon: Flame,
    description:
      "Existing Ukrainian platforms for selling used items let visibility be bought outright. The best listing isn't the one shown first — the one paid for is. My father's work as a realtor made that broken pay-to-win dynamic visible up close.",
    tag: "Market Distortion",
  },
  {
    step: "02",
    title: "The Idea",
    icon: ShieldCheck,
    description:
      "Here, you don't buy first place. Ranking organically tracks seller reputation, verified authenticity, and listing quality — never ad spend.",
    tag: "Merit-Based Discovery",
  },
  {
    step: "03",
    title: "The System",
    icon: Database,
    description:
      "A PostgreSQL schema built around items, users, and an append-only event log. Uses a progressive reach-stage model that governs how far a listing travels strictly based on real algorithmic signal rather than payment.",
    tag: "Event-Log & Schema",
  },
  {
    step: "04",
    title: "The Interface",
    icon: LayoutGrid,
    description:
      "A dark, amber-accented UI in Ukrainian built around bento-style grids, passwordless WebAuthn passkey authentication, and an instant buyer-seller chat system streaming over WebSockets.",
    tag: "Bento & WebAuthn",
  },
  {
    step: "05",
    title: "The Engineering",
    icon: Zap,
    description:
      "Fastify & Node.js on the backend, Cloudflare R2 + CDN edge caching for media, a Sharp-based pipeline auto-generating WebP variants with blur placeholders, and an HTTP 410 tombstone pattern for deleted listings.",
    tag: "Edge CDN & Sharp",
  },
];

export function ShoradoSection() {
  return (
    <section id="shorado" className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-accent text-sm font-semibold tracking-widest uppercase">
          02 — Featured Project
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-32" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl sm:text-5xl font-unbounded font-bold text-white tracking-tight">
              Shorado
            </h2>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-accent/20 text-orange-200 border border-accent/30">
                SOLO-BUILT
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                IN PRODUCTION
              </span>
            </div>
          </div>
          <p className="font-mono text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            A Ukrainian marketplace built solo, exploring how listings should be discovered and ranked when visibility isn&apos;t for sale.
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02]">
            <KeyRound size={13} className="text-accent" /> WebAuthn Passkeys
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02]">
            <Radio size={13} className="text-accent" /> Live WebSockets
          </div>
        </div>
      </div>

      {/* Hero Showcase Image */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0c0506] p-3 sm:p-5 mb-12 shadow-2xl group">
        <div className="flex items-center justify-between pb-3 px-2 border-b border-white/5 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 text-zinc-400">shorado.com.ua — Production Interface</span>
          </div>
          <span className="hidden sm:inline text-accent">Ukrainian Marketplace</span>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mt-3">
          <Image
            src={getAssetPath("/assets/shorado-screenshot.webp")}
            alt="Screenshot of Shorado interfaces"
            fill
            sizes="(max-width: 1200px) 100vw, 1100px"
            className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050102]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
          <span>Dark & amber-accented Ukrainian UI with bento layout</span>
          <span className="text-zinc-500">Fastify • Node.js • PostgreSQL • Cloudflare R2 • WebAuthn</span>
        </div>
      </div>

      {/* 5 Pillars Bento Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SHORADO_PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isLarge = idx === 2 || idx === 4;
          return (
            <div
              key={pillar.step}
              className={`p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group ${
                isLarge ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-accent tracking-widest">
                    {pillar.step} — {pillar.tag}
                  </span>
                  <div className="p-2 rounded-lg bg-white/[0.03] text-zinc-300 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="font-unbounded font-bold text-lg text-white mb-3">
                  {pillar.title}
                </h3>

                <p className="font-mono text-zinc-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Architecture Pillar</span>
                <span className="text-zinc-400 group-hover:text-accent transition-colors">
                  Production Tested →
                </span>
              </div>
            </div>
          );
        })}

        {/* Highlight Card: Solo Ownership */}
        <div className="p-6 sm:p-8 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent backdrop-blur-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              <Layers size={16} />
              <span>Full-Cycle Solo Operations</span>
            </div>
            <h3 className="font-unbounded font-bold text-xl text-white">
              Built from scratch, operated with zero dev bloat.
            </h3>
            <p className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Every detail — UI state machines, WebSocket push gateways, database connection pooling, image resizing workers, and HTTP cache headers — maintained by a single engineer.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-accent/20 flex items-center justify-between font-mono text-xs text-orange-200">
            <span>Marketplace Platform</span>
            <span className="font-semibold text-white">Live since 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
