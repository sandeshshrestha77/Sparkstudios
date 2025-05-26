import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Code, PenTool, BarChart3 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-background z-10" />
        <div className="container relative z-20 py-24 md:py-32 lg:py-40">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Established in 2025
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Creative Solutions for the Digital Age
              </h1>
              <p className="text-xl text-muted-foreground">
                SparkStudios is a premier creative agency in Nepal, delivering innovative IT solutions, stunning
                designs, and effective marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link href="/services">
                    Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=800&text=Creative+Agency"
                fill
                alt="SparkStudios Creative Agency"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive Creative Solutions
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We offer a wide range of services to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-start space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">IT Solutions</h3>
                <p className="text-muted-foreground">
                  Custom websites, web applications, and software solutions built with the latest technologies to meet
                  your specific business needs.
                </p>
                <Button variant="ghost" className="group-hover:text-primary" asChild>
                  <Link href="/services/it-solutions">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-start space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <PenTool className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Design Services</h3>
                <p className="text-muted-foreground">
                  Stunning visual designs, branding, UI/UX, and graphic design services that help your business stand
                  out from the competition.
                </p>
                <Button variant="ghost" className="group-hover:text-primary" asChild>
                  <Link href="/services/design">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-start space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Marketing Strategies</h3>
                <p className="text-muted-foreground">
                  Effective digital marketing strategies, SEO, content marketing, and social media campaigns to grow
                  your online presence.
                </p>
                <Button variant="ghost" className="group-hover:text-primary" asChild>
                  <Link href="/services/marketing">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Take a look at some of our recent work and see how we've helped our clients achieve their goals.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <ProjectCard key={item} id={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2].map((item) => (
                  <ProjectCard key={item} id={item} category="Web Development" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="design">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[3, 4].map((item) => (
                  <ProjectCard key={item} id={item} category="Design" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[5, 6].map((item) => (
                  <ProjectCard key={item} id={item} category="Marketing" />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Creative Minds, Innovative Solutions
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Founded in 2025, SparkStudios has quickly established itself as a leading creative agency in Nepal. Our
                mission is to provide innovative solutions that help businesses thrive in the digital age.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Expert team of designers, developers, and marketers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Client-focused approach with personalized solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Commitment to quality and innovation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Proven track record of successful projects</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Our+Team"
                fill
                alt="SparkStudios Team"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic">
                  "SparkStudios transformed our online presence with a stunning website and effective marketing
                  strategy. Our customer engagement has increased by 150% since working with them."
                </p>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                    <span className="font-bold">RP</span>
                  </div>
                  <div>
                    <p className="font-medium">Rajesh Pradhan</p>
                    <p className="text-sm text-muted-foreground">CEO, Mountain Ventures</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic">
                  "The team at SparkStudios is incredibly talented and professional. They delivered our project on time
                  and exceeded our expectations. Highly recommended!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                    <span className="font-bold">SP</span>
                  </div>
                  <div>
                    <p className="font-medium">Sita Patel</p>
                    <p className="text-sm text-muted-foreground">Marketing Director, Himalayan Crafts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic">
                  "Working with SparkStudios was a game-changer for our business. Their creative approach and technical
                  expertise helped us launch a successful e-commerce platform."
                </p>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                    <span className="font-bold">AG</span>
                  </div>
                  <div>
                    <p className="font-medium">Anish Gurung</p>
                    <p className="text-sm text-muted-foreground">Founder, Nepal Organics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Our Blog</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Insights</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Stay updated with the latest trends, tips, and insights from our experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Blog+Post+1"
                  fill
                  alt="Blog Post"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">April 9, 2025</div>
                <h3 className="text-xl font-bold mb-2">10 Web Design Trends to Watch in 2025</h3>
                <p className="text-muted-foreground mb-4">
                  Explore the latest web design trends that are shaping the digital landscape in 2025.
                </p>
                <Button variant="ghost" asChild>
                  <Link href="/blog/web-design-trends">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Blog+Post+2"
                  fill
                  alt="Blog Post"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">April 2, 2025</div>
                <h3 className="text-xl font-bold mb-2">The Power of SEO for Small Businesses</h3>
                <p className="text-muted-foreground mb-4">
                  Learn how small businesses can leverage SEO to compete with larger companies in the digital space.
                </p>
                <Button variant="ghost" asChild>
                  <Link href="/blog/seo-for-small-businesses">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Blog+Post+3"
                  fill
                  alt="Blog Post"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">March 25, 2025</div>
                <h3 className="text-xl font-bold mb-2">How AI is Transforming Digital Marketing</h3>
                <p className="text-muted-foreground mb-4">
                  Discover how artificial intelligence is revolutionizing the way businesses approach digital marketing.
                </p>
                <Button variant="ghost" asChild>
                  <Link href="/blog/ai-in-digital-marketing">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Project?</h2>
                <p className="text-primary-foreground/90 md:text-xl">
                  Let's discuss how SparkStudios can help you achieve your business goals with our creative solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground" asChild>
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ProjectCard({ id, category = "Project" }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-64">
        <Image
          src={`/placeholder.svg?height=300&width=400&text=${category}+${id}`}
          fill
          alt={`Project ${id}`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">
          {category} Project {id}
        </h3>
        <p className="text-muted-foreground mb-4">
          A brief description of this project and the value it provided to the client.
        </p>
        <Button variant="ghost" asChild>
          <Link href={`/portfolio/project-${id}`}>
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
