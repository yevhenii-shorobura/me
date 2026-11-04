"use client";

import { Pause, Play } from "lucide-react";

export function PauseBlackHoleButton({ onClick, state = false }) {
  return (
    <button
      onClick={onClick}
      aria-label={state ? "Resume black hole animation" : "Pause black hole animation"}
      title={state ? "Resume cosmic animation" : "Pause cosmic animation"}
      className="fixed right-5 bottom-5 z-50 p-3 text-xs font-mono font-semibold text-orange-200/90 bg-[#050102]/80 backdrop-blur-md border border-white/10 hover:border-accent/60 hover:text-white rounded-full transition-all duration-300 shadow-2xl flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
    >
      {state ? <Play size={16} /> : <Pause size={16} />}
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-28 transition-all duration-300 text-[11px] font-mono tracking-wider text-zinc-300">
        {state ? "RESUME" : "PAUSE"}
      </span>
    </button>
  );
}
