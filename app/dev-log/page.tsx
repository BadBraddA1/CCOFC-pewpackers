import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LogEntry {
  date: string
  version: string
  changes: string[]
}

const devLog: LogEntry[] = [
  {
    date: "02-21-2025",
    version: "2.0.0",
    changes: ["Introducing a New Game Mode: Chapter Challenge."], 
  },
  {
    date: "02-19-2025",
    version: "1.2.0",
    changes: ["Updated the Bible-fact database to implement changes for the new game mode, Chapter Challenge."], 
  },
  {
    date: "02-19-2025",
    version: "1.0.1",
    changes: [
      "Modified home page to display only top 3 leaderboard entries",
      "Added 'View Full Leaderboard' button on the home page",
      "Created a new /leaderboard page to display the full leaderboard",
      "Updated Leaderboard component to accept a 'limit' prop for flexible display",
    ],
  },
  {
    date: "02-18-2025",
    version: "1.0.0",
    changes: ["Initial release of Pew Packers Flash Cards & Quizzes"],
  },
  {
    date: "02-18-2025",
    version: "B.0.4",
    changes: [
      "Added new Bible study categories: Romans, Leviticus, Deuteronomy, Numbers, Joshua, 1 & 2 Corinthians, and Exodus",
      "Implemented First 25 Facts, First 100 Facts, and First 200 Facts games",
      "Created a separate Facts section on the home page",
      "Updated home page layout to include new categories and Facts section",
      "Improved search functionality to include new categories",
      "Enhanced overall user interface and navigation",
    ],
  },
  {
    date: "02-17-2025",
    version: "A.0.3",
    changes: [
      "Added lives system to Endless Quiz mode",
      "Created dev log page to track changes",
      "Fixed bug in leaderboard score submission",
    ],
  },
  {
    date: "02-17-2025",
    version: "A.0.2",
    changes: [
      "Added leaderboard functionality",
      "Integrated with BraddCorp's database for score storage",
      "Implemented dark mode toggle",
    ],
  },
  {
    date: "02-16-2025",
    version: "A.0.1",
    changes: [
      "Added flashcard game for Books of Moses, Judges, Matthew, John, Genesis",
      "Implemented regular and endless quiz modes",
    ],
  },
]

export default function DevLog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">Development Log</h1>
          <div className="flex items-center gap-4">
            <Link href="/" passHref>
              <Button variant="outline">Home</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
        {devLog.map((entry, index) => (
          <Card key={index} className="mb-6">
            <CardHeader>
              <CardTitle>{entry.date}</CardTitle>
              <p className="text-sm text-muted-foreground">Version {entry.version}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {entry.changes.map((change, changeIndex) => (
                  <li key={changeIndex}>{change}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
        <p className="text-center text-sm text-muted-foreground mt-6 italic">Made with love ~ BraddFord</p>
      </div>
    </main>
  )
}
