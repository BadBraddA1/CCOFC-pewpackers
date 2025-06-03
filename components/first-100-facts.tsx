"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FactFlashcardGame from "./fact-flashcard-game"
import QuizGame from "./quiz-game"

interface FactItem {
  question: string
  answer: string
}

const first100FactsData: FactItem[] = [
  { question: "Old Testament books", answer: "Genesis, Exodus, etc." },
  { question: "New Testament books", answer: "Matthew, Mark, etc." },
  { question: "Creation", answer: "Genesis 1 & 2" },
  { question: "Love", answer: "I Corinthians 13" },
  { question: "What is the purpose of life?", answer: "To fear God & keep His commandments" },
  // Add more items here to complete the 100 facts
]

export default function First100Facts() {
  const [gameMode, setGameMode] = useState<"flashcard" | "quiz">("flashcard")

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">First 100 Facts</h2>
        <div className="flex justify-center space-x-2 mb-6">
          <Button onClick={() => setGameMode("flashcard")} variant={gameMode === "flashcard" ? "default" : "outline"}>
            Flashcards
          </Button>
          <Button onClick={() => setGameMode("quiz")} variant={gameMode === "quiz" ? "default" : "outline"}>
            Quiz
          </Button>
        </div>
        {gameMode === "flashcard" && <FactFlashcardGame data={first100FactsData} />}
        {gameMode === "quiz" && <QuizGame title="First 100 Facts" data={first100FactsData} mode="regular" />}
      </CardContent>
    </Card>
  )
}
