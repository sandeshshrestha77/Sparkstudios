import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About SparkStudios</h1>
            <p className="text-xl text-muted-foreground">
              We're a creative agency passionate about helping businesses succeed in the digital world.
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              At SparkStudios, our mission and values guide everything we do.
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

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Core Values</h3>
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
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Our talented team of professionals is the heart of SparkStudios.
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
              role="Marketing Manager"
              bio="Sita develops and implements effective marketing strategies that drive results for our clients."
            />
            <TeamMember
              name="Anish Rai"
              role="Lead Developer"
              bio="Anish leads our development team, turning complex requirements into elegant technical solutions."
            />
            <TeamMember
              name="Maya Shrestha"
              role="UX/UI Designer"
              bio="Maya creates intuitive and engaging user experiences that delight users and achieve business goals."
            />
            <TeamMember
              name="Kiran Joshi"
              role="Project Manager"
              bio="Kiran ensures our projects are delivered on time, within budget, and to the highest standards."
            />
            <TeamMember
              name="Nisha Tamang"
              role="Content Strategist"
              bio="Nisha develops content strategies that tell compelling stories and engage target audiences."
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Approach</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We follow a collaborative, client-centered approach to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="rounded-full bg-primary/10 p-3 w-fit text-primary">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold">Discovery</h3>
                <p className="text-muted-foreground">
                  We begin by understanding your business, goals, target audience, and project requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="rounded-full bg-primary/10 p-3 w-fit text-primary">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold">Strategy</h3>
                <p className="text-muted-foreground">
                  We develop a comprehensive strategy tailored to your specific needs and objectives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="rounded-full bg-primary/10 p-3 w-fit text-primary">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold">Creation</h3>
                <p className="text-muted-foreground">
                  Our team brings the strategy to life, creating innovative solutions that meet your needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="rounded-full bg-primary/10 p-3 w-fit text-primary">
                  <span className="text-xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold">Optimization</h3>
                <p className="text-muted-foreground">
                  We continuously monitor, test, and refine our solutions to ensure optimal performance and results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Company+Culture"
                fill
                alt="SparkStudios Culture"
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Company Culture</h2>
              <p className="text-muted-foreground md:text-lg">
                At SparkStudios, we foster a culture of creativity, collaboration, and continuous learning. We believe
                that happy employees create better work, which is why we prioritize work-life balance and professional
                growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Collaborative Environment</h4>
                    <p className="text-muted-foreground">
                      We work together across disciplines, sharing knowledge and expertise to create the best solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Continuous Learning</h4>
                    <p className="text-muted-foreground">
                      We encourage our team to stay updated with the latest trends and technologies through regular
                      training and development opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Work-Life Balance</h4>
                    <p className="text-muted-foreground">
                      We believe in the importance of balance, offering flexible working arrangements and promoting
                      wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
            <p className="text-muted-foreground md:text-lg">
              We're always looking for talented individuals to join our team. Check out our current openings or send us
              your resume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/careers">View Open Positions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
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
