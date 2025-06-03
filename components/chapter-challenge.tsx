"use client"

import type React from "react"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shuffle } from "lucide-react"

interface ChapterItem {
  question: string
  answer: string
}

export default function ChapterChallenge({ title, data }: { title: string; data: ChapterItem[] }) {
  const [currentItem, setCurrentItem] = useState<ChapterItem | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [feedback, setFeedback] = useState("")
  const [score, setScore] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [shuffledData, setShuffledData] = useState<ChapterItem[]>([])
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)

  const answers = useMemo(() => {
    return Array.from(new Set(data.map((item) => item.answer)))
  }, [data])

  useEffect(() => {
    if (data.length > 0) {
      shuffleData()
    }
  }, [data])

  const shuffleData = () => {
    const newShuffledData = [...data].sort(() => Math.random() - 0.5)
    setShuffledData(newShuffledData)
    setCurrentItem(newShuffledData[0])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userAnswer) return // Prevent submission if no answer is selected
    setTotalAttempts(totalAttempts + 1)
    setIsAnswerSubmitted(true)

    if (currentItem && userAnswer === currentItem.answer) {
      setScore(score + 1)
      setFeedback("Correct!")
    } else {
      setFeedback(`Incorrect. The correct answer is: ${currentItem?.answer}`)
    }
  }

  const nextQuestion = () => {
    const nextIndex = shuffledData.indexOf(currentItem!) + 1
    if (nextIndex < shuffledData.length) {
      setCurrentItem(shuffledData[nextIndex])
    } else {
      shuffleData()
    }
    setUserAnswer("")
    setFeedback("")
    setIsAnswerSubmitted(false)
  }

  const resetGame = () => {
    shuffleData()
    setScore(0)
    setTotalAttempts(0)
    setUserAnswer("")
    setFeedback("")
    setIsAnswerSubmitted(false)
  }

  if (!currentItem) {
    return <div>Loading...</div>
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        <p className="text-lg mb-4 text-center">{currentItem.question}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select onValueChange={setUserAnswer} value={userAnswer} disabled={isAnswerSubmitted}>
            <SelectTrigger className="w-full text-lg">
              <SelectValue placeholder="Select answer" />
            </SelectTrigger>
            <SelectContent>
              {answers.map((answer) => (
                <SelectItem key={answer} value={answer}>
                  {answer}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full p-6 text-lg" disabled={isAnswerSubmitted || !userAnswer}>
            Submit
          </Button>
        </form>
        {feedback && (
          <p
            className={`mt-4 text-center text-lg ${feedback.startsWith("Correct") ? "text-green-500" : "text-red-500"}`}
          >
            {feedback}
          </p>
        )}
        {isAnswerSubmitted && (
          <Button onClick={nextQuestion} className="w-full p-6 text-lg mt-4">
            Next Question
          </Button>
        )}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg">
            Score: {score} / {totalAttempts}
          </p>
          <Button onClick={resetGame} variant="outline" className="p-4 text-lg">
            <Shuffle className="mr-2 h-6 w-6" />
            Reset Game
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
