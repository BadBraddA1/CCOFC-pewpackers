import { format } from "date-fns"

interface LeaderboardEntryProps {
  name: string
  score: number
  quizMode: string
  quizType: string
  createdAt: string
}

export function LeaderboardEntry({ name, score, quizMode, quizType, createdAt }: LeaderboardEntryProps) {
  const formattedDate = format(new Date(createdAt), "MMM d, yyyy")

  return (
    <li className="flex justify-between items-center py-2 text-sm sm:text-base">
      <div>
        <span className="font-semibold">{name}</span>
        <span className="text-muted-foreground">
          {" "}
          - {quizType} ({quizMode})
        </span>
      </div>
      <div className="text-right">
        <span className="font-semibold">{score}</span>
        <span className="text-muted-foreground ml-2">{formattedDate}</span>
      </div>
    </li>
  )
}
