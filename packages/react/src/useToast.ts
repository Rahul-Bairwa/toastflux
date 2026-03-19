"use client";

import { useEffect, useState } from "react";
import { toastStore } from "@toastflux/core";

export function useToastStore() {
  const [toasts, setToasts] = useState(toastStore.getToasts());

  useEffect(() => {
    return toastStore.subscribe(() => {
      setToasts([...toastStore.getToasts()]);
    });
  }, []);

  return toasts;
}
