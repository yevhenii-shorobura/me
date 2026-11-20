"use client";

import {
  Monitor,
  Smartphone,
  Package,
  Server,
  Database,
  Radio,
} from "lucide-react";
import { useLanguage } from "../src/lib/language-context";

const DOMAIN_ICONS = [Monitor, Smartphone, Package, Server, Database, Radio];

export function BuildSection() {
  const { t } = useLanguage();

  return (
    <section id="build" className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32 scroll-mt-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-accent text-sm font-semibold tracking-widest uppercase">
          {t.build.tag}
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-32" />
      </div>

      <h2 className="text-3xl sm:text-5xl font-unbounded font-bold text-white tracking-tight mb-4">
        {t.build.title}
      </h2>

      <p className="font-mono text-zinc-400 text-sm sm:text-base max-w-2xl mb-12">
        {t.build.subtitle}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.build.domains.map((domain, idx) => {
          const Icon = DOMAIN_ICONS[idx] || Monitor;
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
                  {domain.desc}
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
