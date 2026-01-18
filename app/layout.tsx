import type React from "react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Floop - Meaningful Feedback, Faster",
  description:
    "Floop helps teachers deliver feedback 4x faster while empowering students through guided peer feedback and self-assessment. Used by 90% of U.S. schools.",
  generator: "v0.app",
  keywords: [
    "edtech",
    "feedback",
    "education",
    "teaching",
    "learning",
    "peer review",
    "assessment",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
