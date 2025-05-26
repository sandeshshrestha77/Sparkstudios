import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">Last updated: April 9, 2025</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground">
            <p>
              At SparkStudios, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our services. Please read this
              privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access
              the site.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the website
              includes:
            </p>

            <h3>Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, telephone number, and other similar
              information that you voluntarily provide to us when you register with the website or when you choose to
              contact us via the contact form. You are under no obligation to provide us with personal information, but
              your refusal to do so may prevent you from using certain features of the website.
            </p>

            <h3>Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the website, such as your IP address,
              browser type, operating system, access times, and the pages you have viewed directly before and after
              accessing the website.
            </p>

            <h3>Cookies and Web Beacons</h3>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to help
              customize the website and improve your experience. When you access the website, your personal information
              is not collected through the use of tracking technology. Most browsers are set to accept cookies by
              default. You can remove or reject cookies, but be aware that such action could affect the availability and
              functionality of the website.
            </p>

            <h2>Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the website to:
            </p>

            <ul>
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the website.</li>
              <li>Generate a personal profile about you to make future visits to the website more personalized.</li>
              <li>Increase the efficiency and operation of the website.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
              <li>Notify you of updates to the website.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
              <li>Perform other business activities as needed.</li>
              <li>Request feedback and contact you about your use of the website.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Respond to product and customer service requests.</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>

            <h3>By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to
              investigate or remedy potential violations of our policies, or to protect the rights, property, and safety
              of others, we may share your information as permitted or required by any applicable law, rule, or
              regulation.
            </p>

            <h3>Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including
              payment processing, data analysis, email delivery, hosting services, customer service, and marketing
              assistance.
            </p>

            <h3>Marketing Communications</h3>
            <p>
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with
              third parties for marketing purposes, as permitted by law.
            </p>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>

            <address>
              SparkStudios
              <br />
              Thamel, Kathmandu, Nepal
              <br />
              info@sparkstudios.np
              <br />
              +977 1 234 5678
            </address>

            <div className="mt-8">
              <Button asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
