"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "../src/lib/language-context";

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#shorado", label: t.nav.shorado },
    { href: "#build", label: t.nav.build },
    { href: "#stack", label: t.nav.stack },
    { href: "#lab", label: t.nav.lab },
    { href: "#path", label: t.nav.path },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#050102]/80 border-b border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-wider text-white hover:text-accent transition-colors group"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse group-hover:scale-125 transition-transform" />
          <span>Y. Shorobura</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language Switcher & Location Pill */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher Pill */}
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 font-mono text-xs">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
                lang === "en"
                  ? "bg-accent text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("de")}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
                lang === "de"
                  ? "bg-accent text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
              aria-label="Auf Deutsch umstellen"
            >
              DE
            </button>
          </div>

          <div className="font-mono text-[11px] text-zinc-400 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="text-accent font-semibold">{t.nav.location}</span>
          </div>

          <a
            href="mailto:hello@shorado.com.ua"
            className="flex items-center gap-1 font-mono text-[11px] text-zinc-300 hover:text-accent px-3 py-1 rounded-full border border-accent/30 bg-accent/10 transition-colors"
          >
            {t.nav.getInTouch} <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile controls: language toggle + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Language switcher for mobile */}
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 font-mono text-xs">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-all ${
                lang === "en"
                  ? "bg-accent text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("de")}
              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-all ${
                lang === "de"
                  ? "bg-accent text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              DE
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#050102]/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-mono text-sm tracking-wider text-zinc-300 hover:text-accent py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>{t.nav.location}</span>
            <a
              href="mailto:hello@shorado.com.ua"
              className="text-accent flex items-center gap-1 font-semibold"
            >
              hello@shorado.com.ua <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
