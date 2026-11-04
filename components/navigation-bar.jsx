"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#shorado", label: "Shorado" },
  { href: "#build", label: "What I Build" },
  { href: "#stack", label: "Stack" },
  { href: "#lab", label: "Lab" },
  { href: "#path", label: "Path" },
  { href: "#contact", label: "Contact" },
];

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

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
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Location & Status Pill */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="font-mono text-[11px] text-zinc-400 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="text-accent font-semibold">MUNICH, DE</span>
          </div>
          <a
            href="mailto:hello@shorado.com.ua"
            className="flex items-center gap-1 font-mono text-[11px] text-zinc-300 hover:text-accent px-3 py-1 rounded-full border border-accent/30 bg-accent/10 transition-colors"
          >
            Get in touch <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#050102]/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
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
            <span>MUNICH, DE</span>
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
