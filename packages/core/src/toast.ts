import { toastStore } from "./store";
import { Toast, ToastType, ToastOptions } from "./types";

function createToast(message: string | undefined, type: ToastType, options?: ToastOptions) {
  const id = crypto.randomUUID();

  const defaultOptions = toastStore.getConfig();

  toastStore.add({
    id,
    message,
    type,
    createdAt: Date.now(),
    ...defaultOptions,
    ...options,
  });

  return id;
}

const toastFn = (msg: string | undefined, type: ToastType = "default", options?: ToastOptions) => createToast(msg, type, options);

toastFn.success = (msg: string, options?: ToastOptions) => createToast(msg, "success", options);
toastFn.error = (msg: string, options?: ToastOptions) => createToast(msg, "error", options);
toastFn.info = (msg: string, options?: ToastOptions) => createToast(msg, "info", options);
toastFn.warning = (msg: string, options?: ToastOptions) => createToast(msg, "warning", options);
toastFn.loading = (msg: string, options?: ToastOptions) => createToast(msg, "loading", options);
toastFn.default = (msg: string, options?: ToastOptions) => createToast(msg, "default", options);
toastFn.custom = (options: ToastOptions) => createToast(options.message, "default", options);

toastFn.promise = <T>(
  promise: Promise<T>,
  msgs: {
    loading: string;
    success: string | ((data: T) => string);
    error: string | ((err: any) => string);
  },
  options?: ToastOptions
) => {
  const defaultDuration = options?.duration || toastStore.getConfig().duration || 4000;
  const id = toastFn.loading(msgs.loading, { ...options, duration: Infinity });

  promise
    .then((data) => {
      const message = typeof msgs.success === "function" ? msgs.success(data) : msgs.success;
      toastStore.update(id, { type: "success", message, duration: defaultDuration });
    })
    .catch((err) => {
      const message = typeof msgs.error === "function" ? msgs.error(err) : msgs.error;
      toastStore.update(id, { type: "error", message, duration: defaultDuration });
    });

  return promise;
};

toastFn.dismiss = (id: string) => toastStore.remove(id);

export const toast = toastFn;
