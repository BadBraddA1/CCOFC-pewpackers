"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shuffle, Heart } from "lucide-react"
import { addScore } from "../app/actions"
import { InfoModal } from "./info-modal"

interface QuizItem {
  question: string
  answer: string
}

export default function QuizGame({
  title,
  data,
  mode,
}: {
  title: string
  data: QuizItem[]
  mode: "regular" | "endless"
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [shuffledData, setShuffledData] = useState<QuizItem[]>([])
  const [options, setOptions] = useState<string[]>([])
  const [playerName, setPlayerName] = useState("")
  const [showNameInput, setShowNameInput] = useState(false)
  const [lives, setLives] = useState(1) // Update 1: Initial lives set to 1
  const [scoreSubmitted, setScoreSubmitted] = useState(false)

  useEffect(() => {
    const newShuffledData = [...data].sort(() => Math.random() - 0.5)
    setShuffledData(newShuffledData)
    setOptions(generateRandomOptions(newShuffledData[0].answer))
  }, [data])

  const generateOptions = (correctAnswer: string) => {
    const allAnswers = data.map((item) => item.answer)
    const incorrectOptions = allAnswers
      .filter((answer) => answer !== correctAnswer)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
    return [...incorrectOptions, correctAnswer].sort(() => 0.5 - Math.random())
  }

  const generateRandomOptions = (correctAnswer: string) => {
    const allAnswers = data.map((item) => item.answer)
    const incorrectOptions = allAnswers
      .filter((answer) => answer !== correctAnswer)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
    return [...incorrectOptions, correctAnswer].sort(() => 0.5 - Math.random())
  }

  const handleSubmit = (answer: string) => {
    setSelectedAnswer(answer)
    if (answer === shuffledData[currentIndex].answer) {
      setScore(score + 1)
    } else if (mode === "endless") {
      setLives(lives - 1)
    }
    setShowResult(true)
  }

  const handleNext = () => {
    if (mode === "regular" && currentIndex === shuffledData.length - 1) {
      setShowNameInput(true)
      return
    }
    // Update 2: Condition for ending endless mode
    if (mode === "endless" && lives === 0) {
      setShowNameInput(true)
      return
    }
    const nextIndex = (currentIndex + 1) % shuffledData.length
    setCurrentIndex(nextIndex)
    setSelectedAnswer(null)
    setShowResult(false)
    setOptions(generateRandomOptions(shuffledData[nextIndex].answer))
  }

  const resetQuiz = () => {
    const newShuffledData = [...data].sort(() => Math.random() - 0.5)
    setShuffledData(newShuffledData)
    setCurrentIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setOptions(generateRandomOptions(newShuffledData[0].answer))
    setShowNameInput(false)
    setLives(1) // Update 4: Reset lives to 1
    setScoreSubmitted(false)
  }

  const handleSubmitScore = async () => {
    if (playerName.trim()) {
      try {
        await addScore(playerName, score, title, mode)
        setScoreSubmitted(true)
      } catch (error) {
        console.error("Failed to submit score:", error)
        // You might want to show an error message to the user here
      }
    }
  }

  if (shuffledData.length === 0) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p>No data available for this quiz.</p>
        </CardContent>
      </Card>
    )
  }

  if (showNameInput || (mode === "endless" && lives === 0)) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-4">Quiz Completed!</p>
          <p className="text-lg mb-6">
            Your score: {score} {mode === "regular" ? `/ ${shuffledData.length}` : ""}
          </p>
          {!scoreSubmitted ? (
            <>
              <Input
                type="text"
                placeholder="Enter your name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="mb-4 p-4 text-lg"
              />
              <Button onClick={handleSubmitScore} className="w-full p-6 text-lg">
                Submit Score to Leaderboard
              </Button>
            </>
          ) : (
            <p className="text-lg mb-6">Your score has been submitted to the leaderboard!</p>
          )}
          <Button onClick={resetQuiz} variant="outline" className="w-full mt-4 p-4 text-lg">
            <Shuffle className="mr-2 h-6 w-6" />
            Play Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto relative">
      <InfoModal />
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        {mode === "endless" && (
          // Update 3: Modified lives display
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-red-500 mr-2" fill="currentColor" />
          </div>
        )}
        <p className="text-xl mb-6 text-center">{shuffledData[currentIndex].question}</p>
        <div className="grid grid-cols-1 gap-4 mb-6">
          {options.map((option, index) => (
            <Button
              key={index}
              onClick={() => !showResult && handleSubmit(option)}
              className={`w-full p-6 text-lg ${
                showResult
                  ? option === shuffledData[currentIndex].answer
                    ? "bg-green-500 hover:bg-green-600"
                    : option === selectedAnswer
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  : ""
              }`}
              disabled={showResult}
            >
              {option}
            </Button>
          ))}
        </div>
        {showResult && (
          <div className="mb-6">
            <p className="text-lg text-center mb-4">
              {selectedAnswer === shuffledData[currentIndex].answer
                ? "Correct!"
                : `Incorrect. The correct answer is: ${shuffledData[currentIndex].answer}`}
            </p>
            <Button onClick={handleNext} className="w-full p-6 text-lg">
              {mode === "regular" && currentIndex === shuffledData.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          </div>
        )}
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>
            {mode === "regular"
              ? `Question ${currentIndex + 1} of ${shuffledData.length}`
              : `Endless Mode - Question ${currentIndex + 1}`}
          </span>
          <span>Score: {score}</span>
        </div>
        <Button onClick={resetQuiz} variant="outline" className="w-full mt-4 p-4 text-lg">
          <Shuffle className="mr-2 h-6 w-6" />
          Restart Quiz
        </Button>
      </CardContent>
    </Card>
  )
}
