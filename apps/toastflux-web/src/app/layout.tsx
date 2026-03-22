import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "toastflux";
import { SITE_CONFIG } from "@/constants/site";
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
  title: `${SITE_CONFIG.name} – Lightweight React Toast Notification Library`,
  description:
    "A lightweight, beautiful, and fully customizable toast notification library for React & Next.js. Under 2kb gzipped. Dark & light themes, actions, progress bars, and more.",
  keywords: [
    "react toast",
    "react toast notification",
    "nextjs toast",
    "toast library react",
    "react snackbar",
    "sonner alternative",
    "react notification",
    "toast notification react",
    "nextjs notification",
    "toastflux",
    "lightweight toast react",
    "react toast component",
    "react hot toast alternative",
    "react-toastify alternative",
  ],
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.github }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} – Lightweight React & Next.js Toast Notifications`,
    description:
      "Beautiful, customizable toast notifications for React & Next.js. Zero config, under 2kb, dark/light themes, actions, progress bars. The modern Sonner alternative.",
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} – React Toast Notification Library`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} – Lightweight React Toast Notifications`,
    description:
      "Beautiful, customizable toast notifications for React & Next.js. Zero config, under 2kb. The modern alternative to Sonner & React-Toastify.",
    images: [`${SITE_CONFIG.url}/og-image.png`],
    creator: SITE_CONFIG.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_CONFIG.name,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description:
    "A lightweight, beautiful, and fully customizable toast notification library for React & Next.js with modern UI, themes, actions, and progress support.",
  url: SITE_CONFIG.url,
  author: {
    "@type": "Person",
    name: SITE_CONFIG.author,
    url: SITE_CONFIG.github,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  license: "https://opensource.org/licenses/MIT",
  programmingLanguage: ["TypeScript", "JavaScript", "React", "Next.js"],
  softwareVersion: "1.0.2",
  downloadUrl: SITE_CONFIG.npm,
  codeRepository: SITE_CONFIG.github,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={SITE_CONFIG.url} />
      </head>
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
