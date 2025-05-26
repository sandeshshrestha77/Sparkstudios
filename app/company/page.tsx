import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function CompanyPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Company
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About SparkStudios</h1>
            <p className="text-xl text-muted-foreground">
              A creative agency passionate about helping businesses succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="text-muted-foreground md:text-lg">
                Founded in 2025, SparkStudios began as a small team of passionate designers and developers with a shared
                vision: to create innovative digital solutions that help businesses thrive in an increasingly
                competitive landscape.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Based in Kathmandu, Nepal, we've quickly grown into a full-service creative agency, serving clients
                across various industries both locally and internationally. Our team combines technical expertise with
                creative thinking to deliver solutions that not only meet our clients' needs but exceed their
                expectations.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Today, SparkStudios is recognized as a leading creative agency in Nepal, known for our commitment to
                quality, innovation, and client satisfaction.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Our+Story"
                fill
                alt="SparkStudios Story"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Vision</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              At SparkStudios, our mission and vision guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with innovative digital solutions that drive growth, enhance brand presence, and
                  create meaningful connections with their audience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted creative agency in Nepal, recognized for our innovative approach, technical
                  excellence, and commitment to delivering exceptional results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Core Values</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              These values form the foundation of our company culture and guide our actions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              title="Innovation"
              description="We embrace new technologies and creative approaches to solve complex problems."
            />
            <ValueCard
              title="Excellence"
              description="We strive for excellence in everything we do, delivering high-quality solutions."
            />
            <ValueCard
              title="Integrity"
              description="We operate with honesty, transparency, and ethical business practices."
            />
            <ValueCard
              title="Collaboration"
              description="We work closely with our clients, treating them as partners in the creative process."
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Leadership Team</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Meet the talented individuals who lead SparkStudios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember
              name="Aarav Sharma"
              role="CEO & Founder"
              bio="With over 10 years of experience in the tech industry, Aarav leads our team with vision and expertise."
            />
            <TeamMember
              name="Priya Patel"
              role="CTO"
              bio="Priya oversees all technical aspects of our projects, ensuring we deliver cutting-edge solutions."
            />
            <TeamMember
              name="Rohan Thapa"
              role="Creative Director"
              bio="Rohan brings creative vision to life, leading our design team with innovation and artistic excellence."
            />
            <TeamMember
              name="Sita Gurung"
              role="Marketing Director"
              bio="Sita develops and implements effective marketing strategies that drive results for our clients."
            />
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/about">
                Meet Our Full Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Portfolio</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Take a look at some of our recent work and see how we've helped our clients achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioCard
              title="Mountain Ventures Website"
              category="Web Development"
              client="Mountain Ventures"
              description="A modern, responsive website for a leading adventure tourism company in Nepal."
            />
            <PortfolioCard
              title="Himalayan Crafts Branding"
              category="Design"
              client="Himalayan Crafts"
              description="Complete brand identity design for an artisanal handicraft business."
            />
            <PortfolioCard
              title="Nepal Organics Marketing Campaign"
              category="Marketing"
              client="Nepal Organics"
              description="Comprehensive digital marketing campaign that increased online sales by 200%."
            />
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/portfolio">
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest from Our Blog</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Stay updated with the latest insights, tips, and trends from our experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <BlogCard
              title="10 Web Design Trends to Watch in 2025"
              date="April 9, 2025"
              excerpt="Explore the latest web design trends that are shaping the digital landscape in 2025."
              slug="web-design-trends"
            />
            <BlogCard
              title="The Power of SEO for Small Businesses"
              date="April 2, 2025"
              excerpt="Learn how small businesses can leverage SEO to compete with larger companies in the digital space."
              slug="seo-for-small-businesses"
            />
            <BlogCard
              title="How AI is Transforming Digital Marketing"
              date="March 25, 2025"
              excerpt="Discover how artificial intelligence is revolutionizing the way businesses approach digital marketing."
              slug="ai-in-digital-marketing"
            />
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/blog">
                Read More Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We're always looking for talented individuals to join our team. Check out our current openings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <JobCard
              title="Senior Web Developer"
              department="IT Solutions"
              location="Kathmandu, Nepal"
              type="Full-time"
            />
            <JobCard title="UX/UI Designer" department="Design Services" location="Kathmandu, Nepal" type="Full-time" />
            <JobCard
              title="Digital Marketing Specialist"
              department="Marketing Strategies"
              location="Kathmandu, Nepal"
              type="Full-time"
            />
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/careers">
                View All Openings <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Work With Us?</h2>
              <p className="md:text-lg opacity-90">
                Let's discuss how SparkStudios can help you achieve your business goals with our creative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/placeholder.svg?height=250&width=250&text=SparkStudios"
                  fill
                  alt="SparkStudios Logo"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ValueCard({ title, description }) {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="rounded-full bg-primary/10 p-3 w-fit text-primary">
          <CheckCircle className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function TeamMember({ name, role, bio }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64">
        <Image src={`/placeholder.svg?height=250&width=250&text=${name}`} fill alt={name} className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-primary font-medium mb-2">{role}</p>
        <p className="text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  )
}

function PortfolioCard({ title, category, client, description }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-64">
        <Image
          src={`/placeholder.svg?height=300&width=400&text=${category}`}
          fill
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-1">Client: {client}</p>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="ghost" asChild>
          <Link href={`/portfolio/${title.toLowerCase().replace(/\s+/g, "-")}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function BlogCard({ title, date, excerpt, slug }) {
  return (
    <Card>
      <div className="relative h-48">
        <Image src={`/placeholder.svg?height=200&width=400&text=Blog+Post`} fill alt={title} className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-muted-foreground mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <Button variant="ghost" asChild>
          <Link href={`/blog/${slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function JobCard({ title, department, location, type }) {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-primary">{department}</p>
          </div>
          <div className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">{type}</div>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2">Location: {location}</p>
        </div>
        <Button asChild>
          <Link href="/careers/apply">
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
