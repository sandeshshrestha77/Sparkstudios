import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, PenTool, Palette, Layout, Film, Monitor, Layers, Figma } from "lucide-react"

export default function DesignServicesPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Design Services
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Creative Design Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Stunning visuals that capture your brand's essence and resonate with your audience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Design That Makes an Impact</h2>
              <p className="text-muted-foreground md:text-lg">
                At SparkStudios, our talented designers create stunning visuals that capture your brand's essence and
                resonate with your target audience. From branding to UI/UX design, we deliver creative solutions that
                make an impact.
              </p>
              <p className="text-muted-foreground md:text-lg">
                We believe that great design is not just about aesthetics—it's about solving problems and creating
                meaningful experiences that drive results for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Strategic approach to design that aligns with your business goals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Creative team with diverse skills and expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>User-centered design process</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Attention to detail and commitment to quality</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Design+Services"
                fill
                alt="Design Services"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Design Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We offer a comprehensive range of design services to help your business stand out from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Palette className="h-8 w-8" />}
              title="Branding & Identity"
              description="Create a strong, memorable brand identity that resonates with your target audience and sets you apart from competitors."
              features={[
                "Logo design and brand guidelines",
                "Visual identity development",
                "Brand strategy and positioning",
                "Brand collateral design",
              ]}
            />
            <ServiceCard
              icon={<Layout className="h-8 w-8" />}
              title="UI/UX Design"
              description="Design intuitive, engaging user interfaces and experiences that delight your users and achieve your business objectives."
              features={[
                "User research and personas",
                "Wireframing and prototyping",
                "Interface design",
                "Usability testing",
              ]}
            />
            <ServiceCard
              icon={<PenTool className="h-8 w-8" />}
              title="Graphic Design"
              description="Create visually appealing graphics for print and digital media that effectively communicate your message."
              features={[
                "Marketing materials design",
                "Social media graphics",
                "Infographics and data visualization",
                "Print design",
              ]}
            />
            <ServiceCard
              icon={<Film className="h-8 w-8" />}
              title="Motion Graphics"
              description="Bring your brand to life with animated graphics and visual effects for videos and presentations."
              features={[
                "Animated logos and brand elements",
                "Explainer videos",
                "Social media animations",
                "Video intros and outros",
              ]}
            />
            <ServiceCard
              icon={<Monitor className="h-8 w-8" />}
              title="Web Design"
              description="Create visually stunning, user-friendly websites that provide an exceptional user experience and drive conversions."
              features={[
                "Responsive website design",
                "Landing page design",
                "E-commerce design",
                "Design system creation",
              ]}
            />
            <ServiceCard
              icon={<Layers className="h-8 w-8" />}
              title="Illustration"
              description="Custom illustrations that add personality to your brand and help communicate complex ideas in a simple, engaging way."
              features={["Custom character design", "Digital illustrations", "Icon design", "Editorial illustrations"]}
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Design Process</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We follow a structured approach to ensure the successful delivery of your design projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessCard
              number="01"
              title="Discovery"
              description="We begin by understanding your brand, target audience, and project goals to ensure our designs align with your vision."
            />
            <ProcessCard
              number="02"
              title="Research & Strategy"
              description="We conduct research and develop a strategic approach to address your design challenges effectively."
            />
            <ProcessCard
              number="03"
              title="Creation"
              description="Our designers create concepts and iterate based on feedback until we achieve the perfect design solution."
            />
            <ProcessCard
              number="04"
              title="Implementation"
              description="We finalize the designs and provide all necessary files and guidelines for implementation."
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Design+Tools"
                fill
                alt="Design Tools"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tools & Technologies</h2>
              <p className="text-muted-foreground md:text-lg">
                We use industry-leading design tools and technologies to create high-quality designs that meet your
                business needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Design Tools</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <Figma className="h-4 w-4 text-primary" />
                      <span>Figma</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Adobe Creative Suite</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Sketch</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>InVision</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Prototyping</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Figma Prototyping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Adobe XD</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Framer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>ProtoPie</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">3D & Motion</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>After Effects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Cinema 4D</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Blender</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Lottie</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Figma</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Miro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Notion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Slack</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Transform Your Brand?</h2>
            <p className="text-muted-foreground md:text-lg">
              Contact us today to discuss how our design services can help your business stand out from the competition.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
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
