import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TimelinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">Timeline Challenge</h1>
          <div className="flex items-center gap-4">
            <Link href="/" passHref>
              <Button variant="outline">Home</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
        <p className="text-center text-lg">Timeline Challenge game coming soon!</p>
      </div>
    </main>
  )
}
