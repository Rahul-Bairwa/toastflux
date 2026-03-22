"use client";

import { toast } from "toastflux";
import { CheckCircle2, Info, AlertTriangle, XCircle, MessageSquare, Loader2 } from "lucide-react";

const toastTypes = [
  { 
    name: "Default", 
    action: () => toast.default("Event created successfully", {
      description: "Manage your project from the dashboard.",
      dismissible: true,
    }),
    icon: <MessageSquare size={18} />,
  },
  { 
    name: "Success", 
    action: () => toast.success("Event created successfully", {
      description: "Your new workspace is ready to use.",
      dismissible: true,
    }),
    icon: <CheckCircle2 size={18} />,
  },
  { 
    name: "Error", 
    action: () => toast.error("Failed to create workspace", {
      description: "Please check your network and try again.",
      dismissible: true,
    }),
    icon: <XCircle size={18} />,
  },
  { 
    name: "Warning", 
    action: () => toast.warning("Workspace almost full", {
      description: "Upgrade your plan to add more projects.",
      dismissible: true,
    }),
    icon: <AlertTriangle size={18} />,
  },
  { 
    name: "Info", 
    action: () => toast.info("New workspace updates", {
      description: "New features have been added to your project.",
      dismissible: true,
    }),
    icon: <Info size={18} />,
  },
  { 
    name: "Promise", 
    action: () => {
      toast.info("Updating workspace...", { duration: 2000 });
      setTimeout(() => toast.success("Workspace updated!"), 2000);
    },
    icon: <Loader2 size={18} className="animate-spin" />,
  },
];

export function InteractivePlayground() {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-[#222] bg-[#050505] overflow-hidden p-5 sm:p-10 md:p-16 transition-all hover:border-zinc-700/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-white/5 opacity-40 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center gap-12">
        <div className="text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Interactive Playground</h3>
          <p className="text-zinc-500 text-sm max-w-sm">
            Click any button below to see the different toast types in action.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-2xl">
          {toastTypes.map((type) => (
            <button
              key={type.name}
              onClick={type.action}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-[#222] bg-[#0a0a0a] p-5 text-zinc-500 transition-all hover:bg-[#111] hover:border-zinc-700 active:scale-95 cursor-pointer"
            >
              <div className="text-zinc-400 group-hover:text-zinc-200 transition-colors shrink-0">
                {type.icon}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest transition-colors group-hover:text-zinc-300">
                {type.name}
              </span>
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-zinc-700 select-none">
          <div className="h-[1px] w-8 bg-[#222]" />
          Full API Control
          <div className="h-[1px] w-8 bg-[#222]" />
        </div>
      </div>
    </div>
  );
}
