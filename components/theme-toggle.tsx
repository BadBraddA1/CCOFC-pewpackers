"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex space-x-2">
      <Button variant="outline" size="icon" onClick={() => setTheme("light")} aria-label="Light mode">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => setTheme("dark")} aria-label="Dark mode">
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  )
}
