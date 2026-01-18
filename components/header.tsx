import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  showLogo?: boolean;
}

export function Header({ showLogo = false }: HeaderProps) {
  return (
    <nav className="border-b border-border bg-white sticky top-0 z-50">
      <div
        className={`container mx-auto px-6 lg:px-8 py-4 flex items-center max-w-[1400px] ${showLogo ? "justify-between" : "justify-end"}`}
      >
        {showLogo && (
          <Link href="/">
            <Image
              src="/images/FloopLogo.svg"
              alt="Floop"
              width={120}
              height={45}
              className="h-10 w-auto"
            />
          </Link>
        )}
        <div className="flex items-center gap-3">
          <Link href="/pricing">
            <Button variant="ghost" className="text-foreground font-semibold">
              Pricing
            </Button>
          </Link>
          <Button variant="ghost" className="text-foreground font-semibold">
            Log in
          </Button>
          <Link href="/pricing">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Sign up
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Select language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <span className="mr-2">🇺🇸</span> English
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="mr-2">🇪🇸</span> Español
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="mr-2">🇫🇷</span> Français
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
