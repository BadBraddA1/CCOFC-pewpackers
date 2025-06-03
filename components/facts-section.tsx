"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface FactCategory {
  title: string
  path: string
  count: number
  icon: string
  color: string
}

const factCategories: FactCategory[] = [
  { title: "First 25 Facts", path: "/first-25-facts", count: 25, icon: "🔢", color: "bg-blue-500" },
  { title: "First 100 Facts", path: "/first-100-facts", count: 100, icon: "💯", color: "bg-green-500" },
  { title: "First 200 Facts", path: "/first-200-facts", count: 200, icon: "📚", color: "bg-yellow-500" },
  { title: "Bible Books Summary", path: "/bible-books", count: 66, icon: "📖", color: "bg-purple-500" },
  { title: "Attributes of God", path: "/attributes", count: 16, icon: "✨", color: "bg-red-500" },
]

export default function FactsSection() {
  const filteredCategories = factCategories

  return (
    <Card className="w-full mt-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">Bible Facts Collections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCategories.map((category) => (
            <Card key={category.path} className={`${category.color} text-white`}>
              <CardContent className="p-4">
                <span className="text-2xl mb-2 block">{category.icon}</span>
                <h3 className="font-bold mb-4">{category.title}</h3>
                <Link href={category.path} passHref>
                  <Button variant="secondary" className="w-full">
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
