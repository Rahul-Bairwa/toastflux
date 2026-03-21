"use client";

import { toast } from "toastflux";
import { ArrowUpLeft, ArrowUp, ArrowUpRight, ArrowDownLeft, ArrowDown, ArrowDownRight } from "lucide-react";

type Position = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

const positions = [
  { id: "top-left", icon: <ArrowUpLeft size={20} /> },
  { id: "top-center", icon: <ArrowUp size={20} /> },
  { id: "top-right", icon: <ArrowUpRight size={20} /> },
  { id: "bottom-left", icon: <ArrowDownLeft size={20} /> },
  { id: "bottom-center", icon: <ArrowDown size={20} /> },
  { id: "bottom-right", icon: <ArrowDownRight size={20} /> },
];

export function PositioningDemo() {
  const showToastAtPosition = (pos: Position) => {
    toast.success(`Positioned at ${pos}`, {
      position: pos,
    });
  };

  return (
    <div className="relative group rounded-xl border border-[#222] bg-[#0a0a0a] overflow-hidden p-12 flex items-center justify-center transition-all hover:border-zinc-700/50">
      <div className="grid grid-cols-3 gap-4">
        {positions.map((p, idx) => (
          <div key={p.id} className="relative">
            {idx === 3 && (
              <div className="absolute inset-x-0 -top-full h-full flex items-center justify-center pointer-events-none select-none opacity-20">
                <div className="flex flex-col items-center gap-1 group">
                   <div className="rounded-full border border-zinc-800 p-8 flex items-center justify-center">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">Viewport</div>
                   </div>
                </div>
              </div>
            )}
            <button
              onClick={() => showToastAtPosition(p.id as Position)}
              className="flex items-center justify-center w-24 h-24 rounded-xl border border-zinc-800 bg-[#111] transition-all hover:scale-105 active:scale-95 hover:border-zinc-600 hover:text-white text-zinc-500 shadow-lg group"
              title={p.id}
            >
              <div className="transition-transform group-hover:scale-110">
                {p.icon}
              </div>
            </button>
          </div>
        ))}
      </div>
      
      {/* Decorative labels for Canvas / Viewport / Layout like in design */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-full text-[10px] font-bold uppercase tracking-widest text-zinc-700 select-none mr-8 hidden lg:block">Canvas</div>
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-full text-[10px] font-bold uppercase tracking-widest text-zinc-700 select-none ml-8 hidden lg:block">Layout</div>
    </div>
  );
}
