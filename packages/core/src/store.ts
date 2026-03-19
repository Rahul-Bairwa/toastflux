import { Toast } from "./types";

type Listener = () => void;

class ToastStore {
  private toasts: Toast[] = [];
  private listeners: Listener[] = [];

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  getToasts() {
    return this.toasts;
  }

  add(toast: Toast) {
    this.toasts = [toast, ...this.toasts];
    this.emit();
  }

  remove(id: string) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.emit();
  }

  private emit() {
    this.listeners.forEach((l) => l());
  }
}

export const toastStore = new ToastStore();
