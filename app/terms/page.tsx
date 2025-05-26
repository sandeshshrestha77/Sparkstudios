import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">Last updated: April 9, 2025</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground">
            <p>
              These Terms of Service ("Terms") govern your use of the website operated by SparkStudios ("we," "us," or
              "our") and any services offered through the website. By accessing or using our website, you agree to be
              bound by these Terms. If you disagree with any part of the terms, you may not access the website.
            </p>

            <h2>1. Use of Our Services</h2>
            <p>
              By accessing or using our website, you warrant and represent that you are at least 18 years of age and
              possess the legal authority, right, and freedom to enter into these Terms as a binding agreement. You are
              not allowed to use this website if doing so is prohibited by applicable laws in your jurisdiction.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by SparkStudios and are
              protected by international copyright, trademark, patent, trade secret, and other intellectual property or
              proprietary rights laws.
            </p>

            <h2>3. User Content</h2>
            <p>
              Our website may allow you to post, link, store, share, and otherwise make available certain information,
              text, graphics, videos, or other material. You are responsible for the content that you post on or through
              our website, including its legality, reliability, and appropriateness.
            </p>
            <p>
              By posting content on or through our website, you represent and warrant that: (i) the content is yours
              (you own it) or you have the right to use it and grant us the rights and license as provided in these
              Terms, and (ii) the posting of your content on or through our website does not violate the privacy rights,
              publicity rights, copyrights, contract rights, or any other rights of any person.
            </p>

            <h2>4. Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current
              at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
              termination of your account on our website.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access our website and for any
              activities or actions under your password. You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of security or unauthorized use of your
              account.
            </p>

            <h2>5. Links to Other Websites</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by
              SparkStudios. We have no control over, and assume no responsibility for, the content, privacy policies, or
              practices of any third-party websites or services.
            </p>
            <p>
              You acknowledge and agree that SparkStudios shall not be responsible or liable, directly or indirectly,
              for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on
              any such content, goods, or services available on or through any such websites or services.
            </p>

            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use our
              website will immediately cease.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall SparkStudios, nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your
              access to or use of or inability to access or use our website; (ii) any conduct or content of any third
              party on our website; (iii) any content obtained from our website; and (iv) unauthorized access, use, or
              alteration of your transmissions or content, whether based on warranty, contract, tort (including
              negligence), or any other legal theory, whether or not we have been informed of the possibility of such
              damage.
            </p>

            <h2>8. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>

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
