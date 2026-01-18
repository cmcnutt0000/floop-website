import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FeedbackDemo } from "@/components/feedback-demo";
import { FlooplesSection } from "@/components/flooples-section";
import { Header } from "@/components/header";

import { PeerReviewDemo } from "@/components/peer-review-demo";
import { SelfAssessmentDemo } from "@/components/self-assessment-demo";
import { StudentResponseDemo } from "@/components/student-response-demo";
import { TeacherStudentAnimation } from "@/components/teacher-student-animation";
import { VideoModalButton } from "@/components/video-modal";

export default function Home() {
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

      <section id="hero" className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          {/* Hero: Side-by-side layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
            {/* Left: Dictionary Definition */}
            <div>
              <div className="mb-4">
                <Image
                  src="/images/FloopLogo.svg"
                  alt="Floop"
                  width={450}
                  height={170}
                  className="h-36 lg:h-48 xl:h-60 w-auto"
                />
              </div>
              <p className="text-xl lg:text-2xl text-muted-foreground italic mb-3">
                /flo͞op/{" "}
                <span className="not-italic text-base font-medium ml-2 text-accent">
                  noun
                </span>
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                Short for <span className="font-bold text-accent">F</span>
                eedback <span className="font-bold text-accent">Loop</span>
              </p>
              <p className="text-lg text-muted-foreground">
                A continuous cycle where feedback drives improvement and growth.
              </p>
            </div>

            {/* Right: CTA and Description */}
            <div className="lg:pl-8">
              <p className="text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Drag and drop feedback directly onto student work. Teachers save
                hours. Students grow faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/pricing">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 font-semibold"
                  >
                    Sign up for free
                  </Button>
                </Link>
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

      <section id="three-ways" className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="max-w-3xl mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Three ways to transform how feedback flows
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
              Empower students to lead their own learning through teacher, peer,
              and self-driven feedback
            </p>
            <div className="mt-4 p-4 bg-purple-100 border border-accent/20 rounded-xl">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Try it yourself:</span>{" "}
                <span className="text-muted-foreground">
                  Click and interact with each demo below
                </span>
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Teacher to Student Card */}
            <Card className="group p-0 border-2 hover:border-accent transition-all duration-300 overflow-hidden cursor-pointer bg-card">
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
                    Teacher to Student
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Give meaningful feedback faster.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Drag-and-drop user-created, per-assignment comment banks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      See when students open and read feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Students can respond to feedback for further assistance
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Peer to Peer Card */}
            <Card className="group p-0 border-2 hover:border-accent transition-all duration-300 overflow-hidden cursor-pointer bg-card">
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
                    Peer to Peer
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Host guided peer review sessions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Scaffolded feedback prompts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      See feedback received & given at a glance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Build feedback literacy</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Self-Assessment Card */}
            <Card className="group p-0 border-2 hover:border-accent transition-all duration-300 overflow-hidden cursor-pointer bg-card">
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
                    Self-Assessment
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Let students guide themselves.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom reflection prompts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Ask for where help is most needed
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Develop metacognitive skills
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
              What Makes Floop Different
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Feedback leads to growth. See how Floop compares to traditional
              grading.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Floop Workflow */}
            <Card className="p-8 border-2 border-accent bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Floop Workflow
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-accent">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Turn in Assignment
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Students submit learning to assignment dropbox
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-accent">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Provide Feedback (Teacher/Peer)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Write + drag-and-drop comments directly on work
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-accent">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Iterate and Improve
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Students revise based on specific feedback, see if/when
                      feedback was read
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-accent">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      See Growth Over Time
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Track progress across revisions visually
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-accent">
                    5
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Assign a Grade Anytime
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Or just use comments, emojis, symbols — your choice
                    </p>
                  </div>
                </div>
              </div>
              {/* Image placeholders showing improvement */}
              <div className="mt-6 pt-6 border-t border-accent/20 space-y-4">
                <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded bg-rose-500/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-rose-500">
                        v1
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      First Draft
                    </span>
                  </div>
                  <div className="h-16 bg-gradient-to-r from-rose-100 to-rose-50 rounded flex items-center justify-center">
                    <p className="text-xs text-rose-600 font-medium">
                      Draft with feedback markers
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
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
                <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-emerald-500">
                        v3
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Final Version
                    </span>
                  </div>
                  <div className="h-16 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded flex items-center justify-center">
                    <p className="text-xs text-emerald-600 font-medium">
                      Polished work showing growth
                    </p>
                  </div>
                </div>
                <p className="text-accent font-semibold text-lg text-center pt-2">
                  Feedback leads to growth!
                </p>
              </div>
            </Card>

            {/* Typical LMS */}
            <Card className="p-8 border-2 border-border bg-card/50">
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
                  Typical LMS Grading
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-muted-foreground">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">
                      Turn in Assignment
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      Upload files through clunky interface
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-muted-foreground">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">
                      Write Grades in a Comment Box
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      Difficult to read and act on
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-muted-foreground">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">
                      Manage Version History
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      Cumbersome and confusing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-muted-foreground">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">
                      Compare Changes Over Time
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      Difficult to see what's different
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-muted-foreground">
                    5
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">
                      Peer Feedback?
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      No easy peer or teacher feedback features
                    </p>
                  </div>
                </div>
              </div>
              {/* Image placeholders showing limited change */}
              <div className="mt-6 pt-6 border-t border-border space-y-4">
                <div className="rounded-lg bg-muted/50 p-4 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded bg-muted flex items-center justify-center">
                      <span className="text-xs font-bold text-muted-foreground">
                        v1
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground/70">
                      Submitted
                    </span>
                  </div>
                  <div className="h-16 bg-gradient-to-r from-gray-100 to-gray-50 rounded flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">
                      Original submission
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <svg
                    className="w-6 h-6 text-muted-foreground/50"
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
                <div className="rounded-lg bg-muted/50 p-4 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded bg-muted flex items-center justify-center">
                      <span className="text-xs font-bold text-muted-foreground">
                        v1
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground/70">
                      Graded
                    </span>
                  </div>
                  <div className="h-16 bg-gradient-to-r from-gray-100 to-gray-50 rounded flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">
                      Same work + grade in gradebook
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground font-semibold text-lg text-center pt-2">
                  Grades without growth.
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
              Hear it from the teachers
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Real feedback from real classrooms
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
                  "I use Floop to do quick-checks along the way. It is fast! We
                  can make comments back and forth, kids are required to go
                  through comments to see the grade."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent text-xl">
                  F
                </div>
                <div>
                  <p className="font-bold text-foreground">Franco</p>
                  <p className="text-sm text-muted-foreground">
                    HS Physics & Engineering
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
                  "The peer review tool helps me identify the students I need to
                  work with, while others are still getting feedback from their
                  peers."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent text-xl">
                  S
                </div>
                <div>
                  <p className="font-bold text-foreground">Shelley</p>
                  <p className="text-sm text-muted-foreground">
                    6th Grade Science
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
                  "It surprised me that students are actually reading feedback
                  and using it. I'm seeing how much kids grow and it's happening
                  immediately."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent text-xl">
                  A
                </div>
                <div>
                  <p className="font-bold text-foreground">Adam</p>
                  <p className="text-sm text-muted-foreground">AP English</p>
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
              Works with your favorite tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Seamlessly integrates with the platforms you already use
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {[
              "Google Classroom",
              "Canvas",
              "Schoology",
              "Clever",
              "ClassLink",
            ].map((integration) => (
              <div
                key={integration}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors bg-white px-4 py-3 rounded-xl shadow-sm"
              >
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="font-medium">{integration}</span>
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
              Student privacy is our priority
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We meet the highest standards for student data protection and
              never sell or share personal information
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
                FERPA Compliant
              </h3>
              <p className="text-sm text-muted-foreground">
                Full compliance with federal student privacy laws
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
                COPPA Certified
              </h3>
              <p className="text-sm text-muted-foreground">
                Safe for students under 13 years old
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
              <h3 className="font-bold text-foreground mb-2">GDPR Ready</h3>
              <p className="text-sm text-muted-foreground">
                International data protection standards
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
            Ready to transform feedback in your classroom?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of educators who are saving time and helping students
            grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 font-semibold"
              >
                Sign up for free
              </Button>
            </Link>
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
