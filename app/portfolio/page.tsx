import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our diverse range of projects and see how we've helped our clients achieve their goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                  <ProjectCard
                    key={id}
                    id={id}
                    title={`Project ${id}`}
                    category={id % 3 === 0 ? "Marketing" : id % 2 === 0 ? "Design" : "Web Development"}
                    client={`Client ${id}`}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 4, 7].map((id) => (
                  <ProjectCard
                    key={id}
                    id={id}
                    title={`Web Project ${id}`}
                    category="Web Development"
                    client={`Client ${id}`}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="design">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[2, 5, 8].map((id) => (
                  <ProjectCard
                    key={id}
                    id={id}
                    title={`Design Project ${id}`}
                    category="Design"
                    client={`Client ${id}`}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[3, 6, 9].map((id) => (
                  <ProjectCard
                    key={id}
                    id={id}
                    title={`Marketing Project ${id}`}
                    category="Marketing"
                    client={`Client ${id}`}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Work Together</h2>
            <p className="text-muted-foreground md:text-lg">
              Ready to start your next project? Contact us today to discuss how we can help you achieve your goals.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function ProjectCard({ id, title, category, client }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-64">
        <Image
          src={`/placeholder.svg?height=300&width=400&text=${category}+${id}`}
          fill
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-1">Client: {client}</p>
        <p className="text-muted-foreground mb-4">
          A comprehensive description of this project and the value it provided to the client.
        </p>
        <Button variant="ghost" asChild>
          <Link href={`/portfolio/project-${id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
