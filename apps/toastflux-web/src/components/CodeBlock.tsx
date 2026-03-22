"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg border border-[#222] bg-[#050505] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#222] bg-[#0a0a0a]">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
        </div>
        <div className="flex items-center gap-2">
          {copied && (
            <span className="text-[10px] font-semibold text-emerald-500">
              Copied!
            </span>
          )}
          <button
            onClick={copyToClipboard}
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            title="Copy to clipboard"
          >
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
          </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-zinc-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
