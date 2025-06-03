"use client"

import HomePage from "../components/home-page"
import { ThemeToggle } from "@/components/theme-toggle"
import Leaderboard from "@/components/leaderboard"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react" // Import an icon

export default function HomeClient() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center w-full">Flash Cards & Quizzes</h1>
          <ThemeToggle />
        </div>

        <Card className="w-full mb-8">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Announcements</h2>
            <p>Introducing a New Game Mode: Chapter Challenge</p>
          </CardContent>
        </Card>

        <Card className="w-full mb-8">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FileText className="w-12 h-12 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">View Documents & PDFs</h2>
            <p className="text-muted-foreground mb-4">Access study materials, guides, and other helpful documents.</p>
            <Link href="/pdfs" passHref>
              <Button>Go to PDF Library</Button>
            </Link>
          </CardContent>
        </Card>

        <HomePage />
        <Leaderboard limit={3} />
        <div className="mt-4 flex justify-center">
          <Link href="/leaderboard" passHref>
            <Button variant="outline">View Full Leaderboard</Button>
          </Link>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/dev-log" passHref>
            <Button variant="outline" className="w-full">
              View Development Log
            </Button>
          </Link>
          <Link href="https://clintoncofc.com/" passHref target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full mt-4 sm:mt-0">
              The Church of Christ - Clinton, IL
            </Button>
          </Link>
        </div>
      </div>
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p className="mb-2">
          Thank you for your interest in this work. May the Lord bless our children as we endeavor to increase their
          knowledge of His word and their love for Him!
        </p>
        <p>All scripture quotations, unless otherwise indicated, are taken from the New King James Version® (NKJV).</p>
        <p className="mt-2">NKJV Copyright © 1982 by Thomas Nelson, Inc. Used by permission. All rights reserved.</p>
        <p className="mt-2">
          For technical issues, contact:{" "}
          <Link
            href="https://braddcorp.com/contact/"
            className="text-green-500 hover:text-green-400 transition-colors duration-200 shadow-[0_0_2px_#22c55e]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adin Bradd
          </Link>
        </p>
      </footer>
    </main>
  )
}
