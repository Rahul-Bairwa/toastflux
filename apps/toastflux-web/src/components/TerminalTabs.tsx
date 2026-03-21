"use client";

import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

const managers = [
  { name: "npm", command: "npm install toastflux" },
  { name: "yarn", command: "yarn add toastflux" },
  { name: "pnpm", command: "pnpm add toastflux" },
  { name: "bun", command: "bun add toastflux" },
];

export function TerminalTabs() {
  const [activeTab, setActiveTab] = useState("npm");

  return (
    <div className="w-full">
      <div className="flex border-b border-[#222] mb-4 overflow-x-auto no-scrollbar">
        {managers.map((m) => (
          <button
            key={m.name}
            onClick={() => setActiveTab(m.name)}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap border-b-2 cursor-pointer ${
              activeTab === m.name
                ? "border-purple-500 text-white"
                : "border-transparent text-zinc-500 hover:text-white"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>
      <CodeBlock 
        code={managers.find((m) => m.name === activeTab)?.command || ""} 
      />
    </div>
  );
}
