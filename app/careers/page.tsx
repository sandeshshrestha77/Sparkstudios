import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function CareersPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Build your career with SparkStudios and help shape the digital future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Work With Us?</h2>
              <p className="text-muted-foreground md:text-lg">
                At SparkStudios, we're passionate about creating innovative digital solutions that make a difference. We
                believe in fostering a collaborative, inclusive, and creative work environment where talented
                individuals can thrive and grow professionally.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Innovative Projects</h4>
                    <p className="text-muted-foreground">
                      Work on cutting-edge projects for diverse clients across various industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Professional Growth</h4>
                    <p className="text-muted-foreground">
                      Continuous learning opportunities, mentorship, and career advancement paths.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Work-Life Balance</h4>
                    <p className="text-muted-foreground">
                      Flexible working arrangements and a focus on employee wellbeing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Collaborative Culture</h4>
                    <p className="text-muted-foreground">
                      A supportive team environment that values diverse perspectives and ideas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Team+Culture"
                fill
                alt="SparkStudios Team Culture"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Current Openings</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Explore our current job opportunities and find the perfect role for your skills and aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <JobCard
              title="Senior Web Developer"
              department="IT Solutions"
              location="Kathmandu, Nepal"
              type="Full-time"
              description="We're looking for an experienced web developer with strong skills in React, Next.js, and Node.js to join our development team."
            />
            <JobCard
              title="UX/UI Designer"
              department="Design Services"
              location="Kathmandu, Nepal"
              type="Full-time"
              description="Join our design team to create intuitive and engaging user experiences for web and mobile applications."
            />
            <JobCard
              title="Digital Marketing Specialist"
              department="Marketing Strategies"
              location="Kathmandu, Nepal"
              type="Full-time"
              description="Help our clients grow their online presence through effective digital marketing strategies and campaigns."
            />
            <JobCard
              title="Project Manager"
              department="Operations"
              location="Kathmandu, Nepal"
              type="Full-time"
              description="Lead project teams to deliver high-quality solutions on time and within budget while ensuring client satisfaction."
            />
            <JobCard
              title="Content Writer"
              department="Marketing Strategies"
              location="Kathmandu, Nepal"
              type="Part-time"
              description="Create compelling content for websites, blogs, social media, and other marketing materials."
            />
            <JobCard
              title="Mobile App Developer"
              department="IT Solutions"
              location="Remote"
              type="Full-time"
              description="Develop native and cross-platform mobile applications for iOS and Android using React Native and Flutter."
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-center">Our Hiring Process</h2>
            <div className="grid gap-6">
              <ProcessStep
                number="01"
                title="Application Review"
                description="We review your application and resume to assess your qualifications and experience."
              />
              <ProcessStep
                number="02"
                title="Initial Interview"
                description="A brief call to discuss your background, skills, and interest in the position."
              />
              <ProcessStep
                number="03"
                title="Technical Assessment"
                description="Depending on the role, you may be asked to complete a skills assessment or technical challenge."
              />
              <ProcessStep
                number="04"
                title="Team Interview"
                description="Meet with potential team members and managers to discuss the role in more detail."
              />
              <ProcessStep
                number="05"
                title="Final Decision"
                description="We'll make a decision and extend an offer to the selected candidate."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Don't See a Suitable Position?</h2>
            <p className="text-muted-foreground md:text-lg">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how
              you can contribute to SparkStudios.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Submit Your Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function JobCard({ title, department, location, type, description }) {
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
          <p>{description}</p>
        </div>
        <Button asChild>
          <Link href="/contact">
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center text-primary font-bold shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
