"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shuffle } from "lucide-react"

interface BookData {
  book: string
  summary: string
}

export default function BibleBooksMatching() {
  const [books, setBooks] = useState<BookData[]>([])
  const [selectedBook, setSelectedBook] = useState<string | null>(null)
  const [selectedSummary, setSelectedSummary] = useState<string | null>(null)
  const [matches, setMatches] = useState<string[]>([])

  useEffect(() => {
    fetchBibleBooks()
  }, [])

  const fetchBibleBooks = async () => {
    const response = await fetch("/api/bible-books")
    const data = await response.json()
    setBooks(data)
  }

  const handleBookClick = (book: string) => {
    if (selectedSummary) {
      if (books.find((b) => b.book === book && b.summary === selectedSummary)) {
        setMatches([...matches, book])
        setSelectedBook(null)
        setSelectedSummary(null)
      } else {
        setSelectedBook(null)
        setSelectedSummary(null)
      }
    } else {
      setSelectedBook(book)
    }
  }

  const handleSummaryClick = (summary: string) => {
    if (selectedBook) {
      if (books.find((b) => b.book === selectedBook && b.summary === summary)) {
        setMatches([...matches, selectedBook])
        setSelectedBook(null)
        setSelectedSummary(null)
      } else {
        setSelectedBook(null)
        setSelectedSummary(null)
      }
    } else {
      setSelectedSummary(summary)
    }
  }

  const resetGame = () => {
    setMatches([])
    setSelectedBook(null)
    setSelectedSummary(null)
    fetchBibleBooks()
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Bible Books Matching</h2>
          <Button onClick={resetGame}>
            <Shuffle className="mr-2 h-4 w-4" /> Reset
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Books</h3>
            {books.map((book) => (
              <Button
                key={book.book}
                onClick={() => handleBookClick(book.book)}
                className="w-full mb-2"
                variant={selectedBook === book.book ? "default" : "outline"}
                disabled={matches.includes(book.book)}
              >
                {book.book}
              </Button>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Summaries</h3>
            {books.map((book) => (
              <Button
                key={book.summary}
                onClick={() => handleSummaryClick(book.summary)}
                className="w-full mb-2"
                variant={selectedSummary === book.summary ? "default" : "outline"}
                disabled={matches.some((m) => books.find((b) => b.book === m)?.summary === book.summary)}
              >
                {book.summary}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p>
            Matches: {matches.length} / {books.length}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
