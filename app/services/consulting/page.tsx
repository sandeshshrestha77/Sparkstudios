import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Lightbulb, TrendingUp, Target, Users, BarChart3, Briefcase } from "lucide-react"

export default function ConsultingPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Consulting Services
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Strategic Business Consulting</h1>
            <p className="text-xl text-muted-foreground">
              Expert guidance to help your business navigate challenges and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transform Your Business</h2>
              <p className="text-muted-foreground md:text-lg">
                At SparkStudios, our consulting services are designed to help businesses of all sizes overcome
                challenges, identify opportunities, and achieve their strategic objectives. Our team of experienced
                consultants brings deep industry knowledge and practical expertise to every engagement.
              </p>
              <p className="text-muted-foreground md:text-lg">
                We take a collaborative approach, working closely with your team to understand your unique needs and
                develop tailored solutions that drive measurable results. Whether you're looking to optimize operations,
                accelerate growth, or navigate digital transformation, we're here to guide you every step of the way.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Experienced consultants with industry expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Tailored solutions for your specific challenges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Data-driven approach to decision making</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Focus on measurable outcomes and ROI</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Consulting+Services"
                fill
                alt="Consulting Services"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Consulting Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We offer a comprehensive range of consulting services to address your most pressing business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Lightbulb className="h-8 w-8" />}
              title="Business Strategy"
              description="Develop a clear vision and roadmap to achieve your business objectives and stay ahead of the competition."
              features={[
                "Market analysis and competitive intelligence",
                "Strategic planning and roadmap development",
                "Business model innovation",
                "Growth strategy and market expansion",
              ]}
            />
            <ServiceCard
              icon={<TrendingUp className="h-8 w-8" />}
              title="Digital Transformation"
              description="Navigate the digital landscape and leverage technology to transform your business operations and customer experiences."
              features={[
                "Digital maturity assessment",
                "Technology roadmap development",
                "Process automation and optimization",
                "Change management and adoption",
              ]}
            />
            <ServiceCard
              icon={<Target className="h-8 w-8" />}
              title="Operations Consulting"
              description="Optimize your business operations to improve efficiency, reduce costs, and enhance overall performance."
              features={[
                "Process mapping and optimization",
                "Supply chain management",
                "Quality management systems",
                "Cost reduction strategies",
              ]}
            />
            <ServiceCard
              icon={<Users className="h-8 w-8" />}
              title="Organizational Development"
              description="Build a high-performing organization with the right structure, talent, and culture to achieve your business goals."
              features={[
                "Organizational design and restructuring",
                "Talent management and development",
                "Leadership coaching and development",
                "Culture transformation",
              ]}
            />
            <ServiceCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Marketing Consulting"
              description="Develop effective marketing strategies that drive brand awareness, customer acquisition, and revenue growth."
              features={[
                "Marketing strategy development",
                "Brand positioning and messaging",
                "Customer journey mapping",
                "Marketing performance optimization",
              ]}
            />
            <ServiceCard
              icon={<Briefcase className="h-8 w-8" />}
              title="IT Consulting"
              description="Align your technology investments with your business objectives to drive innovation and competitive advantage."
              features={[
                "IT strategy and roadmap development",
                "Technology assessment and selection",
                "IT governance and risk management",
                "Cloud strategy and migration",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Consulting Approach</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We follow a structured approach to ensure the successful delivery of our consulting engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessCard
              number="01"
              title="Discovery"
              description="We begin by understanding your business, challenges, and objectives through in-depth discussions and data analysis."
            />
            <ProcessCard
              number="02"
              title="Assessment"
              description="We conduct a thorough assessment of your current state, identifying strengths, weaknesses, and opportunities for improvement."
            />
            <ProcessCard
              number="03"
              title="Solution Design"
              description="We develop tailored solutions and recommendations based on our findings, aligned with your business objectives."
            />
            <ProcessCard
              number="04"
              title="Implementation"
              description="We work with you to implement the recommended solutions, providing guidance and support throughout the process."
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose SparkStudios Consulting?</h2>
              <p className="text-muted-foreground md:text-lg">
                Our consulting services are designed to deliver tangible results and long-term value for your business.
                Here's what sets us apart:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Industry Expertise</h4>
                    <p className="text-muted-foreground">
                      Our consultants bring deep industry knowledge and practical experience to every engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Tailored Approach</h4>
                    <p className="text-muted-foreground">
                      We develop customized solutions that address your specific challenges and objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Results-Oriented</h4>
                    <p className="text-muted-foreground">
                      We focus on delivering measurable outcomes and tangible value for your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Collaborative Partnership</h4>
                    <p className="text-muted-foreground">
                      We work closely with your team, transferring knowledge and building capabilities along the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Why+Choose+Us"
                fill
                alt="Why Choose SparkStudios Consulting"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground md:text-lg">
              Contact us today to discuss how our consulting services can help your business overcome challenges and
              achieve sustainable growth.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ icon, title, description, features }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 space-y-4">
        <div className="rounded-full bg-primary/10 p-3 w-fit text-primary">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="ghost" asChild>
          <Link href="/contact">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function ProcessCard({ number, title, description }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 space-y-4">
        <div className="rounded-full bg-primary/10 p-3 w-fit text-primary font-bold text-xl">{number}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
