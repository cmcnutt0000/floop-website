import type React from "react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AccessibilityProvider } from "@/components/accessibility-provider";
import { LanguageProvider } from "@/lib/i18n/language-context";
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
    icon: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/open-dyslexic"
          rel="stylesheet"
        />
      </head>
      <body className={`${openSans.variable} font-sans antialiased`}>
        <LanguageProvider>
          <AccessibilityProvider>{children}</AccessibilityProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
