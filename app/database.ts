"use server"
import { neon } from "@neondatabase/serverless"

async function createLeaderboardTable() {
  const sql = neon(process.env.DATABASE_URL!)
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS leaderboard (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        score INTEGER NOT NULL,
        category VARCHAR(255),
        game_mode VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `
  } catch (error) {
    console.error("Error creating leaderboard table:", error)
    throw error
  }
}

export { createLeaderboardTable }
