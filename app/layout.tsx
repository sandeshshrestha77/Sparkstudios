import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "SparkStudios - Creative Agency in Nepal",
    template: "%s | SparkStudios"
  },
  description: "SparkStudios is a creative agency based in Nepal, delivering cutting-edge IT services, design solutions, and marketing strategies since 2025.",
  keywords: ["creative agency", "web development", "design", "marketing", "Nepal"],
  authors: [{ name: "SparkStudios" }],
  creator: "SparkStudios",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sparkstudios.np",
    title: "SparkStudios - Creative Agency in Nepal",
    description: "SparkStudios is a creative agency based in Nepal, delivering cutting-edge IT services, design solutions, and marketing strategies since 2025.",
    siteName: "SparkStudios"
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkStudios - Creative Agency in Nepal",
    description: "SparkStudios is a creative agency based in Nepal, delivering cutting-edge IT services, design solutions, and marketing strategies since 2025.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}