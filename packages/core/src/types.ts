import { ReactNode, CSSProperties } from "react";

export type ToastType =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "loading"
  | "default";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface Toast {
  id: string;
  message?: string;
  description?: ReactNode;
  type?: ToastType;
  createdAt: number;
  style?: CSSProperties;
  className?: string;
  duration?: number;
  dismissible?: boolean;
  position?: ToastPosition;
  icon?: ReactNode;
  iconColor?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  render?: () => ReactNode;
  progress?: number;
  onShow?: (toast: Toast) => void;
  onClose?: (toast: Toast) => void;
  onClick?: (toast: Toast) => void;
}

export type ToastOptions = Partial<Omit<Toast, "id" | "type" | "createdAt">>;

export const PEEK_OFFSET = 10;
export const MAX_STACK_VISIBLE = 3;
export const SCALE_STEP = 0.05;
export const OPACITY_STEP = 0.15;
