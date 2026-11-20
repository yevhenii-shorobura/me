"use client";

import { TrendingUp } from "lucide-react";
import { useLanguage } from "../src/lib/language-context";

export function PathSection() {
  const { t } = useLanguage();

  return (
    <section id="path" className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32 scroll-mt-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-accent text-sm font-semibold tracking-widest uppercase">
          {t.path.tag}
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-32" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl sm:text-5xl font-unbounded font-bold text-white tracking-tight mb-3">
            {t.path.title}
          </h2>
          <p className="font-mono text-zinc-400 text-sm sm:text-base max-w-2xl">
            {t.path.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] w-fit">
          <TrendingUp size={14} className="text-accent" />
          <span>{t.path.badge}</span>
        </div>
      </div>

      {/* Vertical / Staggered Progression Cards */}
      <div className="space-y-4">
        {t.path.steps.map((step) => (
          <div
            key={step.step}
            className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="font-mono text-xl sm:text-2xl font-bold text-accent shrink-0 mt-0.5">
                {step.step}
              </span>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-unbounded font-bold text-lg sm:text-xl text-white">
                    {step.title}
                  </h3>
                  <span className="text-zinc-500 font-mono text-xs hidden sm:inline">
                    — {step.subtitle}
                  </span>
                </div>
                <p className="font-mono text-zinc-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 md:justify-end shrink-0 max-w-xs">
              {step.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/5 group-hover:border-accent/20 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
