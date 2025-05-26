import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights, tips, and trends from our experts to help you stay ahead in the digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Featured+Blog+Post"
                    fill
                    alt="Featured Blog Post"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 lg:p-8">
                  <div className="text-sm text-muted-foreground mb-2">April 9, 2025</div>
                  <h2 className="text-2xl font-bold mb-2">10 Web Design Trends to Watch in 2025</h2>
                  <p className="text-muted-foreground mb-4">
                    Explore the latest web design trends that are shaping the digital landscape in 2025. From immersive
                    3D experiences to sustainable design practices, these trends are transforming how we interact with
                    websites.
                  </p>
                  <Button asChild>
                    <Link href="/blog/web-design-trends">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="grid gap-6">
                <BlogPostCard
                  date="April 2, 2025"
                  title="The Power of SEO for Small Businesses"
                  excerpt="Learn how small businesses can leverage SEO to compete with larger companies in the digital space."
                  slug="seo-for-small-businesses"
                />
                <BlogPostCard
                  date="March 25, 2025"
                  title="How AI is Transforming Digital Marketing"
                  excerpt="Discover how artificial intelligence is revolutionizing the way businesses approach digital marketing."
                  slug="ai-in-digital-marketing"
                />
                <BlogPostCard
                  date="March 18, 2025"
                  title="The Importance of Mobile-First Design"
                  excerpt="With mobile traffic continuing to rise, learn why a mobile-first approach is essential for your website."
                  slug="mobile-first-design"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogPostCard
                date="March 10, 2025"
                title="Building a Strong Brand Identity"
                excerpt="Explore the key elements of creating a memorable brand identity that resonates with your audience."
                slug="brand-identity"
              />
              <BlogPostCard
                date="March 3, 2025"
                title="The Future of E-commerce"
                excerpt="From AR shopping experiences to voice commerce, discover the trends shaping the future of online retail."
                slug="future-of-ecommerce"
              />
              <BlogPostCard
                date="February 25, 2025"
                title="Effective Content Marketing Strategies"
                excerpt="Learn how to create and distribute valuable content that attracts and engages your target audience."
                slug="content-marketing-strategies"
              />
              <BlogPostCard
                date="February 18, 2025"
                title="Optimizing Website Performance"
                excerpt="Discover techniques to improve your website's speed, responsiveness, and overall user experience."
                slug="website-performance"
              />
              <BlogPostCard
                date="February 10, 2025"
                title="Social Media Trends for 2025"
                excerpt="Stay ahead of the curve with these emerging social media trends that will dominate in 2025."
                slug="social-media-trends"
              />
              <BlogPostCard
                date="February 3, 2025"
                title="The Role of UX in Conversion Rate Optimization"
                excerpt="Explore how user experience design directly impacts your website's conversion rates."
                slug="ux-and-conversion"
              />
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground md:text-lg">
              Stay updated with the latest insights, tips, and trends from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function BlogPostCard({ date, title, excerpt, slug }) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-[1fr_2fr] gap-4">
        <div className="relative h-48 md:h-full">
          <Image
            src={`/placeholder.svg?height=200&width=300&text=Blog+Post`}
            fill
            alt={title}
            className="object-cover"
          />
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
      </div>
    </Card>
  )
}
