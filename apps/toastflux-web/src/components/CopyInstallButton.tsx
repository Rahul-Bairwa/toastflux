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
    <div className="flex h-10 sm:h-12 items-center gap-3 rounded-full border border-zinc-800 bg-[#0a0a0a] px-4 sm:px-5 text-xs sm:text-sm font-mono text-zinc-300">
      <span className="text-zinc-500">npm install toastflux</span>
      <button
        onClick={handleCopy}
        className="ml-1 text-zinc-600 hover:text-white transition-colors cursor-pointer"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check size={14} className="text-emerald-500" />
        ) : (
          <Copy size={14} />
        )}
      </button>
      {copied && (
        <span className="text-[10px] font-semibold text-emerald-500 animate-in fade-in">
          Copied!
        </span>
      )}
    </div>
  );
}