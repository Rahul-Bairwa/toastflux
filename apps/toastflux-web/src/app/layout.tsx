import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "toastflux";
import "toastflux/styles/toast.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToastFlux - React Notification Library",
  description: "A lightweight, customizable toast notification library for React & Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-foreground selection:bg-purple-500/30 selection:text-purple-200 min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {children}
        <Toaster theme="dark" />
      </body>
    </html>
  );
}
