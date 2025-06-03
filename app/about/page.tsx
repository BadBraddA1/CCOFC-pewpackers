import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">About This Work</h1>
          <div className="flex items-center gap-4">
            <Link href="/" passHref>
              <Button variant="outline">Home</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This work was inspired by Glenn Colley and his presentations at Polishing the Pulpit in 2008 (thank you
              very much brother and PTP!). Glenn, a faithful gospel preacher and elder for the Lord's church, shared
              many wonderful ideas on how he has conducted "Pew Packers" classes for children on Sunday nights.
              Evidently, many congregations have had various classes of this sort for years, but it was a new and
              exciting idea to us!
            </p>
            <p className="mb-4">
              The congregation here (in Clinton, IL) began implementing, in late 2008, many of the ideas Glenn shared.
              We were thrilled with the children's progress (not to mention the fact that the adults were learning
              too!). There soon became a need to provide parents with a list of the memory drill items that they could
              use to review with their children. Surprisingly, the domain PewPackers.com was available so we snatched it
              up and started developing this site.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              It is our hope that this website will grow to be a wonderful spiritual resource for children and their
              parents. In addition to posting material pertaining to our Sunday night Pew Packers class, we intend to
              make other materials available as time permits (e.g., materials suitable for children's Bible classes,
              home educators, etc.).
            </p>
            <p>
              You are welcome to use any of the materials from this site to the glory of God (in a non-commercial way),
              although we would certainly appreciate it if you directed others to this site.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <address className="not-italic">
              <p>Clinton Church of Christ</p>
              <p>5450 Evans Rd</p>
              <p>Clinton, IL 61727</p>
              <p>USA</p>
              <p className="mt-2">Phone: 217.935.5058</p>
              <p>
                Email:{" "}
                <a href="mailto:stephen@AudioEvangelism.com" className="text-primary hover:underline">
                  stephen@AudioEvangelism.com
                </a>
              </p>
            </address>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
