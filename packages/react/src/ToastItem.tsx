"use client";

import React, { useRef, useState, useEffect } from "react";
import { Toast, toast as toastLib, MAX_STACK_VISIBLE, PEEK_OFFSET, SCALE_STEP, OPACITY_STEP } from "@toastflux/core";

const icons = {  success: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><rect width="48" height="48" fill="none"/><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"/><path strokeLinecap="round" d="m16 24l6 6l12-12"/></g></svg>,
  info: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M12.002 1.999c5.523 0 10.001 4.478 10.001 10.002c0 5.523-4.478 10.001-10.001 10.001C6.478 22.002 2 17.524 2 12.001C2 6.477 6.478 1.999 12.002 1.999m0 1.5a8.502 8.502 0 1 0 0 17.003a8.502 8.502 0 0 0 0-17.003M12 10.5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M12 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></svg>,
  warning: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>,
  error: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><rect width="16" height="16" fill="none"/><path fill="currentColor" d="M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7m0 13c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6m2.854-8.146L8.708 8l2.146 2.146a.5.5 0 0 1-.708.707L8 8.707l-2.146 2.146a.5.5 0 0 1-.708 0a.5.5 0 0 1 0-.707L7.292 8L5.146 5.854a.5.5 0 0 1 .707-.707l2.146 2.146l2.146-2.146a.5.5 0 0 1 .707.707z"/></svg>,
  loading: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c4.97 0 9 4.03 9 9"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>,
  default: null,
};

interface ToastItemProps {
  toast: Toast;
  index: number;
  total: number;
  isExpanded: boolean;
  isBottom: boolean;
}

export function ToastItem({ toast, index, total, isExpanded, isBottom }: ToastItemProps) {
  const duration = toast.duration ?? 3000;
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isItemHovered, setIsItemHovered] = useState(false);
  const dragStartX = useRef<number | null>(null);

  const remainingTime = useRef(duration);
  const startTime = useRef(Date.now());
  const prevType = useRef(toast.type);

  if (prevType.current !== toast.type) {
    prevType.current = toast.type;
    remainingTime.current = duration;
    startTime.current = Date.now();
  }

  const isPaused = isExpanded || isItemHovered || isDragging;

  const toastRef = useRef(toast);
  toastRef.current = toast;

  useEffect(() => {
    toastRef.current.onShow?.(toastRef.current);
    return () => {
      toastRef.current.onClose?.(toastRef.current);
    };
  }, []);

  useEffect(() => {
    if (duration === Infinity || duration <= 0) return;
    if (isPaused) return;

    startTime.current = Date.now();
    const timer = setTimeout(() => {
      toastLib.dismiss(toast.id);
    }, remainingTime.current);

    return () => {
      clearTimeout(timer);
      remainingTime.current -= Date.now() - startTime.current;
    };
  }, [isPaused, duration, toast.id]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isExpanded && index !== 0) return;
    if ((e.target as HTMLElement).closest('button')) return;
    dragStartX.current = e.clientX;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartX.current === null) return;
    const deltaX = e.clientX - dragStartX.current;

    const pos = toast.position || "top-right";
    if (pos.includes("right") && deltaX < 0) return;
    if (pos.includes("left") && deltaX > 0) return;

    setOffset(deltaX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    dragStartX.current = null;

    if (Math.abs(offset) > 50) {
      toastLib.dismiss(toast.id);
    } else {
      setOffset(0);
    }
  };

  const stackDepth = index;
  const isHidden = stackDepth >= MAX_STACK_VISIBLE;
  const scale = 1 - stackDepth * SCALE_STEP;
  const peekY = stackDepth * PEEK_OFFSET * (isBottom ? -1 : 1);
  const opacity = isHidden ? 0 : 1 - stackDepth * OPACITY_STEP;

  let containerStyle: React.CSSProperties;

  if (!isExpanded) {
    containerStyle = {
      position: "absolute",
      top: isBottom ? undefined : 0,
      bottom: isBottom ? 0 : undefined,
      left: 0,
      right: 0,
      transform: `translateY(${peekY}px) scale(${scale})${offset ? ` translateX(${offset}px)` : ""}`,
      opacity,
      zIndex: total - stackDepth,
      visibility: isHidden ? "hidden" : "visible",
      pointerEvents: index === 0 ? "auto" : "none",
      transformOrigin: isBottom ? "bottom center" : "top center",
    };
  } else {
    containerStyle = {
      position: "relative",
      transform: offset ? `translateX(${offset}px)` : undefined,
      opacity: 1,
      zIndex: total - stackDepth,
      pointerEvents: "auto",
    };
  }

  const dynamicStyle: React.CSSProperties = {
    ...toast.style,
    ...containerStyle,
    transition: isDragging
      ? "opacity 0.3s ease, visibility 0.3s ease"
      : "transform 0.35s cubic-bezier(0.34, 1.15, 0.64, 1), opacity 0.3s ease, visibility 0.3s ease",
    touchAction: "none",
  };

  if (toast.render) {
    return (
      <div
        style={dynamicStyle}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => setIsItemHovered(true)}
        onMouseLeave={() => setIsItemHovered(false)}
        onClick={() => {
          if (Math.abs(offset) < 5) {
            toast.onClick?.(toast);
          }
        }}
      >
        {toast.render()}
      </div>
    );
  }

  const defaultIcon = icons[toast.type as keyof typeof icons] || null;
  const Icon = toast.icon !== undefined ? toast.icon : defaultIcon;

  return (
    <div
      className={`tf-toast tf-toast-${toast.type} ${toast.className || ""}`}
      style={dynamicStyle}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => setIsItemHovered(true)}
      onMouseLeave={() => setIsItemHovered(false)}
      onClick={(e) => {
        if (Math.abs(offset) < 5) {
          toast.onClick?.(toast);
        }
      }}
    >
      {Icon && (
        <span
          className="tf-icon"
          style={{ alignSelf: "flex-start", marginTop: "2px", color: toast.iconColor }}
        >
          {Icon}
        </span>
      )}
      <div className="tf-message" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <span>{toast.message}</span>
        {toast.description && (
          <span className="tf-description">{toast.description}</span>
        )}
        {toast.progress !== undefined && (
          <div className="tf-progress-bg">
            <div className="tf-progress-fill" style={{ width: `${toast.progress}%` }} />
          </div>
        )}
      </div>

      {toast.action && (
        <button onClick={toast.action.onClick} className="tf-action-btn">
          {toast.action.label}
        </button>
      )}

      {toast.dismissible && (
        <button
          title="Dismiss"
          onClick={() => toastLib.dismiss(toast.id)}
          className="tf-close-btn"
        >
          ✖
        </button>
      )}
    </div>
  );
}
