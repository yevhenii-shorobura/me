"use client";

import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Globe2,
} from "lucide-react";
import { useLanguage } from "../src/lib/language-context";

function GithubIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();
  const email = "hello@shorado.com.ua";

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32 scroll-mt-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-accent text-sm font-semibold tracking-widest uppercase">
          {t.contact.tag}
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-32" />
      </div>

      {/* Main Pitch */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-unbounded font-bold text-white tracking-tight mb-4">
          {t.contact.pitchPrefix} <br className="hidden sm:inline" />
          <span className="text-accent">{t.contact.pitchAccent}</span>
        </h2>
        <p className="font-mono text-zinc-400 text-sm sm:text-base max-w-xl">
          {t.contact.subtitle}
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Direct Outreach & Links */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-accent uppercase tracking-wider flex items-center gap-2">
                <Mail size={14} /> {t.contact.directChannel}
              </span>
              <span className="font-mono text-xs text-zinc-500">{t.contact.locationCity}</span>
            </div>

            {/* Email Box */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-zinc-500">{t.contact.primaryEmail}</span>
                <a
                  href={`mailto:${email}`}
                  className="block font-mono font-semibold text-lg sm:text-xl text-white hover:text-accent transition-colors"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] hover:border-accent/50 text-zinc-300 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">{t.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>{t.contact.copy}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="px-4 py-2 rounded-lg bg-accent/90 hover:bg-accent text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>{t.contact.write}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href="https://github.com/mczheniok"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-accent/40 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
                  <div>
                    <div className="font-mono text-sm font-semibold text-white group-hover:text-accent transition-colors">
                      GitHub
                    </div>
                    <div className="font-mono text-xs text-zinc-500">@mczheniok</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/yevhenii-shorobura/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-accent/40 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
                  <div>
                    <div className="font-mono text-sm font-semibold text-white group-hover:text-accent transition-colors">
                      LinkedIn
                    </div>
                    <div className="font-mono text-xs text-zinc-500">in/yevhenii-shorobura</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Inspirational Lombardi Quote */}
          <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm">
            <figure className="space-y-2">
              <blockquote className="font-mono text-xs sm:text-sm text-zinc-400 italic">
                {t.contact.quote}
              </blockquote>
              <figcaption className="font-mono text-xs text-accent font-semibold">
                {t.contact.quoteAuthor}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Right Column: Spoken Languages */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-accent uppercase tracking-wider flex items-center gap-2">
                <Globe2 size={14} /> {t.contact.languagesHeader}
              </span>
              <span className="font-mono text-xs text-zinc-500">{t.contact.languagesSub}</span>
            </div>

            <h3 className="font-unbounded font-bold text-lg text-white mb-2">
              {t.contact.languagesTitle}
            </h3>
            <p className="font-mono text-xs text-zinc-400 mb-6">
              {t.contact.languagesDesc}
            </p>

            <div className="space-y-3">
              {t.contact.languages.map((lng) => (
                <div
                  key={lng.code}
                  className="p-3.5 rounded-xl border border-white/5 bg-white/[0.015] flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-sm text-accent w-10">
                      {lng.code}
                    </span>
                    <div>
                      <div className="font-mono text-xs font-semibold text-white">
                        {lng.name}
                      </div>
                      <div className="font-mono text-[11px] text-zinc-500">
                        {lng.desc}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/5">
                    {lng.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 font-mono text-[11px] text-zinc-500 text-center">
            {t.contact.locationNote}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
        <div>
          © 2026 <span className="text-zinc-300">Yevhenii Shorobura</span>. {t.contact.copyright}
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-accent transition-colors">
            {t.contact.backToTop}
          </a>
        </div>
      </footer>
    </section>
  );
}
