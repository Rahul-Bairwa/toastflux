# 🚀 ToastFlux

[![npm version](https://img.shields.io/npm/v/toastflux.svg?style=flat-square)](https://www.npmjs.com/package/toastflux)
[![bundle size](https://img.shields.io/bundlephobia/minzip/toastflux?style=flat-square&label=size)](https://bundlephobia.com/package/toastflux)
[![license](https://img.shields.io/npm/l/toastflux.svg?style=flat-square)](https://github.com/Rahul-Bairwa/toastflux/blob/main/LICENSE)

> ⚡ Lightweight • 🎨 Beautiful • 🧠 Fully Customizable
> A modern toast notification library for React & Next.js

🔗 **[Documentation & Live Demo →](https://toastflux.versintal.in)**

---

## ✨ Why ToastFlux?

ToastFlux is built for developers who want **speed, flexibility, and clean UI** without complexity.

- ⚡ Ultra lightweight — 3kb gzipped
- 🎨 Beautiful default UI (no extra styling needed)
- 🧩 Fully customizable (style, icon, font, layout)
- 📍 Flexible positioning system (6 positions)
- 🎯 Action buttons (Undo, Retry, etc.)
- ⏱ Smart duration & dismiss control
- 📊 Progress bar support
- 📝 Description text support
- 🌗 Built-in dark & light themes
- ⚛️ Works with **React & Next.js App Router**
- 🔷 **TypeScript-first** with full type safety
- 👆 Swipe to dismiss (touch & pointer support)

---

## 📦 Installation

```bash
# npm
npm install toastflux

# yarn
yarn add toastflux

# pnpm
pnpm add toastflux

# bun
bun add toastflux
```

---

## 🚀 Quick Start (React)

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

## ⚙️ Next.js (App Router) Usage

ToastFlux works seamlessly with Next.js App Router. The library includes the `"use client"` directive automatically.

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

## 🎯 Toast Types

```jsx
toast.success("Saved successfully!");
toast.info("Meeting starts soon.");
toast.warning("Storage almost full.");
toast.error("Upload failed.");
toast.loading("Fetching data...");
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

### ⏱ Duration & Dismiss

```jsx
toast.success("I stay longer!", {
  duration: 6000,
  dismissible: true,
});
```

### 🎯 Action Buttons

```jsx
toast.info("Item deleted", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo clicked"),
  },
});
```

### 📍 Positioning

```jsx
// Per-toast positioning
toast.success("Bottom right toast!", {
  position: "bottom-right",
});

// Globally via <Toaster />
<Toaster position="top-right" duration={5000} />;
```

### 📊 Progress Bar

```jsx
toast.info("Uploading file...", {
  progress: 45,
});
```

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

### ⚙️ Global Configuration

You can define global defaults directly in the `<Toaster />` component. This helps keep your code DRY (Don't Repeat Yourself).

```jsx
<Toaster 
  position="bottom-right" 
  duration={5000} 
  toastOptions={{
    style: { border: '1px solid #444' },
    className: 'my-global-toast-class'
  }} 
/>
```
```

---

## 🧠 API Reference

### `toast(message, options?)`

| Option        | Type               | Default       | Description                   |
| ------------- | ------------------ | ------------- | ----------------------------- |
| `description` | ReactNode          | `undefined`   | Subtitle below main message   |
| `duration`    | number             | `4000`        | Auto dismiss time in ms       |
| `dismissible` | boolean            | `false`       | Enable manual ✖ close button  |
| `position`    | ToastPosition      | `'top-right'` | Where toast appears on screen |
| `style`       | CSSProperties      | `undefined`   | Inline styles override        |
| `className`   | string             | `undefined`   | Custom CSS class              |
| `icon`        | ReactNode          | `undefined`   | Custom icon element           |
| `iconColor`   | string             | `undefined`   | Color for default icons       |
| `action`      | { label, onClick } | `undefined`   | Action button config          |
| `progress`    | number             | `undefined`   | Progress bar value (0–100)    |

### `<Toaster />` Props

| Prop           | Type                | Default       | Description                     |
| -------------- | ------------------- | ------------- | ------------------------------- |
| `theme`        | `'dark' \| 'light'` | `'dark'`      | Visual theme of toasts          |
| `position`     | ToastPosition       | `'top-right'` | Default position for all toasts |
| `duration`     | number              | `4000`        | Default duration for all toasts |
| `toastOptions` | ToastOptions        | `undefined`   | Global default options          |

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

## 🚀 Roadmap

- [x] Toast types (success, error, info, warning, default)
- [x] Dark & Light themes
- [x] Description support
- [x] Custom font via CSS variable
- [x] Action buttons
- [x] Progress bar
- [x] Swipe to dismiss
- [x] Next.js App Router support
- [x] TypeScript support
- [ ] Promise-based toasts (`toast.promise`)
- [ ] Smart toast grouping

---

## 🤝 Contributing

PRs and ideas are welcome!
Feel free to [open issues](https://github.com/Rahul-Bairwa/toastflux/issues) or suggest improvements.

---

## 📄 License

## [MIT](https://github.com/Rahul-Bairwa/toastflux/blob/main/LICENSE)

## ❤️ Author

Built with passion by [**Rahul Bairwa**](https://github.com/Rahul-Bairwa)
