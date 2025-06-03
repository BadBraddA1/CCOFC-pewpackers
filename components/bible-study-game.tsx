"use client"

import { useState } from "react"
import FlashcardGame from "./flashcard-game"
import QuizGame from "./quiz-game"
import Leaderboard from "./leaderboard"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type GameMode = "flashcard" | "regularQuiz" | "endlessQuiz"

export default function BibleStudyGame({ initialMode = "flashcard" }: { initialMode?: GameMode }) {
  const [gameMode, setGameMode] = useState<GameMode>(initialMode)

  return (
    <Card className="w-full">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Button
            onClick={() => setGameMode("flashcard")}
            variant={gameMode === "flashcard" ? "default" : "outline"}
            className="w-full sm:w-auto p-4 text-lg"
          >
            Flashcards
          </Button>
          <Button
            onClick={() => setGameMode("regularQuiz")}
            variant={gameMode === "regularQuiz" ? "default" : "outline"}
            className="w-full sm:w-auto p-4 text-lg"
          >
            Regular Quiz
          </Button>
          <Button
            onClick={() => setGameMode("endlessQuiz")}
            variant={gameMode === "endlessQuiz" ? "default" : "outline"}
            className="w-full sm:w-auto p-4 text-lg"
          >
            Endless Quiz
          </Button>
        </div>
        {gameMode === "flashcard" && <FlashcardGame data={[]} />}
        {gameMode === "regularQuiz" && <QuizGame title="Regular Quiz" data={[]} mode="regular" />}
        {gameMode === "endlessQuiz" && <QuizGame title="Endless Quiz" data={[]} mode="endless" />}
        <Leaderboard />
      </CardContent>
    </Card>
  )
}
