# 🚀 ToastFlux

> ⚡ Lightweight • 🎨 Beautiful • 🧠 Fully Customizable
> A modern toast notification library for React & Next.js

---

## ✨ Why ToastFlux?

ToastFlux is built for developers who want **speed, flexibility, and clean UI** without complexity.

- ⚡ Blazing fast & lightweight
- 🎨 Beautiful default UI (no extra styling needed)
- 🧩 Fully customizable (style, icon, layout)
- 📍 Flexible positioning system
- 🎯 Action buttons (Undo, Retry, etc.)
- ⏱ Smart duration & dismiss control
- 📊 Progress bar support
- 🌗 Built-in dark & light themes
- ⚛️ Works with React & Next.js

---

## 📦 Installation

```bash
npm install @toastflux/react @toastflux/styles
```

---

## 🚀 Quick Start

```jsx
import { Toaster, toast } from "@toastflux/react";
import "@toastflux/styles/toast.css";

function App() {
  return (
    <>
      <Toaster theme="dark" />

      <button onClick={() => toast.success("Event created 🚀")}>
        Show Toast
      </button>
    </>
  );
}

export default App;
```

---

## 🎯 Toast Types

```jsx
toast.success("Saved successfully!");
toast.info("Meeting starts soon.");
toast.warning("Storage almost full.");
toast.error("Upload failed.");
toast.default("Just a message.");
```

---

## 🎨 Customization

### ⏱ Duration & Dismiss

```jsx
toast.success("I stay longer!", {
  duration: 6000,
  dismissible: true,
});
```

---

### 🎯 Action Buttons

```jsx
toast.info("Item deleted", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo clicked"),
  },
});
```

---

### 📍 Positioning

```jsx
toast.success("Bottom right toast!", {
  position: "bottom-right",
});
```

Or globally:

```jsx
<Toaster position="top-right" />
```

---

### 📊 Progress Bar

```jsx
toast.info("Uploading file...", {
  progress: 45,
});
```

---

### 🎨 Custom Style & Icon

```jsx
toast.default("Custom styled toast", {
  style: {
    border: "1px solid #ec4899",
    background: "#fdf2f8",
    color: "#000",
  },
  icon: <span>🌟</span>,
});
```

---

## 🎭 Themes

ToastFlux supports built-in themes:

```jsx
<Toaster theme="light" />
<Toaster theme="dark" />
```

---

## 🧠 API Overview

### `toast(message, options?)`

| Option      | Type               | Description            |
| ----------- | ------------------ | ---------------------- |
| duration    | number             | Auto dismiss time (ms) |
| dismissible | boolean            | Enable manual close    |
| position    | ToastPosition      | Toast position         |
| style       | CSSProperties      | Inline styles          |
| className   | string             | Custom class           |
| icon        | ReactNode          | Custom icon            |
| action      | { label, onClick } | Action button          |
| progress    | number             | Progress bar (0–100)   |

---

## 📍 Supported Positions

- top-left
- top-center
- top-right
- bottom-left
- bottom-center
- bottom-right

---

## 🔤 Custom Font (CSS Variable)

You can match your app’s font using CSS variables:

```css
:root {
  --tf-font-family: "Inter", sans-serif;
}
```

👉 Falls back to system `sans-serif` by default.

---

## ⚙️ Next.js Usage

```jsx
"use client";

import { Toaster, toast } from "@toastflux/react";
import "@toastflux/styles/toast.css";
```

---

## 🧱 Architecture

```
packages/
  core/     → logic layer (framework independent)
  react/    → UI layer
  styles/   → CSS
```

---

## 🚀 Roadmap

- [ ] Promise-based toasts
- [ ] Smart toast grouping
- [ ] Advanced animations
- [ ] DevTools panel
- [ ] AI-powered toasts (future 🔥)

---

## 🤝 Contributing

PRs and ideas are welcome!
Feel free to open issues or suggest improvements.

---

## 📄 License

MIT

---

## ❤️ Author

Built with passion by **Rahul**
