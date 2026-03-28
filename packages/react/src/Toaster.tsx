"use client";

import React, { useState, useEffect } from "react";
import { useToastStore } from "./useToast";
import { ToastItem } from "./ToastItem";
import { PEEK_OFFSET, MAX_STACK_VISIBLE, toastStore, ToastOptions } from "@toastflux/core";

export interface ToasterProps extends ToastOptions {
  theme?: "light" | "dark";
  toastOptions?: ToastOptions;
}

export function Toaster({ theme = "dark", toastOptions, position, ...restOptions }: ToasterProps = {}) {
  const toasts = useToastStore();
  const [hoveredPos, setHoveredPos] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    toastStore.updateConfig({ position, ...restOptions, ...toastOptions });
  }, [position, JSON.stringify(restOptions), JSON.stringify(toastOptions)]);

  const globalPos = position || toastOptions?.position || "top-right";

  // Reset hoveredPos if the current hovered position no longer has any toasts
  // This prevents the "stuck expanded" state after dismissing the last toast
  useEffect(() => {
    if (hoveredPos && toasts.filter((t: any) => (t.position || globalPos) === hoveredPos).length === 0) {
      setHoveredPos(null);
    }
  }, [toasts.length, hoveredPos, globalPos]);

  if (!isMounted) return null;

  const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];
  const groupedToasts = positions.reduce((acc: any, pos) => {
    acc[pos] = toasts.filter((t: any) => (t.position || globalPos) === pos);
    return acc;
  }, {} as Record<string, typeof toasts>);

  return (
    <>
      {positions.map((pos) => {
        if (!groupedToasts[pos].length) return null;

        const isBottom = pos.startsWith("bottom");
        const posToasts = groupedToasts[pos];
        const isExpanded = hoveredPos === pos;
        const count = posToasts.length;

        const visibleStack = Math.min(count - 1, MAX_STACK_VISIBLE - 1);

        const collapsedExtraHeight = isExpanded ? 0 : visibleStack * PEEK_OFFSET;

        return (
          <div
            key={pos}
            className={`tf-toast-container tf-${pos} tf-theme-${theme}`}
            style={{ pointerEvents: "auto" }}
            onMouseEnter={() => setHoveredPos(pos)}
            onMouseLeave={() => setHoveredPos(null)}
          >
            <div
              className={`tf-stack-wrapper ${isExpanded ? "tf-stack-expanded" : "tf-stack-collapsed"}`}
              style={
                !isExpanded
                  ? {
                      position: "relative",
                      paddingBottom: !isBottom ? collapsedExtraHeight : 0,
                      paddingTop: isBottom ? collapsedExtraHeight : 0,
                    }
                  : { display: "flex", flexDirection: "column", gap: "10px" }
              }
            >
              {posToasts.map((t: any, i: number) => (
                <ToastItem
                  key={t.id}
                  toast={t}
                  index={i}
                  total={count}
                  isExpanded={isExpanded}
                  isBottom={isBottom}
                />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
