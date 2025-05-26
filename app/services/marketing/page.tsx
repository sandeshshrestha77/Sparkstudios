import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, BarChart3, Search, Megaphone, LineChart, Mail, Globe } from "lucide-react"

export default function MarketingStrategiesPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Marketing Strategies
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Effective Digital Marketing</h1>
            <p className="text-xl text-muted-foreground">
              Data-driven strategies that drive traffic, generate leads, and increase conversions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Marketing That Delivers Results</h2>
              <p className="text-muted-foreground md:text-lg">
                At SparkStudios, our marketing experts develop and implement strategies that drive traffic, generate
                leads, and increase conversions. We help you reach your target audience and achieve your business goals
                through data-driven marketing approaches.
              </p>
              <p className="text-muted-foreground md:text-lg">
                We understand that every business is unique, which is why we create customized marketing strategies
                tailored to your specific needs, goals, and target audience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Data-driven approach to marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Customized strategies for your business</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Focus on measurable results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Continuous optimization and improvement</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Marketing+Strategies"
                fill
                alt="Marketing Strategies"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Marketing Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We offer a comprehensive range of marketing services to help your business grow and succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Search className="h-8 w-8" />}
              title="SEO & SEM"
              description="Improve your website's visibility in search engines and drive targeted traffic to your business."
              features={[
                "Keyword research and strategy",
                "On-page and off-page optimization",
                "Technical SEO",
                "Paid search campaigns",
              ]}
            />
            <ServiceCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Content Marketing"
              description="Create and distribute valuable, relevant content to attract and engage your target audience."
              features={[
                "Content strategy development",
                "Blog writing and management",
                "Ebook and whitepaper creation",
                "Content distribution",
              ]}
            />
            <ServiceCard
              icon={<Megaphone className="h-8 w-8" />}
              title="Social Media Marketing"
              description="Build your brand presence and engage with your audience on social media platforms."
              features={[
                "Social media strategy",
                "Content creation and curation",
                "Community management",
                "Paid social campaigns",
              ]}
            />
            <ServiceCard
              icon={<Mail className="h-8 w-8" />}
              title="Email Marketing"
              description="Connect with your audience directly through personalized email campaigns that drive engagement and conversions."
              features={[
                "Email strategy and planning",
                "Campaign creation and execution",
                "Automation workflows",
                "Performance analysis",
              ]}
            />
            <ServiceCard
              icon={<LineChart className="h-8 w-8" />}
              title="Analytics & Reporting"
              description="Gain valuable insights into your marketing performance and make data-driven decisions."
              features={[
                "Custom dashboard setup",
                "Performance tracking",
                "Conversion optimization",
                "Regular reporting and insights",
              ]}
            />
            <ServiceCard
              icon={<Globe className="h-8 w-8" />}
              title="Digital Strategy"
              description="Develop a comprehensive digital strategy that aligns with your business goals and drives growth."
              features={["Digital marketing audit", "Competitive analysis", "Channel strategy", "Budget allocation"]}
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Marketing Approach</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We follow a structured approach to ensure the successful delivery of your marketing campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessCard
              number="01"
              title="Research & Analysis"
              description="We analyze your business, competitors, and target audience to develop effective marketing strategies."
            />
            <ProcessCard
              number="02"
              title="Strategy Development"
              description="We create a customized marketing strategy aligned with your business goals and target audience."
            />
            <ProcessCard
              number="03"
              title="Implementation"
              description="We execute the strategy across relevant channels, creating and distributing content that resonates with your audience."
            />
            <ProcessCard
              number="04"
              title="Monitoring & Optimization"
              description="We continuously monitor performance, analyze results, and optimize campaigns for maximum ROI."
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Marketing+Tools"
                fill
                alt="Marketing Tools"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tools & Technologies</h2>
              <p className="text-muted-foreground md:text-lg">
                We leverage industry-leading marketing tools and technologies to deliver effective campaigns and measure
                results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Analytics</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Google Analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Hotjar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>SEMrush</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Ahrefs</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Advertising</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Google Ads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Meta Ads Manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>LinkedIn Ads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>TikTok Ads</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Email & Automation</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Mailchimp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>HubSpot</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>ActiveCampaign</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Klaviyo</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Social Media</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Hootsuite</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Buffer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Sprout Social</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Canva</span>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Grow Your Business?</h2>
            <p className="text-muted-foreground md:text-lg">
              Contact us today to discuss how our marketing strategies can help your business reach its target audience
              and achieve its goals.
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
