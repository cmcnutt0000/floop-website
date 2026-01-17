import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { FeedbackDemo } from "@/components/feedback-demo"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-8 py-5 flex items-center justify-between max-w-[1400px]">
          <div className="flex items-center">
            <Image src="/images/floop-logo.png" alt="Floop" width={140} height={48} className="h-12 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-foreground font-semibold">
              Log in
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">Sign up</Button>
          </div>
        </div>
      </nav>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 text-balance leading-[1.1]">
              Feedback that moves learning <span className="text-accent">forward</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
              Drag and drop feedback directly onto student work. Teachers save hours. Students grow faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 font-semibold"
              >
                Sign up for free
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 font-semibold border-2 bg-transparent">
                Get in touch
              </Button>
            </div>
          </div>

          {/* Interactive Demo Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Interactive Demo — Try it now
              </span>
            </div>
            <FeedbackDemo />
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-border bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted by teachers in 90% of U.S. schools and 150+ countries
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-accent mb-2">4x</div>
              <p className="text-muted-foreground font-medium">Faster Feedback</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-accent mb-2">90%</div>
              <p className="text-muted-foreground font-medium">Teacher Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-accent mb-2">20%</div>
              <p className="text-muted-foreground font-medium">Improved Pass Rates</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-accent mb-2">150+</div>
              <p className="text-muted-foreground font-medium">Countries</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="max-w-3xl mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Three ways to transform how feedback flows
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
              Empower students to lead their own learning through teacher, peer, and self-driven feedback
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Teacher to Student Card */}
            <Card className="group p-0 border-2 hover:border-accent transition-all duration-300 overflow-hidden cursor-pointer bg-card">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center border-b border-border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Rive Animation</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">Teacher to Student</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Give feedback 4x faster with drag-and-drop comment banks and anchored comments on student work
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Drag-and-drop comment banks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Anchored feedback on work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Efficient bulk actions</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Peer to Peer Card */}
            <Card className="group p-0 border-2 hover:border-accent transition-all duration-300 overflow-hidden cursor-pointer bg-card">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-b border-border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Rive Animation</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">Peer to Peer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Students give meaningful feedback through guided peer review with scaffolded prompts
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Guided peer review process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Scaffolded feedback prompts</span>
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
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center border-b border-border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Rive Animation</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">Self-Assessment</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Custom prompts encourage reflection and metacognition as part of every assignment
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom reflection prompts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Required before viewing grades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Develop metacognitive skills</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                Get started in minutes, not hours
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Designed by educators, informed by research, perfected in real classrooms. No training required.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-xl text-foreground mb-2">Create an assignment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Students join with a simple code and submit work instantly
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-xl text-foreground mb-2">Give feedback fast</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Use comment banks and anchored feedback to respond 4x faster
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-xl text-foreground mb-2">Students take ownership</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Real-time feedback drives immediate growth you can measure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow Animation */}
            <div className="relative">
              <div className="aspect-square bg-background rounded-3xl flex items-center justify-center border-2 border-border shadow-xl">
                <div className="text-center p-12">
                  <div className="w-32 h-32 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-16 h-16 text-accent" />
                    </div>
                  </div>
                  <p className="text-muted-foreground font-semibold text-lg">Workflow Rive Animation</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">Student feedback journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="max-w-3xl mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Hear it from the teachers</h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">Real feedback from real classrooms</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 bg-card border-2 hover:border-accent/50 transition-colors">
              <div className="mb-6">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8">
                  "I use Floop to do quick-checks along the way. It is fast! We can make comments back and forth, kids
                  are required to go through comments to see the grade."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent text-xl">
                  F
                </div>
                <div>
                  <p className="font-bold text-foreground">Franco</p>
                  <p className="text-sm text-muted-foreground">HS Physics & Engineering</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 hover:border-accent/50 transition-colors">
              <div className="mb-6">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8">
                  "The peer review tool helps me identify the students I need to work with, while others are still
                  getting feedback from their peers."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent text-xl">
                  S
                </div>
                <div>
                  <p className="font-bold text-foreground">Shelley</p>
                  <p className="text-sm text-muted-foreground">6th Grade Science</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 hover:border-accent/50 transition-colors">
              <div className="mb-6">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8">
                  "It surprised me that students are actually reading feedback and using it. I'm seeing how much kids
                  grow and it's happening immediately."
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
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Works with your favorite tools</h2>
            <p className="text-lg text-muted-foreground">Seamlessly integrates with the platforms you already use</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {["Google Classroom", "Canvas", "Schoology", "Clever", "ClassLink"].map((integration) => (
              <div
                key={integration}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Student privacy is our priority</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We meet the highest standards for student data protection and never sell or share personal information
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-card border-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">FERPA Compliant</h3>
              <p className="text-sm text-muted-foreground">Full compliance with federal student privacy laws</p>
            </Card>

            <Card className="p-6 text-center bg-card border-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">COPPA Certified</h3>
              <p className="text-sm text-muted-foreground">Safe for students under 13 years old</p>
            </Card>

            <Card className="p-6 text-center bg-card border-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">GDPR Ready</h3>
              <p className="text-sm text-muted-foreground">International data protection standards</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px] text-center">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance">
            Ready to transform feedback in your classroom?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of educators who are saving time and helping students grow
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
              Schedule a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-1">
              <Image src="/images/floop-logo.png" alt="Floop" width={120} height={40} className="h-10 w-auto mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Feedback-driven learning for every classroom
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Research
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Floop Education. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
