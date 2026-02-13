"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { FeedbackDemo } from "@/components/feedback-demo";
import { FlooplesSection } from "@/components/flooples-section";
import { Header } from "@/components/header";
import { PeerReviewDemo } from "@/components/peer-review-demo";
import { SelfAssessmentDemo } from "@/components/self-assessment-demo";
import { ActivityDemo } from "@/components/activity-demo";
import { StudentResponseDemo } from "@/components/student-response-demo";
import { VideoModalButton } from "@/components/video-modal";
import { RiveLogo } from "@/components/rive-logo";
import { useLanguage } from "@/lib/i18n/language-context";
import { LocalizedLink } from "@/components/localized-link";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen text-foreground relative">
      {/* Background wallpaper */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "var(--background)",
          backgroundImage: "url('/images/wallpaper.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
          zIndex: -1,
          minHeight: "100%",
          height: "auto",
        }}
      />
      <Header />

      {/* Floop 2.0 Launch Banner */}
      <div className="bg-yellow-300 text-yellow-900">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px] py-3 text-center text-sm sm:text-base font-medium">
          <span className="font-bold">{t.banner.launching}</span>{" "}
          {t.banner.withFeatures}{" "}
          <LocalizedLink href="/pricing" className="underline font-bold hover:text-yellow-950 transition-colors">
            {t.banner.signUpLink}
          </LocalizedLink>{" "}
          {t.banner.forFloop1}
        </div>
      </div>

      <section id="hero" className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          {/* Hero: Side-by-side layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
            {/* Left: Dictionary Definition */}
            <div>
              <div className="mb-4">
                <RiveLogo />
              </div>
              <p className="text-xl lg:text-2xl text-muted-foreground italic mb-3">
                {t.hero.pronunciation}{" "}
                <span className="not-italic text-base font-medium ml-2 text-accent">
                  {t.hero.partOfSpeech}
                </span>
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                {t.hero.shortFor}{" "}
                <span className="font-bold text-accent">{t.hero.feedback}</span>
                {t.hero.loop}
              </p>
              <p className="text-lg text-muted-foreground">
                {t.hero.definition}
              </p>
            </div>

            {/* Right: CTA and Description */}
            <div className="lg:pl-8">
              <p className="text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed">
                {t.hero.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <LocalizedLink href="/pricing">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 font-semibold"
                  >
                    {t.hero.signUpFree}
                  </Button>
                </LocalizedLink>
                <VideoModalButton />
              </div>
            </div>
          </div>

          {/* Interactive Demo Section - directly below hero */}
          <div className="max-w-6xl mx-auto">
            <FeedbackDemo />
          </div>
        </div>
      </section>

      <section id="four-ways" className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="max-w-3xl mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              {t.fourWays.title}
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
              {t.fourWays.subtitle}
            </p>
            <div className="mt-4 p-4 bg-purple-100 border border-accent/20 rounded-xl">
              <p className="text-sm text-foreground">
                <span className="font-semibold">{t.fourWays.tryIt}</span>{" "}
                <span className="text-muted-foreground">
                  {t.fourWays.tryItDescription}
                </span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Teacher to Student Card */}
            <Card className="group p-0 border-2 hover:border-accent transition-all duration-300 overflow-hidden bg-card">
              <div className="aspect-[4/3] border-b border-border">
                <StudentResponseDemo />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/images/works.png"
                    alt="Teacher to Student"
                    width={48}
                    height={48}
                  />
                  <h3 className="text-2xl font-bold text-foreground">
                    {t.fourWays.teacherToStudent}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.fourWays.teacherToStudentDesc}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {t.fourWays.teacherFeature1}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {t.fourWays.teacherFeature2}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {t.fourWays.teacherFeature3}
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Peer to Peer Card */}
            <Card className="group p-0 border-2 hover:border-accent transition-all duration-300 overflow-hidden bg-card">
              <div className="aspect-[4/3] border-b border-border">
                <PeerReviewDemo />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/images/el.png"
                    alt="Peer to Peer"
                    width={48}
                    height={48}
                  />
                  <h3 className="text-2xl font-bold text-foreground">
                    {t.fourWays.peerToPeer}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.fourWays.peerToPeerDesc}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{t.fourWays.peerFeature1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{t.fourWays.peerFeature2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{t.fourWays.peerFeature3}</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Self-Assessment Card */}
            <Card className="group p-0 border-2 hover:border-accent transition-all duration-300 overflow-hidden bg-card">
              <div className="aspect-[4/3] border-b border-border">
                <SelfAssessmentDemo />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/images/self.png"
                    alt="Self-Assessment"
                    width={48}
                    height={48}
                  />
                  <h3 className="text-2xl font-bold text-foreground">
                    {t.fourWays.selfAssessment}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.fourWays.selfAssessmentDesc}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{t.fourWays.selfFeature1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{t.fourWays.selfFeature2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{t.fourWays.selfFeature3}</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Activity-Based Card */}
            <Card className="group p-0 border-2 hover:border-accent transition-all duration-300 overflow-hidden bg-card">
              <div className="aspect-[4/3] border-b border-border">
                <ActivityDemo />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/images/feedback.png"
                    alt="Activity-Based"
                    width={48}
                    height={48}
                  />
                  <h3 className="text-2xl font-bold text-foreground">
                    {t.fourWays.activityBased}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.fourWays.activityBasedDesc}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {t.fourWays.activityFeature1}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {t.fourWays.activityFeature2}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {t.fourWays.activityFeature3}
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div id="flooples">
        <FlooplesSection />
      </div>

      {/* What Makes Floop Different Section */}
      <section id="difference" className="py-24 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="max-w-3xl mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t.difference.title}
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              {t.difference.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Floop Workflow */}
            <Card className="p-8 border-2 border-accent bg-card flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {t.difference.floopWorkflow}
                </h3>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-accent">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t.difference.step1Title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.difference.step1Desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-accent">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t.difference.step2Title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.difference.step2Desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-accent">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t.difference.step3Title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.difference.step3Desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-accent">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t.difference.step4Title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.difference.step4Desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-accent">
                    5
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t.difference.step5Title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.difference.step5Desc}
                    </p>
                  </div>
                </div>
              </div>
              {/* Image placeholders showing improvement */}
              <div className="mt-6 pt-6 border-t border-accent/20 space-y-4">
                <div className="rounded-lg bg-rose-100 p-3 border-2 border-rose-400">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded bg-rose-500/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-rose-500">
                        v1
                      </span>
                    </div>
                    <span className="text-xs font-medium text-rose-600">
                      {t.difference.v1Feedback}
                    </span>
                  </div>
                  <div className="border border-rose-300 rounded overflow-hidden">
                    <Image
                      src="/images/v1comments.png"
                      alt="First draft with feedback"
                      width={400}
                      height={80}
                      className="w-full"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed min-h-[48px] text-center">
                    {t.difference.v1FeedbackDesc}
                  </p>
                </div>
                <div className="flex justify-center">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
                <div className="rounded-lg bg-emerald-100 p-3 border-2 border-emerald-400">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-emerald-500">
                        v3
                      </span>
                    </div>
                    <span className="text-xs font-medium text-emerald-600">
                      {t.difference.v3Feedback}
                    </span>
                  </div>
                  <div className="border border-emerald-300 rounded overflow-hidden">
                    <Image
                      src="/images/v2comments.png"
                      alt="Final version showing growth"
                      width={400}
                      height={80}
                      className="w-full"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed min-h-[48px] text-center">
                    {t.difference.v3FeedbackDesc}
                  </p>
                </div>
                <p className="text-accent font-semibold text-lg text-center pt-2">
                  {t.difference.floopConclusion}
                </p>
              </div>
            </Card>

            {/* Typical LMS */}
            <Card className="p-8 border-2 border-border bg-card/50 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-muted-foreground"
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
                <h3 className="text-2xl font-bold text-muted-foreground">
                  {t.difference.typicalLMS}
                </h3>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-muted-foreground">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">
                      {t.difference.lmsStep1Title}
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      {t.difference.lmsStep1Desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-muted-foreground">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">
                      {t.difference.lmsStep2Title}
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      {t.difference.lmsStep2Desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-muted-foreground">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">
                      {t.difference.lmsStep3Title}
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      {t.difference.lmsStep3Desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-muted-foreground">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">
                      {t.difference.lmsStep4Title}
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      {t.difference.lmsStep4Desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-muted-foreground">
                    5
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">
                      {t.difference.lmsStep5Title}
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      {t.difference.lmsStep5Desc}
                    </p>
                  </div>
                </div>
              </div>
              {/* Image placeholders showing limited change */}
              <div className="mt-6 pt-6 border-t border-border space-y-4">
                <div className="rounded-lg bg-rose-100 p-3 border-2 border-rose-400">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded bg-rose-500/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-rose-500">
                        v1
                      </span>
                    </div>
                    <span className="text-xs font-medium text-rose-600">
                      {t.difference.v1Graded}
                    </span>
                  </div>
                  <div className="border border-rose-300 rounded overflow-hidden">
                    <Image
                      src="/images/gradesv1.png"
                      alt="Original submission"
                      width={400}
                      height={80}
                      className="w-full opacity-75"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed min-h-[48px] text-center">
                    {t.difference.v1GradedDesc}
                  </p>
                </div>
                <div className="flex justify-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
                <div className="rounded-lg bg-orange-100 p-3 border-2 border-orange-400">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-orange-500">
                        v2
                      </span>
                    </div>
                    <span className="text-xs font-medium text-orange-600">
                      {t.difference.v2Graded}
                    </span>
                  </div>
                  <div className="border border-orange-300 rounded overflow-hidden">
                    <Image
                      src="/images/grade v2.png"
                      alt="Graded submission"
                      width={400}
                      height={80}
                      className="w-full opacity-75"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed min-h-[48px] text-center">
                    {t.difference.v2GradedDesc}
                  </p>
                </div>
                <p className="text-muted-foreground font-semibold text-lg text-center pt-2">
                  {t.difference.lmsConclusion}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="max-w-3xl mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t.testimonials.title}
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 bg-card border-2 hover:border-accent/50 transition-colors">
              <div className="mb-6">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8">
                  {t.testimonials.quote1}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent text-xl">
                  F
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {t.testimonials.author1}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t.testimonials.role1}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 hover:border-accent/50 transition-colors">
              <div className="mb-6">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8">
                  {t.testimonials.quote2}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent text-xl">
                  S
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {t.testimonials.author2}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t.testimonials.role2}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 hover:border-accent/50 transition-colors">
              <div className="mb-6">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8">
                  {t.testimonials.quote3}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent text-xl">
                  A
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {t.testimonials.author3}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t.testimonials.role3}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 bg-purple-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.integrations.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.integrations.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {[
              {
                name: "Google Classroom",
                icon: "/images/icons/googleclassroom.png",
              },
              { name: "Canvas", icon: "/images/icons/canvas.png" },
              { name: "Schoology", icon: "/images/icons/schoology.png" },
              { name: "Clever", icon: "/images/icons/clever.png" },
              { name: "ClassLink", icon: "/images/icons/classlink.png" },
            ].map((integration) => (
              <div
                key={integration.name}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors bg-white px-4 py-3 rounded-xl shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={integration.icon}
                    alt={integration.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section id="privacy" className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.privacy.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.privacy.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-card border-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">
                {t.privacy.ferpa}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.privacy.ferpaDesc}
              </p>
            </Card>

            <Card className="p-6 text-center bg-card border-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">
                {t.privacy.coppa}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.privacy.coppaDesc}
              </p>
            </Card>

            <Card className="p-6 text-center bg-card border-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">
                {t.privacy.gdpr}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.privacy.gdprDesc}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-24 lg:py-32 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px] text-center">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance">
            {t.cta.title}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LocalizedLink href="/pricing">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 font-semibold"
              >
                {t.hero.signUpFree}
              </Button>
            </LocalizedLink>
            <VideoModalButton buttonClassName="text-lg px-10 py-7 font-semibold border-2 border-white/30 bg-transparent text-white hover:bg-accent/30 hover:border-accent" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-8">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Image
              src="/images/FloopLogo.svg"
              alt="Floop"
              width={120}
              height={45}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              {t.footer.poweredBy}{" "}
              <a
                href="https://humanrestorationproject.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {t.footer.hrp}
              </a>
              {t.footer.nonprofit}
            </p>
            <div className="flex items-center gap-6">
              <LocalizedLink
                href="/pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.header.pricing}
              </LocalizedLink>
              <LocalizedLink
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.footer.termsOfService}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
