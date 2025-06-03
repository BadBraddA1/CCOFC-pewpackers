"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FlashcardGame from "./flashcard-game"
import QuizGame from "./quiz-game"
import ChapterChallenge from "./chapter-challenge"

interface MemoryItem {
  question: string
  answer: string
}

export default function MemoryGame({ title, data }: { title: string; data: MemoryItem[] }) {
  const [gameMode, setGameMode] = useState<"flashcard" | "regular" | "endless" | "challenge">("flashcard")

  const reverseData = (data: MemoryItem[]): MemoryItem[] => {
    return data.map((item) => ({
      front: item.answer,
      back: item.question,
    }))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        <div className="flex flex-row flex-wrap justify-center gap-2 mb-6">
          <Button onClick={() => setGameMode("flashcard")} variant={gameMode === "flashcard" ? "default" : "outline"}>
            Flashcards
          </Button>
          <Button onClick={() => setGameMode("regular")} variant={gameMode === "regular" ? "default" : "outline"}>
            Regular Quiz
          </Button>
          <Button onClick={() => setGameMode("endless")} variant={gameMode === "endless" ? "default" : "outline"}>
            Endless Quiz
          </Button>
          <Button onClick={() => setGameMode("challenge")} variant={gameMode === "challenge" ? "default" : "outline"}>
            Chapter Challenge
          </Button>
        </div>
        {gameMode === "flashcard" && <FlashcardGame data={reverseData(data)} />}
        {gameMode === "regular" && <QuizGame title={title} data={data} mode="regular" />}
        {gameMode === "endless" && <QuizGame title={title} data={data} mode="endless" />}
        {gameMode === "challenge" && <ChapterChallenge title={`${title} Chapter Challenge`} data={data} />}
      </CardContent>
    </Card>
  )
}
