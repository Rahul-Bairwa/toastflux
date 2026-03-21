"use client";

import React, { useState } from "react";
import { useToastStore } from "./useToast";
import { ToastItem } from "./ToastItem";

export function Toaster({ theme = "dark" }: { theme?: "light" | "dark" } = {}) {
  const toasts = useToastStore();
  const [hoveredPos, setHoveredPos] = useState<string | null>(null);

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

        const isBottom = pos.startsWith("bottom");
        const posToasts = groupedToasts[pos];
        const isExpanded = hoveredPos === pos;
        const count = posToasts.length;

        // How much extra space to show "peeking" toasts behind
        // Each subsequent toast peeks 10px further away
        const PEEK_OFFSET = 10;
        const MAX_VISIBLE_STACK = 3;
        const visibleStack = Math.min(count - 1, MAX_VISIBLE_STACK - 1);

        // collapsed container height accounts for peeking
        const collapsedExtraHeight = isExpanded ? 0 : visibleStack * PEEK_OFFSET;

        return (
          <div
            key={pos}
            className={`tf-toast-container tf-${pos} tf-theme-${theme}`}
            style={{ pointerEvents: "auto" }}
            onMouseEnter={() => setHoveredPos(pos)}
            onMouseLeave={() => setHoveredPos(null)}
          >
            {/* Stack wrapper: relative container so absolute toasts position correctly */}
            <div
              className={`tf-stack-wrapper ${isExpanded ? "tf-stack-expanded" : "tf-stack-collapsed"}`}
              style={
                !isExpanded
                  ? {
                      position: "relative",
                      // Extra padding at bottom (top positions) or top (bottom positions) for peeking
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
