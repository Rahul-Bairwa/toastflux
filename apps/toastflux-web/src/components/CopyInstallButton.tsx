"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyInstallButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install toastflux");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={handleCopy}
      className="flex h-[42px] sm:h-12 items-center justify-between gap-3 rounded-full border border-zinc-800 bg-[#0a0a0a] px-5 sm:px-6 cursor-pointer hover:border-zinc-700 transition-all active:scale-[0.98] w-full sm:w-auto min-w-[220px]"
    >
      <div className="flex items-center gap-2 overflow-hidden">
        <span className="text-zinc-600 text-[10px] sm:text-xs font-mono select-none">$</span>
        <span className="text-zinc-300 text-xs sm:text-sm font-mono truncate">npm install toastflux</span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {copied && (
          <span className="text-[10px] font-bold text-emerald-500 animate-in slide-in-from-right-1 fade-in">
            Copied!
          </span>
        )}
        <div 
          className="p-1.5 rounded-lg bg-zinc-900/50 text-zinc-500 group-hover:text-white transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check size={14} className="text-emerald-500" />
          ) : (
            <Copy size={14} />
          )}
        </div>
      </div>
    </div>
  );
}