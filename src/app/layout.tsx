import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { classnames } from "@/lib/classnames";
import data from "@/content/data.json";

export const fontSans = localFont({
  src: "../fonts/HubotSans.woff2",
  variable: "--font-sans",
  weight: "400 900",
  display: "swap"
});

export const fontHolimount = localFont({
  src: "../fonts/Holimount.otf",
  variable: "--font-holimount",
  style: "normal",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dpinto.dev"),
  title: {
    default: `Derian Pinto - ${data.badge}`,
    template: "%s | Derian Pinto"
  },
  description: "FullStack Developer.",
  openGraph: {
    title: `Derian Pinto - ${data.badge}`,
    description: "FullStack Developer.",
    url: "https://dpinto.dev",
    siteName: "Derian Pinto",
    locale: "en-US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    title: "Derian Pinto",
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={classnames(
          "min-h-screen font-sans antialiased relative text-blue-100/70 overflow-x-hidden bg-neutral-900",
          fontSans.variable,
          fontHolimount.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
