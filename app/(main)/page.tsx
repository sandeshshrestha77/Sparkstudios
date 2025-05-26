import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Code, Smartphone, PenTool, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Innovative Solutions for Your Digital Success
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  SparkStudios is a creative agency based in Nepal, delivering cutting-edge IT services, design
                  solutions, and marketing strategies since 2025.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/services">
                    Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Hero Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              priority
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Solutions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a wide range of services to help your business grow and succeed in the digital landscape.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Code className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">IT Solutions</h3>
                <p className="text-muted-foreground">
                  Custom websites, mobile apps, and software solutions built with the latest technologies to meet your
                  specific business needs.
                </p>
                <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                  <Link href="/services/it-solutions">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <PenTool className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">Design Services</h3>
                <p className="text-muted-foreground">
                  Creative design solutions including branding, UI/UX design, graphic design, and motion graphics that
                  capture your brand's essence.
                </p>
                <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                  <Link href="/services/design">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <BarChart3 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">Marketing Strategies</h3>
                <p className="text-muted-foreground">
                  Effective digital marketing services including SEO, content marketing, social media, and analytics to
                  help you reach your audience.
                </p>
                <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                  <Link href="/services/marketing">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take a look at some of our recent work and see how we've helped our clients achieve their goals.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="web">Web</TabsTrigger>
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Project+${item}`}
                          width={400}
                          height={300}
                          alt={`Project ${item}`}
                          className="w-full object-cover transition-all hover:scale-105 aspect-video"
                        />
                        <div className="p-4">
                          <h3 className="font-bold">Project {item}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item % 3 === 0 ? "Marketing" : item % 2 === 0 ? "Design" : "Web Development"}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="web" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 4].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Web+Project+${item}`}
                          width={400}
                          height={300}
                          alt={`Web Project ${item}`}
                          className="w-full object-cover transition-all hover:scale-105 aspect-video"
                        />
                        <div className="p-4">
                          <h3 className="font-bold">Web Project {item}</h3>
                          <p className="text-sm text-muted-foreground">Web Development</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="design" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[2, 5].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Design+Project+${item}`}
                          width={400}
                          height={300}
                          alt={`Design Project ${item}`}
                          className="w-full object-cover transition-all hover:scale-105 aspect-video"
                        />
                        <div className="p-4">
                          <h3 className="font-bold">Design Project {item}</h3>
                          <p className="text-sm text-muted-foreground">Design</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="marketing" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[3, 6].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Marketing+Project+${item}`}
                          width={400}
                          height={300}
                          alt={`Marketing Project ${item}`}
                          className="w-full object-cover transition-all hover:scale-105 aspect-video"
                        />
                        <div className="p-4">
                          <h3 className="font-bold">Marketing Project {item}</h3>
                          <p className="text-sm text-muted-foreground">Marketing</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Founded in 2025, SparkStudios has quickly established itself as a leading creative agency in Nepal. Our
                mission is to provide innovative solutions that help businesses thrive in the digital age.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed">
                We believe in combining technical expertise with creative thinking to deliver solutions that not only
                meet our clients' needs but exceed their expectations.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Values</h3>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Innovation: We embrace new technologies and creative approaches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Quality: We deliver excellence in everything we do</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Collaboration: We work closely with our clients as partners</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Integrity: We operate with honesty and transparency</span>
                  </li>
                </ul>
              </div>
              <div className="flex">
                <Button asChild>
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Our+Team"
                width={600}
                height={400}
                alt="SparkStudios Team"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Image
                      src="/placeholder.svg?height=100&width=100&text=CEO"
                      width={80}
                      height={80}
                      alt="CEO"
                      className="rounded-full border-4 border-background"
                    />
                    <h4 className="font-bold mt-2">Aarav Sharma</h4>
                    <p className="text-sm text-muted-foreground">CEO & Founder</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Image
                      src="/placeholder.svg?height=100&width=100&text=CTO"
                      width={80}
                      height={80}
                      alt="CTO"
                      className="rounded-full border-4 border-background"
                    />
                    <h4 className="font-bold mt-2">Priya Patel</h4>
                    <p className="text-sm text-muted-foreground">CTO</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Latest Insights
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">From Our Blog</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest trends, tips, and insights from our experts.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Blog+Post+${item}`}
                    width={400}
                    height={200}
                    alt={`Blog Post ${item}`}
                    className="w-full object-cover aspect-[2/1]"
                  />
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">April {item + 6}, 2025</p>
                    <h3 className="font-bold text-xl mb-2">
                      {item === 1
                        ? "10 Web Design Trends to Watch in 2025"
                        : item === 2
                          ? "The Power of SEO for Small Businesses"
                          : "How AI is Transforming Digital Marketing"}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {item === 1
                        ? "Explore the latest web design trends that are shaping the digital landscape in 2025."
                        : item === 2
                          ? "Learn how small businesses can leverage SEO to compete with larger companies."
                          : "Discover how artificial intelligence is revolutionizing digital marketing strategies."}
                    </p>
                    <Button variant="ghost" asChild>
                      <Link href="/blog">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out to us using the contact form or through our contact information below.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span>+977 1 234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@sparkstudios.np</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Thamel, Kathmandu, Nepal</span>
                </div>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
