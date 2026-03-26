# 🚀 ToastFlux

[![npm version](https://img.shields.io/npm/v/toastflux.svg?style=flat-square)](https://www.npmjs.com/package/toastflux)
[![bundle size](https://img.shields.io/bundlephobia/minzip/toastflux?style=flat-square&label=size)](https://bundlephobia.com/package/toastflux)

> ⚡ **Ultra Lightweight (~2.8kb gzipped) • 🎨 Beautiful • 🧠 Powerful**  
> A modern scalable toast notification library for React & Next.js. **[Live Demo →](https://toastflux.versintal.in)**

## 📦 Installation

```bash
npm install toastflux
```

## 🚀 Quick Usage

Add `<Toaster />` once to your app root (or `app/layout.tsx` for Next.js App Router).

```tsx
import { Toaster, toast } from "toastflux";
import "toastflux/styles/toast.css";

export default function App() {
  return (
    <>
      <Toaster theme="dark" position="bottom-right" />
      <button onClick={() => toast.success("Event created 🚀")}>
        Show Toast
      </button>
    </>
  );
}
```

## ⚡ Toast Types & Capabilities

ToastFlux handles basic toasts, promises, lifecycle events, and complex UI smoothly:

```tsx
// Basic Types
toast.success("Saved successfully!");
toast.error("Upload failed.");
toast.loading("Fetching data...");

// Promise Handling
toast.promise(fetchData(), {
  loading: "Loading...",
  success: (data) => `Loaded ${data.name}!`,
  error: "Error loading data",
});

// Advanced (Actions, Progress, Hooks)
toast("System Update", {
  description: "Version 2.0 downloaded",
  icon: <span>🌟</span>,
  action: { label: "Install", onClick: () => console.log("Installing") },
  onClose: (t) => console.log(`Toast ${t.id} closed!`),
  progress: 80,
  duration: 6000,
});
```

## ⚙️ `<Toaster />` Global Defaults
Keep your code DRY by defining global configurations on the Toaster itself.

```tsx
<Toaster 
  theme="light" 
  position="bottom-left" 
  duration={5000} 
  toastOptions={{ style: { borderRadius: '12px' } }} 
/>
```

## 🧠 API Reference

### `toast(message, options?)`
| Option | Type | Description |
|--------|------|-------------|
| `description` | ReactNode | Subtitle text below the title |
| `duration` | number | Auto dismiss time in ms (Default: `4000`) |
| `dismissible` | boolean | Enable manual ✖ close button |
| `position` | string | `top-right`, `bottom-center`, `top-left`, etc. |
| `style` / `className` | CSS / string | Inline styles and class overrides |
| `icon` / `iconColor` | ReactNode / string | Custom icon / SVG color override |
| `action` | `{ label, onClick }` | Action button configuration |
| `progress` | number (0-100) | Built-in progress bar value |
| `onShow` / `onClose` / `onClick` | `(toast) => void` | Lifecycle hooks for analytics/tracking |

## 🔤 Custom Font
Use the CSS variable `--tf-font-family` to automatically match your app's font:
```css
:root { --tf-font-family: "Inter", sans-serif; }
```

## 🤝 License
[MIT](https://github.com/Rahul-Bairwa/toastflux/blob/main/LICENSE) © [Rahul Bairwa](https://github.com/Rahul-Bairwa)
