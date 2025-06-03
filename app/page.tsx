import HomeClient from "./home-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Flash Cards & Quizzes",
  description: "Bible study application with flash cards and quizzes",
}

export default function Home() {
  return <HomeClient />
}
