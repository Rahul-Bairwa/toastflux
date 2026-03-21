"use client";

import { useEffect, useState } from "react";
import { Settings, Download, MonitorPlay, Palette, Terminal, BoxSelect, Menu, CircleUser } from "lucide-react";
import { usePackageStats } from "@/hooks/usePackageStats";

const links = [
  { id: "introduction", name: "Introduction", icon: <Settings size={16} /> },
  { id: "installation", name: "Installation", icon: <Download size={16} /> },
  { id: "usage", name: "Usage", icon: <MonitorPlay size={16} /> },
  { id: "framework-usage", name: "Framework Usage", icon: <Terminal size={16} /> },
  { id: "theming", name: "Toast Types", icon: <Palette size={16} /> },
  { id: "positioning", name: "Positioning", icon: <BoxSelect size={16} /> },
  { id: "api-reference", name: "API Reference", icon: <Terminal size={16} /> },
];

export function Sidebar() {
  const { version, loading } = usePackageStats();
  const [activeId, setActiveId] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" } // Observe when section is in top area of screen
    );

    links.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed top-16 z-30 hidden w-full shrink-0 md:sticky md:block md:w-64 border-r border-[#222] pr-6 pb-20 pt-8" style={{ height: "calc(100vh - 4rem)" }}>
      <div className="w-full">
        <div className="mb-4 px-2">
          <h4 className="font-semibold text-white">Documentation</h4>
          <p className="text-xs text-zinc-500 mt-1">
            {loading ? "loading..." : `v${version}`}
          </p>
        </div>
        <nav className="flex flex-col space-y-1 mt-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all cursor-pointer ${
                activeId === link.id
                  ? "bg-purple-500/10 text-purple-400 border-l-2 border-purple-500"
                  : "text-zinc-400 hover:bg-[#111] hover:text-white border-l-2 border-transparent"
              }`}
            >
              <div className={activeId === link.id ? "text-purple-400" : "text-zinc-500"}>
                {link.icon}
              </div>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
