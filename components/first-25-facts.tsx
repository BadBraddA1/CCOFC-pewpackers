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

const first25FactsData: FactItem[] = [
  { question: "Old Testament books", answer: "Genesis, Exodus, etc." },
  { question: "New Testament books", answer: "Matthew, Mark, etc." },
  { question: "Creation", answer: "Genesis 1 & 2" },
  { question: "Love", answer: "I Corinthians 13" },
  { question: "What is the purpose of life?", answer: "To fear God & keep His commandments" },
  { question: "What is success?", answer: "Living your life for God and going to heaven" },
  { question: "What is failure?", answer: "Living your life for self and going to hell" },
  { question: "Sermon on the Mount", answer: "Matthew 5, 6, & 7" },
  { question: "Faith", answer: "Hebrews 11" },
  { question: "Heaven", answer: "Revelation 21" },
  { question: "The birth of the church", answer: "Acts 2" },
  { question: "Sin enters the world", answer: "Genesis 3" },
  { question: "What do you want to be when you grow up?", answer: "A Christian" },
  { question: "Birth of Jesus", answer: "Luke 2" },
  { question: "Death of Jesus", answer: "Matthew 27" },
  { question: "Temptations of Jesus", answer: "Matthew 4" },
  { question: "What is God's plan for marriage?", answer: "One man and one woman for life" },
  { question: "The global flood", answer: "Genesis 6 & 7" },
  { question: "Judgment Day", answer: "Matthew 25" },
  { question: "Promises to Abraham", answer: "Genesis 12" },
  { question: "Ten Commandments given", answer: "Exodus 20" },
  { question: "Ascension of Christ", answer: "Acts 1" },
  { question: "Conversion of Saul", answer: "Acts 9" },
  { question: "If you obey, you will be blessed", answer: "Deuteronomy 28" },
  { question: "If you disobey, you will be cursed", answer: "Deuteronomy 28" },
]

export default function First25Facts() {
  const [gameMode, setGameMode] = useState<"flashcard" | "quiz">("flashcard")

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">First 25 Facts</h2>
        <div className="flex justify-center space-x-2 mb-6">
          <Button onClick={() => setGameMode("flashcard")} variant={gameMode === "flashcard" ? "default" : "outline"}>
            Flashcards
          </Button>
          <Button onClick={() => setGameMode("quiz")} variant={gameMode === "quiz" ? "default" : "outline"}>
            Quiz
          </Button>
        </div>
        {gameMode === "flashcard" && <FactFlashcardGame data={first25FactsData} />}
        {gameMode === "quiz" && <QuizGame title="First 25 Facts" data={first25FactsData} mode="regular" />}
      </CardContent>
    </Card>
  )
}
