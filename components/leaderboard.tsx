"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLeaderboard } from "../app/actions"
import { format } from "date-fns"
import { Trophy, Medal, Award } from "lucide-react"

interface LeaderboardEntry {
  name: string
  score: number
  category: string | null
  game_mode: string | null
  created_at: string
}

// Add a new prop for limiting entries
export default function Leaderboard({ limit }: { limit?: number }) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard()
        console.log("Leaderboard data received:", data) // Add this line for debugging
        setLeaderboard(data)
      } catch (err) {
        setError("Failed to load leaderboard. Please try again later.")
        console.error("Error fetching leaderboard:", err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchLeaderboard()
  }, [])

  if (isLoading) {
    return <div className="text-center p-4">Loading leaderboard...</div>
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>
  }

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="h-6 w-6 text-yellow-500" />
      case 1:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 2:
        return <Award className="h-6 w-6 text-amber-600" />
      default:
        return null
    }
  }

  // Modify the rendering logic to use the limit
  const displayedLeaderboard = limit ? leaderboard.slice(0, limit) : leaderboard

  return (
    <Card className="w-full mt-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        {displayedLeaderboard.length === 0 ? (
          <p className="text-center text-muted-foreground text-lg">No scores yet. Be the first to play!</p>
        ) : (
          <ul className="space-y-4">
            {displayedLeaderboard.map((entry, index) => (
              <li key={index} className="bg-muted rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getIcon(index)}
                    <div>
                      <h3 className="font-semibold text-lg">{entry.name || "Unknown Player"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {entry.category && entry.category !== "Unknown" ? entry.category : ""}
                        {entry.game_mode && entry.game_mode !== "Unknown" ? ` - ${entry.game_mode}` : ""}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl">{entry.score !== undefined ? entry.score : "N/A"}</p>
                    <p className="text-sm text-muted-foreground">
                      {entry.created_at ? format(new Date(entry.created_at), "MMM d, yyyy") : "Date unknown"}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
