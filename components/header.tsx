"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";
import Image from "next/image";
import { useAccessibility } from "@/components/accessibility-provider";
import { useLanguage } from "@/lib/i18n/language-context";
import { LocalizedLink } from "@/components/localized-link";

interface HeaderProps {
  showLogo?: boolean;
}

export function Header({ showLogo = false }: HeaderProps) {
  const { dyslexicFont, toggleDyslexicFont } = useAccessibility();
  const { language, setLanguage, t } = useLanguage();
  return (
    <nav className="border-b border-border bg-white sticky top-0 z-50">
      <div
        className={`container mx-auto px-6 lg:px-8 py-4 flex items-center max-w-[1400px] ${showLogo ? "justify-between" : "justify-end"}`}
      >
        {showLogo && (
          <LocalizedLink href="/">
            <Image
              src="/images/FloopLogo.svg"
              alt="Floop"
              width={120}
              height={45}
              className="h-10 w-auto"
            />
          </LocalizedLink>
        )}
        <div className="flex items-center gap-3">
          <LocalizedLink href="/pricing">
            <Button variant="ghost" className="text-foreground font-semibold">
              {t.header.pricing}
            </Button>
          </LocalizedLink>
          <a href="https://app.floopedu.com/signIn">
            <Button variant="ghost" className="text-foreground font-semibold">
              {t.header.logIn}
            </Button>
          </a>
          <LocalizedLink href="/pricing">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              {t.header.signUp}
            </Button>
          </LocalizedLink>
          <Button
            variant="ghost"
            size="icon"
            className={`text-foreground ${dyslexicFont ? "bg-accent/20" : ""}`}
            onClick={toggleDyslexicFont}
            title={
              dyslexicFont
                ? "Switch to default font"
                : "Switch to dyslexic-friendly font"
            }
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 122.88 122.88"
              fill="currentColor"
            >
              <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm-.39,74.18L52.1,98.91a4.94,4.94,0,0,1-2.58,2.83A5,5,0,0,1,42.7,95.5l6.24-17.28a26.3,26.3,0,0,0,1.17-4,40.64,40.64,0,0,0,.54-4.18c.24-2.53.41-5.27.54-7.9s.22-5.18.29-7.29c.09-2.63-.62-2.8-2.73-3.3l-.44-.1-18-3.39A5,5,0,0,1,27.08,46a5,5,0,0,1,5.05-7.74l19.34,3.63c.77.07,1.52.16,2.31.25a57.64,57.64,0,0,0,7.18.53A81.13,81.13,0,0,0,69.9,42c.9-.1,1.75-.21,2.6-.29l18.25-3.42A5,5,0,0,1,94.5,39a5,5,0,0,1,1.3,7,5,5,0,0,1-3.21,2.09L75.15,51.37c-.58.13-1.1.22-1.56.29-1.82.31-2.72.47-2.61,3.06.08,1.89.31,4.15.61,6.51.35,2.77.81,5.71,1.29,8.4.31,1.77.6,3.19,1,4.55s.79,2.75,1.39,4.42l6.11,16.9a5,5,0,0,1-6.82,6.24,4.94,4.94,0,0,1-2.58-2.83L63,74.23,62,72.4l-1,1.78Zm.39-53.52a8.83,8.83,0,1,1-6.24,2.59,8.79,8.79,0,0,1,6.24-2.59Zm36.35,4.43a51.42,51.42,0,1,0,15,36.35,51.27,51.27,0,0,0-15-36.35Z" />
            </svg>
            <span className="sr-only">Toggle dyslexic-friendly font</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground gap-1 px-2">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">({language})</span>
                <span className="sr-only">{t.header.selectLanguage}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setLanguage("en")}
                className="cursor-pointer"
              >
                <span className="font-medium mr-2">(en)</span> English
                {language === "en" && <Check className="ml-auto h-4 w-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("es")}
                className="cursor-pointer"
              >
                <span className="font-medium mr-2">(es)</span> Spanish
                {language === "es" && <Check className="ml-auto h-4 w-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("fr")}
                className="cursor-pointer"
              >
                <span className="font-medium mr-2">(fr)</span> French
                {language === "fr" && <Check className="ml-auto h-4 w-4" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
