"use client";

import { toast } from "toastflux";
import { CheckCircle2, Info, AlertTriangle, XCircle, MessageSquare, Loader2 } from "lucide-react";

const toastTypes = [
  { 
    name: "Default", 
    action: () => toast.default("Just a message."),
    icon: <MessageSquare className="w-5 h-5" />,
    color: "zinc"
  },
  { 
    name: "Success", 
    action: () => toast.success("Saved successfully!"),
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "emerald"
  },
  { 
    name: "Error", 
    action: () => toast.error("Upload failed."),
    icon: <XCircle className="w-5 h-5" />,
    color: "red"
  },
  { 
    name: "Warning", 
    action: () => toast.warning("Storage almost full."),
    icon: <AlertTriangle className="w-5 h-5" />,
    color: "amber"
  },
  { 
    name: "Info", 
    action: () => toast.info("Meeting starts soon.", {
      description: "Monday, January 3rd at 6:00pm",
    }),
    icon: <Info className="w-5 h-5" />,
    color: "blue"
  },
  { 
    name: "Promise", 
    action: () => {
      const promise = new Promise((resolve) => setTimeout(() => resolve({ name: "Profile" }), 1500));
      toast.promise(promise, {
        loading: 'Syncing...',
        success: (data: any) => `${data.name} synced!`,
        error: 'Sync failed!',
      });
    },
    icon: <Loader2 className="w-5 h-5 animate-spin" />,
    color: "purple"
  },
];

export function ToastTypesDemo() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {toastTypes.map((type) => (
        <button
          key={type.name}
          onClick={type.action}
          className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-[#222] bg-[#0a0a0a] transition-all hover:bg-[#111] hover:border-zinc-700/50 active:scale-95"
        >
          <div className={`p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors`}>
            {type.icon}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300">
            {type.name}
          </span>
        </button>
      ))}
    </div>
  );
}
