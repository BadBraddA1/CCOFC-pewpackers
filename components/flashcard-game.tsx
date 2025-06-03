"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shuffle } from "lucide-react"

interface MemoryItem {
  front: string
  back: string
}

export default function FlashcardGame({ data }: { data: MemoryItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [shuffledData, setShuffledData] = useState<MemoryItem[]>([])

  useEffect(() => {
    if (data && data.length > 0) {
      setShuffledData([...data])
    }
  }, [data])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledData.length)
    setIsFlipped(false)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + shuffledData.length) % shuffledData.length)
    setIsFlipped(false)
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleShuffle = () => {
    setShuffledData([...shuffledData].sort(() => Math.random() - 0.5))
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  if (!shuffledData || shuffledData.length === 0) {
    return <p>No flashcards available.</p>
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="w-full aspect-[3/2] mb-6 hover:shadow-lg transition-shadow duration-300">
        <CardContent
          className={`h-full flex flex-col items-center justify-center p-6 cursor-pointer ${
            isFlipped ? "bg-green-100 dark:bg-green-900" : "bg-gray-100 dark:bg-gray-800"
          }`}
          onClick={handleFlip}
        >
          <div className="text-center">
            <p className="text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">
              {isFlipped ? "Back:" : "Front:"}
            </p>
            {isFlipped ? (
              <p className="text-xl sm:text-2xl">{shuffledData[currentIndex].back}</p>
            ) : (
              <h3 className="text-2xl sm:text-3xl font-bold">{shuffledData[currentIndex].front}</h3>
            )}
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <Button onClick={handlePrevious} variant="outline" className="w-full sm:w-auto p-6 text-lg">
          Previous
        </Button>
        <span className="text-lg text-muted-foreground">
          {currentIndex + 1} / {shuffledData.length}
        </span>
        <Button onClick={handleNext} variant="outline" className="w-full sm:w-auto p-6 text-lg">
          Next
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button onClick={handleFlip} variant="outline" className="w-full sm:w-auto p-6 text-lg">
          Flip Card
        </Button>
        <Button onClick={handleShuffle} variant="outline" className="w-full sm:w-auto p-6 text-lg">
          <Shuffle className="mr-2 h-6 w-6" />
          Shuffle
        </Button>
      </div>
    </div>
  )
}
