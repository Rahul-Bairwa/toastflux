import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { TerminalTabs } from "@/components/TerminalTabs";
import { InteractivePlayground } from "@/components/InteractivePlayground";
import { ToastTypesDemo } from "@/components/ToastTypesDemo";
import { PositioningDemo } from "@/components/PositioningDemo";
import { CodeBlock } from "@/components/CodeBlock";
import { FrameworkUsage } from "@/components/FrameworkUsage";
import { Check } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black selection:bg-purple-500/30 selection:text-purple-200">
      <Header />
      <div className="flex-1">
        <div className="mx-auto max-w-8xl px-4 md:px-8">
          <div className="flex gap-10">
            <Sidebar />
            <main className="flex-1 py-12">
              {/* HERO SECTION */}
              <section id="introduction" className="mb-24">
                <div className="flex flex-col gap-4 mb-20">
                   <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                         React • Next.js • TypeScript
                      </span>
                   </div>
                  <h1 className="text-7xl font-bold tracking-tight text-white mb-6">
                    ToastFlux
                  </h1>
                  <p className="max-w-2xl text-xl leading-relaxed text-zinc-400">
                    A lightweight, customizable toast notification library for React & Next.js. Engineered for high-fidelity developer experiences.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-8">
                    <button className="rounded-full bg-purple-600 px-8 py-3.5 text-white font-semibold transition-all hover:bg-purple-700 hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)] cursor-pointer">
                      Get Started
                    </button>
                    <div className="flex h-12 items-center gap-3 rounded-full border border-zinc-800 bg-[#0a0a0a] px-5 text-sm font-mono text-zinc-300">
                       <span className="text-zinc-500">npm install toastflux</span>
                       <button className="ml-2 text-zinc-600 hover:text-white transition-colors cursor-pointer">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                       </button>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                   <div className="flex items-center gap-2 mb-6">
                      <div className="flex items-center justify-center p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Interactive Playground</h3>
                   </div>
                   <InteractivePlayground />
                </div>
              </section>

              {/* FEATURES / SIMPLE IMPLEMENTATION */}
              <section id="usage" className="mb-24">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                       <div className="space-y-4">
                          <h2 className="text-3xl font-bold text-white">Simple Implementation</h2>
                          <p className="text-zinc-500 leading-relaxed max-w-md">
                             Get up and running in seconds. ToastFlux handles the queueing, animations, and accessibility out of the box.
                          </p>
                       </div>
                       <ul className="space-y-4">
                          {[
                             "Zero configuration required",
                             "Optimized for Next.js Server Components",
                             "Under 2kb Gzipped"
                          ].map((feature, i) => (
                             <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                                <div className="flex items-center justify-center w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                   <Check size={12} strokeWidth={3} />
                                </div>
                                {feature}
                             </li>
                          ))}
                       </ul>
                    </div>
                    <CodeBlock 
                      code={`import { toast } from "toastflux";\n\ntoast("Event created successfully");`}
                      language="jsx"
                    />
                 </div>
              </section>

              {/* INSTALLATION */}
              <section id="installation" className="mb-24">
                <h2 className="text-3xl font-bold text-white mb-8">Installation</h2>
                <TerminalTabs />
              </section>

              {/* FRAMEWORK USAGE */}
              <section id="framework-usage" className="mb-24">
                 <div className="flex items-center gap-2 mb-8">
                    <span className="inline-flex items-center rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-zinc-800 text-zinc-400 border border-zinc-700">
                       React
                    </span>
                    <span className="inline-flex items-center rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-zinc-800 text-zinc-400 border border-zinc-700">
                       Next.js
                    </span>
                    <span className="inline-flex items-center rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-zinc-800 text-zinc-400 border border-zinc-700">
                       TypeScript
                    </span>
                 </div>
                 <h2 className="text-4xl font-bold text-white mb-10">Framework Usage</h2>
                 <FrameworkUsage />
              </section>

              {/* TOAST TYPES */}
              <section id="theming" className="mb-24">
                <h2 className="text-3xl font-bold text-white mb-8">Toast Types</h2>
                <ToastTypesDemo />
              </section>

              {/* POSITIONING */}
              <section id="positioning" className="mb-24">
                 <h2 className="text-3xl font-bold text-white mb-8">Positioning</h2>
                 <PositioningDemo />
              </section>

              {/* API REFERENCE */}
              <section id="api-reference" className="mb-24 overflow-x-auto no-scrollbar">
                <h2 className="text-3xl font-bold text-white mb-8">API Reference</h2>
                <table className="w-full text-left border-collapse border-separate border-spacing-0">
                   <thead>
                      <tr className="border-b border-zinc-800">
                         <th className="py-4 text-xs font-bold uppercase tracking-widest text-zinc-600 border-b border-zinc-900 pr-8">Prop</th>
                         <th className="py-4 text-xs font-bold uppercase tracking-widest text-zinc-600 border-b border-zinc-900 pr-8">Type</th>
                         <th className="py-4 text-xs font-bold uppercase tracking-widest text-zinc-600 border-b border-zinc-900 pr-8">Default</th>
                         <th className="py-4 text-xs font-bold uppercase tracking-widest text-zinc-600 border-b border-zinc-900">Description</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-white/[0.05]">
                      {[
                         { prop: "position", type: "string", default: "'top-right'", desc: "The anchor point for all toasts." },
                         { prop: "duration", type: "number", default: "4000", desc: "Time in ms before auto-dismissal." },
                         { prop: "theme", type: "'dark' | 'light'", default: "'dark'", desc: "Visual theme of the container." },
                         { prop: "expand", type: "boolean", default: "false", desc: "Whether to stack or expand toasts." },
                      ].map((row, i) => (
                         <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                            <td className="py-5 font-mono text-sm text-purple-400 border-b border-zinc-900">{row.prop}</td>
                            <td className="py-5 font-mono text-sm text-zinc-500 border-b border-zinc-900">{row.type}</td>
                            <td className="py-5 font-mono text-sm text-zinc-600 border-b border-zinc-900">{row.default}</td>
                            <td className="py-5 text-sm text-zinc-400 border-b border-zinc-900">{row.desc}</td>
                         </tr>
                      ))}
                   </tbody>
                </table>
              </section>

              {/* FOOTER - MINI */}
              <footer className="mt-32 pt-8 border-t border-[#222] flex flex-col items-center gap-6">
                 <div className="flex gap-8">
                    <a href="https://github.com/Rahul-Bairwa/toastflux" target="_blank" className="text-sm text-zinc-600 hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.npmjs.com/package/toastflux" target="_blank" className="text-sm text-zinc-600 hover:text-white transition-colors">NPM</a>
                 </div>
                 <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-zinc-800 text-center">
                    © 2026 ToastFlux. Built by Rahul. All rights reserved.
                 </p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
