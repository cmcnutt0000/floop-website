"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";

interface LocalizedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function LocalizedLink({ href, children, ...props }: LocalizedLinkProps) {
  const { getLocalizedPath } = useLanguage();

  // Don't localize external links or app.floopedu.com links
  if (href.startsWith("http") || href.startsWith("https://app.floopedu.com")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={getLocalizedPath(href)} {...props}>
      {children}
    </Link>
  );
}
