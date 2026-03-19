"use client";

import React from "react";
import { useToastStore } from "./useToast";
import { ToastItem } from "./ToastItem";

export function Toaster({ theme = "dark" }: { theme?: "light" | "dark" } = {}) {
  const toasts = useToastStore();

  if (typeof window === "undefined") return null;

  const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  const groupedToasts = positions.reduce((acc, pos) => {
    acc[pos] = toasts.filter((t: any) => (t.position || "top-right") === pos);
    return acc;
  }, {} as Record<string, typeof toasts>);

  return (
    <>
      {positions.map((pos) => {
        if (!groupedToasts[pos].length) return null;

        return (
          <div key={pos} className={`tf-toast-container tf-${pos} tf-theme-${theme}`}>
            {groupedToasts[pos].map((t: any) => (
              <ToastItem key={t.id} toast={t} />
            ))}
          </div>
        );
      })}
    </>
  );
}
