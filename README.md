# 🚀 ToastFlux

> ⚡ Lightweight • 🎨 Beautiful • 🧠 Fully Customizable
> A modern toast notification library for React & Next.js

---

## ✨ Why ToastFlux?

ToastFlux is built for developers who want **speed, flexibility, and clean UI** without complexity.

- ⚡ Blazing fast & lightweight
- 🎨 Beautiful default UI (no extra styling needed)
- 🧩 Fully customizable (style, icon, font, layout)
- 📍 Flexible positioning system
- 🎯 Action buttons (Undo, Retry, etc.)
- ⏱ Smart duration & dismiss control
- 📊 Progress bar support
- 📝 Description text support
- 🌗 Built-in dark & light themes
- ⚛️ Works with React & Next.js App Router
- 👆 Swipe to dismiss (touch & pointer support)

---

## 📦 Installation

```bash
npm install toastflux
```

---

## 🚀 Quick Start

```jsx
import { Toaster, toast } from "toastflux";
import "toastflux/styles/toast.css";

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

### 📝 Description

Add a subtitle/description below the main message:

```jsx
toast.success("Event has been created", {
  description: "Monday, January 3rd at 6:00pm",
});
```

---

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

Or globally via `<Toaster />`:

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
  iconColor: "#10b981",
});
```

---

## 🎭 Themes

ToastFlux supports built-in dark and light themes:

```jsx
<Toaster theme="light" />
<Toaster theme="dark" />
```

---

## 🧠 API Overview

### `toast(message, options?)`

| Option        | Type               | Description                   |
| ------------- | ------------------ | ----------------------------- |
| `description` | ReactNode          | Subtitle below main message   |
| `duration`    | number             | Auto dismiss time in ms       |
| `dismissible` | boolean            | Enable manual ✖ close button  |
| `position`    | ToastPosition      | Where toast appears on screen |
| `style`       | CSSProperties      | Inline styles override        |
| `className`   | string             | Custom CSS class              |
| `icon`        | ReactNode          | Custom icon element           |
| `iconColor`   | string             | Color for default icons       |
| `action`      | { label, onClick } | Action button config          |
| `progress`    | number             | Progress bar value (0–100)    |

---

## 📍 Supported Positions

| Position        | Description                |
| --------------- | -------------------------- |
| `top-left`      | Top left corner            |
| `top-center`    | Top center                 |
| `top-right`     | Top right corner (default) |
| `bottom-left`   | Bottom left corner         |
| `bottom-center` | Bottom center              |
| `bottom-right`  | Bottom right corner        |

---

## 🔤 Custom Font (CSS Variable)

ToastFlux uses a clean system font by default. To match your app's custom font, set the `--tf-font-family` CSS variable:

```css
/* In your global CSS (e.g. index.css or globals.css) */
:root {
  --tf-font-family: "Inter", sans-serif;
}
```

👉 Falls back to `system-ui, sans-serif` by default — no ugly serif fonts!

---

## ⚙️ Next.js (App Router) Usage

ToastFlux works seamlessly with Next.js App Router. Since it uses client-side state, add `"use client"` where needed.

### 1. Add `<Toaster />` to Root Layout

```tsx
// app/layout.tsx
import { Toaster } from "toastflux";
import "toastflux/styles/toast.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster theme="dark" />
      </body>
    </html>
  );
}
```

### 2. Use `toast` in Any Client Component

```tsx
// app/page.tsx
"use client";

import { toast } from "toastflux";

export default function HomePage() {
  return (
    <button onClick={() => toast.success("It works in Next.js too! 🚀")}>
      Show Toast
    </button>
  );
}
```

---

## 🧱 Architecture

```
toastflux/
├── packages/
│   ├── core/      → Framework-independent logic (store, types, toast fn)
│   ├── react/     → React UI components (Toaster, ToastItem)
│   └── styles/    → CSS (toast.css)
└── apps/
    ├── react-app/ → Vite + React demo
    └── next-app/  → Next.js App Router demo
```

---

## 🚀 Roadmap

- [x] Toast types (success, error, info, warning, default)
- [x] Dark & Light themes
- [x] Description support
- [x] Custom font via CSS variable
- [x] Action buttons
- [x] Progress bar
- [x] Swipe to dismiss
- [x] Next.js App Router support
- [ ] Promise-based toasts (`toast.promise`)
- [ ] Smart toast grouping
- [ ] Advanced animations
- [ ] DevTools panel

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
