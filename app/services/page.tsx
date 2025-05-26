import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Code,
  PenTool,
  BarChart3,
  Smartphone,
  Database,
  Cloud,
  Search,
  LineChart,
  Palette,
  Layout,
  Film,
  Megaphone,
  Lightbulb,
  TrendingUp,
  Target,
  Briefcase,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              We offer a comprehensive range of creative services to help your business succeed in the digital
              landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12">
            <div id="it-solutions">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    IT Solutions
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Innovative IT Services</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Our team of expert developers and engineers create custom IT solutions tailored to your specific
                    business needs. From web applications to software development, we deliver high-quality solutions
                    that drive results.
                  </p>
                  <Button asChild>
                    <Link href="/services/it-solutions">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=IT+Solutions"
                    fill
                    alt="IT Solutions"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <ServiceCard
                  icon={<Code className="h-8 w-8" />}
                  title="Web Development"
                  description="Custom websites and web applications built with the latest technologies."
                  link="/services/it-solutions"
                />
                <ServiceCard
                  icon={<Smartphone className="h-8 w-8" />}
                  title="Mobile App Development"
                  description="Native and cross-platform mobile applications for iOS and Android."
                  link="/services/it-solutions"
                />
                <ServiceCard
                  icon={<Database className="h-8 w-8" />}
                  title="Database Solutions"
                  description="Efficient database design, development, and management services."
                  link="/services/it-solutions"
                />
                <ServiceCard
                  icon={<Cloud className="h-8 w-8" />}
                  title="Cloud Services"
                  description="Cloud infrastructure setup, migration, and management."
                  link="/services/it-solutions"
                />
              </div>
            </div>

            <div id="design-services" className="border-t pt-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Design+Services"
                    fill
                    alt="Design Services"
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Design Services
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Creative Design Solutions</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Our talented designers create stunning visuals that capture your brand's essence and resonate with
                    your target audience. From branding to UI/UX design, we deliver creative solutions that make an
                    impact.
                  </p>
                  <Button asChild>
                    <Link href="/services/design">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <ServiceCard
                  icon={<Palette className="h-8 w-8" />}
                  title="Branding & Identity"
                  description="Logo design, brand guidelines, and visual identity development."
                  link="/services/design"
                />
                <ServiceCard
                  icon={<Layout className="h-8 w-8" />}
                  title="UI/UX Design"
                  description="User-centered interface and experience design for digital products."
                  link="/services/design"
                />
                <ServiceCard
                  icon={<PenTool className="h-8 w-8" />}
                  title="Graphic Design"
                  description="Print and digital graphic design for various marketing materials."
                  link="/services/design"
                />
                <ServiceCard
                  icon={<Film className="h-8 w-8" />}
                  title="Motion Graphics"
                  description="Animated graphics and visual effects for videos and presentations."
                  link="/services/design"
                />
              </div>
            </div>

            <div id="marketing-strategies" className="border-t pt-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Marketing Strategies
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Effective Digital Marketing</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Our marketing experts develop and implement strategies that drive traffic, generate leads, and
                    increase conversions. We help you reach your target audience and achieve your business goals.
                  </p>
                  <Button asChild>
                    <Link href="/services/marketing">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Marketing+Strategies"
                    fill
                    alt="Marketing Strategies"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <ServiceCard
                  icon={<Search className="h-8 w-8" />}
                  title="SEO & SEM"
                  description="Search engine optimization and marketing to improve visibility."
                  link="/services/marketing"
                />
                <ServiceCard
                  icon={<BarChart3 className="h-8 w-8" />}
                  title="Content Marketing"
                  description="Strategic content creation and distribution to attract customers."
                  link="/services/marketing"
                />
                <ServiceCard
                  icon={<Megaphone className="h-8 w-8" />}
                  title="Social Media Marketing"
                  description="Social media strategy, content creation, and campaign management."
                  link="/services/marketing"
                />
                <ServiceCard
                  icon={<LineChart className="h-8 w-8" />}
                  title="Analytics & Reporting"
                  description="Data analysis and reporting to measure marketing performance."
                  link="/services/marketing"
                />
              </div>
            </div>

            <div id="consulting" className="border-t pt-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Consulting+Services"
                    fill
                    alt="Consulting Services"
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Consulting Services
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Strategic Business Consulting</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Our consulting services provide expert guidance to help your business navigate challenges and
                    achieve sustainable growth. We work closely with you to develop tailored solutions that drive
                    measurable results.
                  </p>
                  <Button asChild>
                    <Link href="/services/consulting">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <ServiceCard
                  icon={<Lightbulb className="h-8 w-8" />}
                  title="Business Strategy"
                  description="Strategic planning and roadmap development to achieve business objectives."
                  link="/services/consulting"
                />
                <ServiceCard
                  icon={<TrendingUp className="h-8 w-8" />}
                  title="Digital Transformation"
                  description="Navigate the digital landscape and leverage technology to transform your business."
                  link="/services/consulting"
                />
                <ServiceCard
                  icon={<Target className="h-8 w-8" />}
                  title="Operations Consulting"
                  description="Optimize business operations to improve efficiency and reduce costs."
                  link="/services/consulting"
                />
                <ServiceCard
                  icon={<Briefcase className="h-8 w-8" />}
                  title="IT Consulting"
                  description="Align technology investments with business objectives to drive innovation."
                  link="/services/consulting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground md:text-lg">
              Contact us today to discuss how we can help you achieve your business goals with our comprehensive
              services.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ icon, title, description, link }) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="p-6 space-y-4">
        <div className="rounded-full bg-primary/10 p-3 w-fit text-primary">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="ghost" className="p-0" asChild>
          <Link href={link}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
