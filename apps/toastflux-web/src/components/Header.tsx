"use client";

import { Search, Star, Loader2 } from "lucide-react";
import Image from "next/image";
import { usePackageStats } from "@/hooks/usePackageStats";
import LogoImg from "@/assests/dark-logo.png";

export function Header() {
  const { stars, loading } = usePackageStats();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222] bg-black/80 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 md:px-8 max-w-8xl mx-auto">
        {/* LOGO */}
        <div className="flex items-center gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2 cursor-pointer">
            <Image src={LogoImg} alt="ToastFlux Logo" width={32} height={32} className="rounded-md" />
            <span className="font-bold text-xl tracking-tight text-white">ToastFlux</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium text-white transition-colors hover:text-white/80 cursor-pointer">Documentation</a>
            <a href="https://github.com/Rahul-Bairwa/toastflux" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white cursor-pointer" target="_blank">GitHub</a>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden sm:flex items-center w-full max-w-sm rounded-md border border-[#222] bg-[#111] px-3 py-1.5 focus-within:border-zinc-500 transition-all">
            <Search className="h-4 w-4 text-zinc-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="bg-transparent text-sm w-full outline-none text-zinc-300 placeholder:text-zinc-600 focus:placeholder:text-zinc-500"
            />
          </div>
          <div className="flex items-center gap-2">
            {!loading && stars >= 10 && (
              <a href="https://github.com/Rahul-Bairwa/toastflux" target="_blank" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-all border border-[#222] bg-[#111] px-3.5 py-1.5 rounded-md hover:bg-zinc-900 group">
                <Star className="h-3.5 w-3.5 transition-transform group-hover:scale-110" fill="currentColor" />
                <span className="font-semibold">{stars.toLocaleString()}</span>
              </a>
            )}
            <span className="flex items-center rounded-md bg-purple-500/10 px-2.5 py-1.5 text-xs font-semibold text-purple-400 border border-purple-500/20">
              New
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
