"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import FactsSection from "./facts-section"

interface GameCategory {
  number?: string
  title: string
  path: string
  bibleBowlYear?: number
  testament: "oldT" | "newT"
}

const gameCategories: GameCategory[] = [
  { number: "01", title: "Genesis", path: "/genesis", bibleBowlYear: 2018, testament: "oldT" },
  { number: "02", title: "Exodus", path: "/exodus", bibleBowlYear: 2019, testament: "oldT" },
  { number: "03", title: "Leviticus", path: "/leviticus", bibleBowlYear: 2020, testament: "oldT" },
  { number: "04", title: "Numbers", path: "/numbers", bibleBowlYear: 2020, testament: "oldT" },
  { number: "05", title: "Deuteronomy", path: "/deuteronomy", bibleBowlYear: 2020, testament: "oldT" },
  { number: "06", title: "Joshua", path: "/joshua", bibleBowlYear: 2024, testament: "oldT" },
  { number: "07", title: "Judges", path: "/judges", bibleBowlYear: 2025, testament: "oldT" },
  { number: "40", title: "Matthew", path: "/matthew", bibleBowlYear: 2015, testament: "newT" },
  { number: "43", title: "John", path: "/john", bibleBowlYear: 2016, testament: "newT" },
  { number: "44", title: "Acts", path: "/acts", bibleBowlYear: 2017, testament: "newT" },
  { number: "45", title: "Romans", path: "/romans", bibleBowlYear: 2021, testament: "newT" },
  { number: "46", title: "1 Corinthians", path: "/first-corinthians", bibleBowlYear: 2022, testament: "newT" },
  { number: "47", title: "2 Corinthians", path: "/second-corinthians", bibleBowlYear: 2023, testament: "newT" },
]

export default function HomePage() {
  //const [searchTerm, setSearchTerm] = useState("")

  const filteredCategories = gameCategories

  return (
    <div>
      <Card className="w-full mb-6">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Chapter Summaries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredCategories.map((category) => (
              <Link key={category.path} href={category.path} passHref>
                <Button
                  className={`w-full h-24 text-lg flex flex-col justify-center items-center p-2 relative
  ${
    category.testament === "oldT"
      ? "bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700 dark:text-blue-100"
      : "bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-800 dark:hover:bg-green-700 dark:text-green-100"
  }
`}
                >
                  {category.number && <span className="text-sm font-semibold mb-1">({category.number})</span>}
                  <span className="text-center text-sm sm:text-base">{category.title}</span>
                  {category.bibleBowlYear && (
                    <span className="text-xs text-muted-foreground mt-1">Rendezvous {category.bibleBowlYear}</span>
                  )}
                  <span
                    className={`absolute top-1 right-1 text-xs font-semibold
  ${category.testament === "oldT" ? "text-blue-600 dark:text-blue-300" : "text-green-600 dark:text-green-300"}
`}
                  >
                    {category.testament === "oldT" ? "OT" : "NT"}
                  </span>
                </Button>
              </Link>
            ))}
          </div>
          {filteredCategories.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No matching categories found.</p>
          )}
        </CardContent>
      </Card>
      <FactsSection />
    </div>
  )
}
