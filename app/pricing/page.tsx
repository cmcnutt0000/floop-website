import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header showLogo />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
              Designed for everyday teachers. Start free and upgrade when you
              need more.
            </p>
            <p className="text-sm font-medium text-accent">
              No credit card required to sign up
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {/* Free Tier */}
            <Card className="p-8 border-2 border-border bg-card relative flex flex-col">
              <div className="h-20">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Free
                </h2>
                <p className="text-muted-foreground text-sm">
                  Perfect for individual teachers getting started
                </p>
              </div>

              <div className="h-24 flex flex-col justify-center">
                <div>
                  <span className="text-5xl font-bold text-foreground">$0</span>
                  <span className="text-muted-foreground ml-2">/ forever</span>
                </div>
              </div>

              <Button className="w-full mb-8 py-6 text-lg" variant="outline">
                Get Started Free
              </Button>

              <div className="space-y-4">
                <p className="font-semibold text-foreground text-sm uppercase tracking-wider">
                  Everything you need:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Drag-and-drop feedback on student work
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Customizable comment banks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Peer review and self-assessment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Student revision tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Unlimited assignments and students
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Growth tracking over time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Emoji and symbol feedback options
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Pro Tier */}
            <Card className="p-8 border-2 border-accent bg-card relative overflow-hidden flex flex-col">
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                BEST VALUE
              </div>

              <div className="h-20">
                <h2 className="text-2xl font-bold text-foreground mb-2">Pro</h2>
                <p className="text-muted-foreground text-sm">
                  For teachers who want all premium features
                </p>
              </div>

              <div className="h-24 flex flex-col justify-center">
                <div>
                  <span className="text-5xl font-bold text-foreground">
                    $10
                  </span>
                  <span className="text-muted-foreground ml-2">/ month</span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Billed annually ($120/year)
                  </p>
                </div>
              </div>

              <Button className="w-full mb-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
                Get Pro
              </Button>

              <div className="space-y-4">
                <p className="font-semibold text-foreground text-sm uppercase tracking-wider">
                  Everything in Free, plus:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      Audio and video feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      LMS import and export
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      Google Classroom, Canvas, Schoology integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      Priority support
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      Usage analytics and reporting
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* School & District Tier */}
            <Card className="p-8 border-2 border-border bg-card relative flex flex-col">
              <div className="h-20">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  School & District
                </h2>
                <p className="text-muted-foreground text-sm">
                  For schools with 4+ teachers using Floop
                </p>
              </div>

              <div className="h-24 flex flex-col justify-center">
                <div>
                  <span className="text-5xl font-bold text-foreground">
                    Custom
                  </span>
                  <span className="text-muted-foreground ml-2">
                    / per school
                  </span>
                </div>
              </div>

              <Button className="w-full mb-8 py-6 text-lg" variant="outline">
                Contact Sales
              </Button>

              <div className="space-y-4">
                <p className="font-semibold text-foreground text-sm uppercase tracking-wider">
                  Everything in Pro, plus:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      District-wide admin dashboard
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      SSO and rostering (Clever, ClassLink)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      Discounted rates for multiple teachers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      Additional onboarding support available
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Workshops & Training
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Want to get the most out of Floop? Our team offers customized
              workshops and professional development sessions for schools and
              districts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Request Training Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-2">
                Is the free plan really free forever?
              </h3>
              <p className="text-muted-foreground">
                Yes! Individual teachers can use Floop's core features
                completely free, with no time limits or hidden fees.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-2">
                What counts as "4+ teachers" for the School plan?
              </h3>
              <p className="text-muted-foreground">
                When 4 or more teachers at the same school are actively using
                Floop, you qualify for our School & District pricing, which
                includes premium features and support.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-2">
                Can I try premium features before committing?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! Contact us for a demo and trial period to experience
                the full power of Floop's premium features.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-2">
                How does LMS integration work?
              </h3>
              <p className="text-muted-foreground">
                With the School plan, you can import classes and rosters from
                Google Classroom, Canvas, or Schoology, and export grades back
                to your LMS automatically.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px] text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to transform feedback in your classroom?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of educators who are saving time and helping students
            grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 font-semibold"
            >
              Sign up for free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 font-semibold border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-8">
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
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Pricing
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground"
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
