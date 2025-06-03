"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Info } from "lucide-react"

export function InfoModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="absolute top-2 right-2">
          <Info className="h-6 w-6" />
          <span className="sr-only">Game mode information</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Quiz Game Modes</DialogTitle>
          <DialogDescription>Learn about the different quiz game modes and how to play them.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Regular Quiz</h3>
            <p>
              Answer a set number of questions. Your score is based on how many you get correct. Great for testing your
              knowledge on a specific topic.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Endless Quiz</h3>
            <p>
              Keep answering questions until you run out of lives. Each incorrect answer costs you a life. See how long
              you can last and how high you can score!
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How to Play</h3>
            <ol className="list-decimal list-inside">
              <li>Read the question carefully.</li>
              <li>Select your answer from the options provided.</li>
              <li>Click &quot;Submit&quot; to check your answer.</li>
              <li>Click &quot;Next Question&quot; to continue.</li>
              <li>Try to achieve the highest score possible!</li>
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
