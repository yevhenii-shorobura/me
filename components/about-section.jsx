"use client";

import Image from "next/image";
import { Terminal, MapPin, Compass, Sparkles } from "lucide-react";
import { getAssetPath } from "../src/lib/utils";
import { useLanguage } from "../src/lib/language-context";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-accent text-sm font-semibold tracking-widest uppercase">
          {t.about.tag}
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-32" />
      </div>

      <h2 className="text-3xl sm:text-5xl font-unbounded font-bold text-white tracking-tight mb-12">
        {t.about.titlePrefix}
        <span className="text-accent">{t.about.titleProduct}</span>
        {t.about.titleAnd}
        <span className="text-accent">{t.about.titleSystem}</span>
        {t.about.titleSuffix}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Photo & Quick Meta */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={getAssetPath("/assets/me.webp")}
                alt="Yevhenii Shorobura"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050102] via-[#050102]/20 to-transparent" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-[#050102]/70 border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <MapPin size={13} className="text-accent" /> {t.about.locationCity}
                </span>
                <span className="text-zinc-500">{t.about.originCity}</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              <div className="text-accent font-unbounded font-bold text-xl sm:text-2xl">
                {t.about.metricSoloNum}
              </div>
              <div className="text-zinc-400 font-mono text-xs mt-1">
                {t.about.metricSoloDesc}
              </div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              <div className="text-accent font-unbounded font-bold text-xl sm:text-2xl">
                {t.about.metricSelfTaughtNum}
              </div>
              <div className="text-zinc-400 font-mono text-xs mt-1">
                {t.about.metricSelfTaughtDesc}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm space-y-5">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider">
              <Terminal size={14} />
              <span>{t.about.badgeMindset}</span>
            </div>

            <p className="font-mono text-zinc-300 text-sm sm:text-base leading-relaxed">
              {t.about.p1Greeting}
              <strong className="text-white font-semibold">{t.about.p1Name}</strong>
              {t.about.p1Text}
            </p>

            <p className="font-mono text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.about.p2Text}
            </p>

            <p className="font-mono text-zinc-300 text-sm sm:text-base leading-relaxed">
              {t.about.p3Since}
              <span className="text-accent font-semibold">{t.about.p3Product}</span>
              {t.about.p3Rest}
            </p>
          </div>

          {/* Quote Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-accent/20 bg-accent/[0.03] backdrop-blur-sm relative overflow-hidden group hover:border-accent/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <Compass className="text-accent shrink-0 mt-1" size={24} />
              <div className="space-y-3">
                <blockquote className="font-mono text-zinc-200 text-sm sm:text-base italic leading-relaxed">
                  {t.about.quote}
                </blockquote>
                <div className="font-mono text-xs text-accent font-semibold">
                  {t.about.quoteAuthor}
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.015] flex items-start gap-3">
              <Sparkles size={16} className="text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono text-sm text-white font-semibold">
                  {t.about.val1Title}
                </h4>
                <p className="font-mono text-xs text-zinc-400 mt-1">
                  {t.about.val1Desc}
                </p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.015] flex items-start gap-3">
              <Terminal size={16} className="text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono text-sm text-white font-semibold">
                  {t.about.val2Title}
                </h4>
                <p className="font-mono text-xs text-zinc-400 mt-1">
                  {t.about.val2Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
