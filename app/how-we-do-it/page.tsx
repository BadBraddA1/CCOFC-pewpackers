import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowWeDoItPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">How We Do It</h1>
          <div className="flex items-center gap-4">
            <Link href="/" passHref>
              <Button variant="outline">Home</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Our Typical Sunday Night</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              On a typical Sunday night, we devote the last 15 minutes of our assembly specifically to our children
              (ages 2 and up). The local preacher typically directs the Pew Packers class (although any Christian man
              could do it--if he is enthusiastic and willing to invest some time to properly prepare).
            </p>
            <p className="mb-4">
              After inviting the children to come and sit together on the front pew, the director will lead the children
              through a series of activities each week (in no particular order):
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Character Builder</li>
              <li>Memory Drill</li>
              <li>Singing</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Character Builder</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Before the assembly begins, the leader will select a Character Builder word from his list (e.g., patience,
              respect, humility, etc.) to write on the chalkboard. During the Pew Packers class, the leader will ask one
              of the children to read the word out loud. Then, he will prompt the children to define the word (if they
              know it) and provide examples of what this word should mean to them.
            </p>
            <p>
              Sometimes the leader will need to refine the definitions suggested, but often the children do a wonderful
              job explaining what a word means and citing examples. Ultimately, the leader should do his best to
              emphasize that this character word is something they need to demonstrate daily in their lives (whether
              they are at home, at school, or even at the church building).
            </p>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Memory Drill</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The majority of the Pew Packers class is devoted to Memory Drill exercises. Each week the leader will
              introduce at least one new fact for the children to memorize.{" "}
              <Link
                href="http://pewpackers.com/memorywork/general.pdf"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here for the general list that is used
              </Link>
              .
            </p>
            <p className="mb-4">
              Specifically, the leader will state something to this effect: "When I say 'FAITH,' you say 'HEBREWS 11.'"
              And then the leader will guide the children in practicing this response several times. Whenever he says,
              "FAITH," he expects the children to respond in unison, "HEBREWS 11."
            </p>
            <p className="mb-4">
              If he speaks quietly, he expects them to respond quietly. And, if he speaks loudly, he wants to really
              hear them raise their voices. The leader, by varying the pitch and volume at which he speaks, is more
              likely to keep the children engaged and actively learning.
            </p>
            <p>
              In addition to introducing new material, the old material is reviewed as much as possible. The leader will
              sometimes ask specific children to respond to certain facts or simply allow the entire group to respond to
              everything together. The leader generally recites the books of the Bible with the children each week also.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Singing and Closing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The leader will also sing songs with the children throughout the Pew Packers class to break things up and
              help retain interest. Typically, the songs should be simple and easy to memorize.
            </p>
            <p>Finally, the class should be closed with a prayer.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Implementing Your Own Pew Packers Class</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The above is merely one way in which a Pew Packers class could be conducted. If you have other ideas or
              suggestions, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              . If you decide to implement a Pew Packers class in your congregation, we would appreciate hearing from
              you.
            </p>
            <p>
              Additionally, we would encourage you to conduct the class at a time when the adults are already assembled.
              One huge fringe benefit of working with the children when all of the adults are present is that they learn
              a lot too! This benefit is minimized when Pew Packers classes are conducted at a special time when few
              adults are present or when people might be (noisily) entering into the auditorium.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
