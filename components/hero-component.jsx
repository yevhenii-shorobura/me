"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "../src/lib/language-context";

export function HeroComponent() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 min-h-[calc(100vh-4rem)] flex flex-col justify-end pb-16 sm:pb-20">
      {/* Badges / Pill Tags */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="bg-accent/50 w-fit px-3 py-1 text-xs sm:text-sm font-mono font-semibold text-orange-50/90 rounded-full border border-accent/40 shadow-sm">
          {t.hero.role}
        </div>

        <div className="font-mono text-xs sm:text-sm text-zinc-400 bg-white/[0.03] backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
          {t.hero.origin}
        </div>

        <a
          href="#about"
          className="flex items-center gap-1.5 backdrop-blur-sm bg-accent/15 hover:bg-accent/25 border border-accent/30 text-orange-100/90 hover:text-white px-3 py-1 text-xs sm:text-sm font-mono font-semibold rounded-full transition-all group"
        >
          <span>{t.hero.explore}</span>
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </a>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-unbounded font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-4">
        {t.hero.firstName} <span className="text-accent">{t.hero.lastName}</span>
      </h1>

      {/* Philosophy Subtitle */}
      <p className="max-w-2xl text-base sm:text-lg md:text-xl font-mono text-zinc-300/90 leading-relaxed">
        {t.hero.quote}
      </p>

      {/* Subtle Scroll Cue */}
      <div className="mt-12 flex items-center gap-2 text-zinc-500 font-mono text-xs tracking-wider uppercase">
        <ChevronDown size={16} className="animate-bounce text-accent" />
        <span>{t.hero.scrollDown}</span>
      </div>
    </section>
  );
}
