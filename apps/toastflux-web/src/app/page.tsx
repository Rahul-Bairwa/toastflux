import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { TerminalTabs } from "@/components/TerminalTabs";
import { InteractivePlayground } from "@/components/InteractivePlayground";
import { ToastTypesDemo } from "@/components/ToastTypesDemo";
import { PositioningDemo } from "@/components/PositioningDemo";
import { CodeBlock } from "@/components/CodeBlock";
import { FrameworkUsage } from "@/components/FrameworkUsage";
import { CopyInstallButton } from "@/components/CopyInstallButton";
import { Check } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black selection:bg-purple-500/30 selection:text-purple-200">
      <Header />
      <div className="flex-1">
        <div className="mx-auto max-w-8xl px-4 md:px-8">
          <div className="flex gap-6 md:gap-10">
            <Sidebar />
            <main className="flex-1 py-6 sm:py-12 min-w-0">
              {/* HERO SECTION */}
              <section id="introduction" className="mb-12 sm:mb-24">
                <div className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-20">
                   <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                         React • Next.js • TypeScript
                      </span>
                   </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6">
                    ToastFlux – The Modern React Toast Library
                  </h1>
                  <p className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-zinc-400">
                    A lightweight, beautiful, and fully customizable{" "}
                    <strong className="text-zinc-300">toast notification library</strong>{" "}
                    for <strong className="text-zinc-300">React</strong> &{" "}
                    <strong className="text-zinc-300">Next.js</strong>. Under 3kb gzipped. Zero
                    configuration required. The modern alternative to Sonner
                    and React-Toastify.
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <a href="#installation" className="rounded-full bg-purple-600 px-6 sm:px-8 py-3 sm:py-3.5 text-white font-semibold transition-all hover:bg-purple-700 hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)] cursor-pointer text-sm sm:text-base">
                      Get Started
                    </a>
                    <CopyInstallButton />
                  </div>
                </div>

                <div className="mt-8 sm:mt-12">
                   <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <div className="flex items-center justify-center p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-300">Try It Live – Interactive Playground</h3>
                   </div>
                   <InteractivePlayground />
                </div>
              </section>

              {/* WHY TOASTFLUX */}
              <section id="usage" className="mb-12 sm:mb-24">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start">
                    <div className="space-y-8">
                       <div className="space-y-4">
                          <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Why Choose ToastFlux for React Notifications?
                          </h2>
                          <p className="text-zinc-500 leading-relaxed max-w-md">
                             Get up and running in seconds. ToastFlux handles the queueing, animations, and accessibility out of the box — no extra configuration needed.
                          </p>
                       </div>
                       <ul className="space-y-4">
                          {[
                             "Zero configuration required",
                             "Optimized for Next.js App Router & Server Components",
                             "Under 2kb Gzipped — smaller than Sonner",
                             "Built-in dark & light themes",
                             "TypeScript-first with full type safety",
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
                      code={`import { Toaster, toast } from "toastflux";\nimport "toastflux/styles/toast.css";\n\nfunction App() {\n  return (\n    <>\n      <Toaster theme="dark" />\n      <button onClick={() => toast.success("Done! 🚀")}>\n        Show Toast\n      </button>\n    </>\n  );\n}`}
                      language="jsx"
                    />
                 </div>
              </section>

              {/* INSTALLATION */}
              <section id="installation" className="mb-12 sm:mb-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Install ToastFlux</h2>
                <p className="text-sm sm:text-base text-zinc-500 mb-6 sm:mb-8 max-w-xl">
                  Install <code className="text-purple-400 bg-[#111] px-1.5 py-0.5 rounded text-sm">toastflux</code> using your preferred package manager. Works with npm, yarn, pnpm, and bun.
                </p>
                <TerminalTabs />
              </section>

              {/* FRAMEWORK USAGE */}
              <section id="framework-usage" className="mb-12 sm:mb-24">
                 <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
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
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Framework Integration Guide</h2>
                 <p className="text-sm sm:text-base text-zinc-500 mb-6 sm:mb-10 max-w-xl">
                   Learn how to use ToastFlux in your React or Next.js project. See configuration and usage examples for each framework.
                 </p>
                 <FrameworkUsage />
              </section>

              {/* TOAST TYPES */}
              <section id="theming" className="mb-12 sm:mb-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Toast Notification Types</h2>
                <p className="text-sm sm:text-base text-zinc-500 mb-6 sm:mb-8 max-w-xl">
                  ToastFlux supports <strong className="text-zinc-300">success</strong>, <strong className="text-zinc-300">error</strong>, <strong className="text-zinc-300">warning</strong>, <strong className="text-zinc-300">info</strong>, and <strong className="text-zinc-300">default</strong> toast types out of the box.
                </p>
                <ToastTypesDemo />
              </section>

              {/* POSITIONING */}
              <section id="positioning" className="mb-12 sm:mb-24">
                 <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Toast Positioning</h2>
                 <p className="text-sm sm:text-base text-zinc-500 mb-6 sm:mb-8 max-w-xl">
                   Display toast notifications in 6 different positions: top-left, top-center, top-right, bottom-left, bottom-center, and bottom-right.
                 </p>
                 <PositioningDemo />
              </section>

              {/* API REFERENCE */}
              <section id="api-reference" className="mb-12 sm:mb-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">API Reference</h2>
                <p className="text-sm sm:text-base text-zinc-500 mb-6 sm:mb-8 max-w-xl">
                  Complete API documentation for the <code className="text-purple-400 bg-[#111] px-1.5 py-0.5 rounded text-sm">toast()</code> function and <code className="text-purple-400 bg-[#111] px-1.5 py-0.5 rounded text-sm">&lt;Toaster /&gt;</code> component.
                </p>
                <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full text-left border-collapse border-separate border-spacing-0 min-w-[600px]">
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
                         { prop: "position", type: "string", default: "'top-right'", desc: "The anchor point for all toast notifications." },
                         { prop: "duration", type: "number", default: "4000", desc: "Time in milliseconds before auto-dismissal." },
                         { prop: "theme", type: "'dark' | 'light'", default: "'dark'", desc: "Visual theme of the toast container." },
                         { prop: "expand", type: "boolean", default: "false", desc: "Whether to stack or expand toasts." },
                         { prop: "description", type: "ReactNode", default: "undefined", desc: "Subtitle text below the main message." },
                         { prop: "dismissible", type: "boolean", default: "false", desc: "Show a close button on the toast." },
                         { prop: "action", type: "{ label, onClick }", default: "undefined", desc: "Add an action button (e.g. Undo)." },
                         { prop: "progress", type: "number", default: "undefined", desc: "Progress bar value from 0 to 100." },
                         { prop: "style", type: "CSSProperties", default: "undefined", desc: "Inline style overrides for the toast." },
                         { prop: "icon", type: "ReactNode", default: "undefined", desc: "Custom icon element for the toast." },
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
                </div>
              </section>

              {/* FOOTER - MINI */}
              <footer className="mt-16 sm:mt-32 pt-6 sm:pt-8 border-t border-[#222] flex flex-col items-center gap-4 sm:gap-6 pb-8 sm:pb-12">
                 <div className="flex gap-6 sm:gap-8">
                    <a href="https://github.com/Rahul-Bairwa/toastflux" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-zinc-600 hover:text-white transition-colors cursor-pointer">GitHub</a>
                    <a href="https://www.npmjs.com/package/toastflux" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-zinc-600 hover:text-white transition-colors cursor-pointer">NPM</a>
                 </div>
                 <p className="text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.15em] sm:tracking-[0.2em] text-zinc-800 text-center px-4">
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
