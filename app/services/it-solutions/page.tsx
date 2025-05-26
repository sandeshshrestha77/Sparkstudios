import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Code, Database, Cloud, Smartphone, Server, Lock } from "lucide-react"

export default function ITSolutionsPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              IT Solutions
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Innovative IT Services</h1>
            <p className="text-xl text-muted-foreground">
              Custom technology solutions designed to drive your business forward.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cutting-Edge Technology Solutions</h2>
              <p className="text-muted-foreground md:text-lg">
                At SparkStudios, we deliver innovative IT solutions tailored to your specific business needs. Our team
                of expert developers and engineers work closely with you to understand your requirements and create
                custom solutions that drive results.
              </p>
              <p className="text-muted-foreground md:text-lg">
                From web and mobile applications to cloud services and database solutions, we leverage the latest
                technologies to help your business stay ahead in the digital landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Custom solutions tailored to your specific needs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Expert team of developers and engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Latest technologies and best practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Ongoing support and maintenance</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=IT+Solutions"
                fill
                alt="IT Solutions"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our IT Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We offer a comprehensive range of IT services to help your business succeed in the digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Code className="h-8 w-8" />}
              title="Web Development"
              description="Custom websites and web applications built with the latest technologies to meet your specific business needs."
              features={[
                "Responsive design for all devices",
                "User-friendly interfaces",
                "E-commerce solutions",
                "Content management systems",
              ]}
            />
            <ServiceCard
              icon={<Smartphone className="h-8 w-8" />}
              title="Mobile App Development"
              description="Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences."
              features={[
                "Native iOS and Android apps",
                "Cross-platform solutions",
                "User-centered design",
                "Ongoing maintenance and updates",
              ]}
            />
            <ServiceCard
              icon={<Database className="h-8 w-8" />}
              title="Database Solutions"
              description="Efficient database design, development, and management services to ensure your data is secure and accessible."
              features={[
                "Database design and architecture",
                "Data migration and integration",
                "Performance optimization",
                "Backup and recovery solutions",
              ]}
            />
            <ServiceCard
              icon={<Cloud className="h-8 w-8" />}
              title="Cloud Services"
              description="Cloud infrastructure setup, migration, and management to help you leverage the power of cloud computing."
              features={[
                "Cloud migration strategies",
                "Infrastructure as a Service (IaaS)",
                "Platform as a Service (PaaS)",
                "Software as a Service (SaaS)",
              ]}
            />
            <ServiceCard
              icon={<Server className="h-8 w-8" />}
              title="DevOps & Infrastructure"
              description="Streamline your development and operations processes with our DevOps and infrastructure services."
              features={[
                "Continuous integration and deployment",
                "Infrastructure automation",
                "Monitoring and logging",
                "Performance optimization",
              ]}
            />
            <ServiceCard
              icon={<Lock className="h-8 w-8" />}
              title="Cybersecurity"
              description="Protect your business from cyber threats with our comprehensive cybersecurity services."
              features={[
                "Security assessments and audits",
                "Vulnerability management",
                "Security monitoring",
                "Incident response planning",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Development Process</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We follow a structured approach to ensure the successful delivery of your IT projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessCard
              number="01"
              title="Discovery"
              description="We begin by understanding your business goals, requirements, and challenges to ensure our solutions align with your needs."
            />
            <ProcessCard
              number="02"
              title="Planning"
              description="We develop a detailed project plan, including timelines, milestones, and resource allocation to ensure smooth execution."
            />
            <ProcessCard
              number="03"
              title="Development"
              description="Our team of expert developers builds your solution using the latest technologies and best practices."
            />
            <ProcessCard
              number="04"
              title="Testing & Deployment"
              description="We thoroughly test and deploy your solution, ensuring it meets all requirements and performs optimally."
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Technologies"
                fill
                alt="Technologies"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technologies We Use</h2>
              <p className="text-muted-foreground md:text-lg">
                We leverage the latest technologies and frameworks to deliver high-quality solutions that meet your
                business needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Frontend</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>React & Next.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Angular</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Vue.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Tailwind CSS</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Backend</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Node.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Python</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Java</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>.NET</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Mobile</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>React Native</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Flutter</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Swift</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Kotlin</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Database</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>MongoDB</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>PostgreSQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>MySQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Firebase</span>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your IT Project?</h2>
            <p className="text-muted-foreground md:text-lg">
              Contact us today to discuss how our IT solutions can help your business grow and succeed in the digital
              landscape.
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
