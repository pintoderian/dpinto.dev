import type { Metadata } from "next";
import { Onest as FontSans } from "next/font/google";
import "./globals.css";
import { classnames } from "@/utils/classnames";
import { Providers } from "./provider";
import dictionary from "@/dictionaries/es.json";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dpinto.dev"),
  title: {
    default: `Derian Pinto - ${dictionary.badge}`,
    template: "%s | Derian Pinto"
  },
  description: "FullStack Developer.",
  openGraph: {
    title: `Derian Pinto - ${dictionary.badge}`,
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={classnames(
          "min-h-screen font-sans antialiased relative text-black dark:text-white overflow-x-hidden bg-white dark:bg-neutral-950",
          fontSans.variable
        )}
      >
        <div
          className={classnames(
            "absolute top-0 z-[-2] h-screen w-screen",
            "dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]",
            "bg-[radial-gradient(100%_50%_at_50%_0%,rgba(120,119,198,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
          )}
        ></div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
