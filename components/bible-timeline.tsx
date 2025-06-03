"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shuffle } from "lucide-react"

interface TimelineEvent {
  event: string
  reference: string
}

export default function BibleTimeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([])
  const [timeline, setTimeline] = useState<TimelineEvent[]>([])
  const [currentEvent, setCurrentEvent] = useState<TimelineEvent | null>(null)

  useEffect(() => {
    fetchTimelineEvents()
  }, [])

  const fetchTimelineEvents = async () => {
    const response = await fetch("/api/timeline-events")
    const data = await response.json()
    setEvents(data.sort(() => 0.5 - Math.random()))
    setCurrentEvent(data[0])
  }

  const handleEventPlacement = (position: "before" | "after") => {
    if (!currentEvent) return

    let newTimeline
    if (timeline.length === 0) {
      newTimeline = [currentEvent]
    } else if (position === "before") {
      newTimeline = [currentEvent, ...timeline]
    } else {
      newTimeline = [...timeline, currentEvent]
    }

    setTimeline(newTimeline)
    setCurrentEvent(events[timeline.length + 1] || null)
  }

  const resetGame = () => {
    fetchTimelineEvents()
    setTimeline([])
  }

  if (!currentEvent && timeline.length > 0) {
    return (
      <Card className="w-full">
        <CardContent className="p-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Timeline Complete!</h2>
          <p className="text-xl mb-4">You placed {timeline.length} events in order.</p>
          <Button onClick={resetGame}>Play Again</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Bible Timeline</h2>
          <Button onClick={resetGame}>
            <Shuffle className="mr-2 h-4 w-4" /> Reset
          </Button>
        </div>
        {currentEvent && (
          <div className="mb-4">
            <p className="text-lg font-semibold">{currentEvent.event}</p>
            <p>{currentEvent.reference}</p>
            <div className="flex justify-center gap-4 mt-4">
              <Button onClick={() => handleEventPlacement("before")}>Place Before</Button>
              <Button onClick={() => handleEventPlacement("after")}>Place After</Button>
            </div>
          </div>
        )}
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Current Timeline:</h3>
          {timeline.map((event, index) => (
            <div key={index} className="mb-2">
              <p>
                {event.event} - {event.reference}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
