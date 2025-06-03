"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shuffle } from "lucide-react"

interface AttributeData {
  attribute: string
  reference: string
}

export default function AttributesQuiz() {
  const [attributes, setAttributes] = useState<AttributeData[]>([])
  const [currentAttribute, setCurrentAttribute] = useState<AttributeData | null>(null)
  const [options, setOptions] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [questionCount, setQuestionCount] = useState(0)

  useEffect(() => {
    fetchAttributes()
  }, [])

  const fetchAttributes = async () => {
    const response = await fetch("/api/attributes")
    const data = await response.json()
    setAttributes(data)
    nextQuestion(data)
  }

  const nextQuestion = (data: AttributeData[]) => {
    const randomAttribute = data[Math.floor(Math.random() * data.length)]
    setCurrentAttribute(randomAttribute)

    const incorrectOptions = data
      .filter((a) => a.reference !== randomAttribute.reference)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((a) => a.reference)

    setOptions([...incorrectOptions, randomAttribute.reference].sort(() => 0.5 - Math.random()))
    setQuestionCount((prev) => prev + 1)
  }

  const handleAnswer = (reference: string) => {
    if (reference === currentAttribute?.reference) {
      setScore((prev) => prev + 1)
    }
    if (questionCount < 10) {
      nextQuestion(attributes)
    } else {
      setCurrentAttribute(null)
    }
  }

  const resetQuiz = () => {
    setScore(0)
    setQuestionCount(0)
    fetchAttributes()
  }

  if (!currentAttribute) {
    return (
      <Card className="w-full">
        <CardContent className="p-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-4">Your score: {score} / 10</p>
          <Button onClick={resetQuiz}>Play Again</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Attributes of God Quiz</h2>
          <Button onClick={resetQuiz}>
            <Shuffle className="mr-2 h-4 w-4" /> Reset
          </Button>
        </div>
        <p className="text-lg mb-4">Question {questionCount} / 10</p>
        <p className="text-xl mb-4">{currentAttribute.attribute}</p>
        <div className="grid grid-cols-1 gap-2">
          {options.map((option, index) => (
            <Button key={index} onClick={() => handleAnswer(option)} className="w-full">
              {option}
            </Button>
          ))}
        </div>
        <div className="mt-4">
          <p>
            Score: {score} / {questionCount - 1}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
