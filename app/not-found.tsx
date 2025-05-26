import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <div className="space-y-6 max-w-md">
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src="/placeholder.svg?height=250&width=250&text=404"
            fill
            alt="404 Error"
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Page Not Found</h1>

        <p className="text-xl text-muted-foreground">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              <Search className="mr-2 h-4 w-4" /> Contact Support
            </Link>
          </Button>
        </div>

        <div className="pt-8 border-t">
          <h2 className="text-xl font-bold mb-4">You might be looking for:</h2>
          <div className="grid gap-2">
            <Link href="/services" className="text-primary hover:underline">
              Our Services
            </Link>
            <Link href="/portfolio" className="text-primary hover:underline">
              Portfolio
            </Link>
            <Link href="/about" className="text-primary hover:underline">
              About Us
            </Link>
            <Link href="/blog" className="text-primary hover:underline">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
