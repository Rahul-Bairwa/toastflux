"use client";

import { useState } from "react";
import { Star, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePackageStats } from "@/hooks/usePackageStats";
import { SearchBar } from "@/components/SearchBar";
import LogoImg from "@/assests/dark-logo.png";

const navLinks = [
  { id: "introduction", name: "Introduction" },
  { id: "installation", name: "Installation" },
  { id: "usage", name: "Usage" },
  { id: "framework-usage", name: "Framework" },
  { id: "theming", name: "Toast Types" },
  { id: "positioning", name: "Positioning" },
  { id: "api-reference", name: "API" },
];

export function Header() {
  const { stars, loading } = usePackageStats();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222] bg-black/80 backdrop-blur-md">
      <div className="flex h-14 sm:h-16 items-center px-4 md:px-8 max-w-8xl mx-auto">
        {/* LOGO */}
        <div className="flex items-center gap-4 md:gap-10">
          <a href="/" className="flex items-center space-x-2 cursor-pointer">
            <Image src={LogoImg} alt="ToastFlux Logo" width={28} height={28} className="rounded-md sm:w-8 sm:h-8" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-white">ToastFlux</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium text-white transition-colors hover:text-white/80 cursor-pointer">Documentation</a>
            <a href="https://github.com/Rahul-Bairwa/toastflux" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white cursor-pointer" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <SearchBar />
          <div className="flex items-center gap-2">
            {!loading && stars >= 10 && (
              <a href="https://github.com/Rahul-Bairwa/toastflux" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-all border border-[#222] bg-[#111] px-3.5 py-1.5 rounded-md hover:bg-zinc-900 group cursor-pointer">
                <Star className="h-3.5 w-3.5 transition-transform group-hover:scale-110" fill="currentColor" />
                <span className="font-semibold">{stars.toLocaleString()}</span>
              </a>
            )}
            <span className="hidden sm:flex items-center rounded-md bg-purple-500/10 px-2.5 py-1.5 text-xs font-semibold text-purple-400 border border-purple-500/20">
              New
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-[#111] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#222] bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#111] rounded-md transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://github.com/Rahul-Bairwa/toastflux"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#111] rounded-md transition-colors cursor-pointer"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
