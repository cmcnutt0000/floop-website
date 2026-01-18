import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header showLogo />

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-2xl mx-auto mb-8 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <Card className="p-8 bg-accent/5 border-accent/20">
              <p className="text-xl text-muted-foreground mb-4">Coming Soon</p>
              <p className="text-muted-foreground">
                We're currently finalizing our Terms of Service. Please check
                back soon or contact us if you have any questions.
              </p>
            </Card>
            <div className="mt-8">
              <Link href="/">
                <Button variant="outline" size="lg">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-8 mt-auto">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Image
              src="/images/floop-logo.png"
              alt="Floop"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Powered by{" "}
              <a
                href="https://humanrestorationproject.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Human Restoration Project
              </a>
              , a nonprofit organization
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
