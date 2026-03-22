"use client";

import { useState, useRef, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";

const searchItems = [
  { id: "introduction", title: "Introduction", keywords: "toastflux toast library react nextjs getting started home" },
  { id: "usage", title: "Why Choose ToastFlux", keywords: "why features zero config lightweight server components nextjs" },
  { id: "installation", title: "Installation", keywords: "install npm yarn pnpm bun setup" },
  { id: "framework-usage", title: "Framework Usage", keywords: "react nextjs app router layout framework integration setup configuration" },
  { id: "theming", title: "Toast Types", keywords: "success error warning info default promise toast types" },
  { id: "positioning", title: "Positioning", keywords: "position top left right bottom center placement" },
  { id: "api-reference", title: "API Reference", keywords: "api props options duration theme expand dismissible action progress style icon description" },
];

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.trim()
    ? searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
    }
    setQuery("");
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results.length > 0) {
      e.preventDefault();
      handleSelect(results[selectedIndex].id);
    } else if (e.key === "Escape") {
      setQuery("");
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Keyboard shortcut: Ctrl+K or Cmd+K to focus search
  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };
    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, []);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <div ref={containerRef} className="relative hidden lg:block w-full max-w-sm">
      <div className="flex items-center w-full rounded-md border border-[#222] bg-[#111] px-3 py-1.5 focus-within:border-zinc-500 transition-all">
        <Search className="h-4 w-4 text-zinc-500 mr-2 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="bg-transparent text-sm w-full outline-none text-zinc-300 placeholder:text-zinc-600 focus:placeholder:text-zinc-500"
        />
        <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-zinc-700 bg-zinc-800/50 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 ml-2 shrink-0">
          ⌘K
        </kbd>
      </div>

      {/* Dropdown Results */}
      {isOpen && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-lg border border-[#222] bg-[#0a0a0a] shadow-2xl shadow-black/50 overflow-hidden z-50">
          {results.length > 0 ? (
            <div className="py-1">
              {results.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 text-sm transition-colors cursor-pointer ${
                    selectedIndex === i
                      ? "bg-purple-500/10 text-white"
                      : "text-zinc-400 hover:bg-[#111] hover:text-white"
                  }`}
                >
                  <span className="font-medium">{item.title}</span>
                  <ArrowRight size={14} className="text-zinc-600" />
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-zinc-500">No results found for &quot;{query}&quot;</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
