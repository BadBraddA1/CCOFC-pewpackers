"use server"
import { neon } from "@neondatabase/serverless"
import { put, del } from "@vercel/blob"

// Placeholder for addQuestionAnswer to resolve deployment error
export async function addQuestionAnswer(data: any) {
  console.warn("[Action:addQuestionAnswer] Placeholder function called. Implement or remove as needed.", data)
  // Depending on what this function is supposed to do, you might return a success/error object
  // For now, returning a simple success to avoid breaking calling code expecting a response.
  return { success: true, message: "Placeholder for addQuestionAnswer" }
}

export async function getLeaderboard() {
  const sql = neon(process.env.DATABASE_URL!)
  try {
    await createLeaderboardTable() // Ensure table exists and has all columns
    const leaderboard = await sql`
    SELECT 
      name, 
      score, 
      category, 
      game_mode, 
      created_at
    FROM leaderboard
    ORDER BY score DESC
    LIMIT 10
  `
    // console.log("Fetched leaderboard data:", leaderboard)
    return leaderboard
  } catch (error) {
    console.error("Error fetching leaderboard:", error)
    throw error
  }
}

export async function updateLeaderboardEntry(entry: {
  id: number
  name: string
  score: number
  category: string
  game_mode: string
}) {
  const sql = neon(process.env.DATABASE_URL!)
  try {
    await sql`
    UPDATE leaderboard
    SET name = ${entry.name}, score = ${entry.score}, category = ${entry.category}, game_mode = ${entry.game_mode}
    WHERE id = ${entry.id}
  `
  } catch (error) {
    console.error("Error updating leaderboard entry:", error)
    throw error
  }
}

export async function deleteLeaderboardEntry(id: number) {
  const sql = neon(process.env.DATABASE_URL!)
  try {
    await sql`
    DELETE FROM leaderboard
    WHERE id = ${id}
  `
  } catch (error) {
    console.error("Error deleting leaderboard entry:", error)
    throw error
  }
}

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

export async function addScore(name: string, score: number, category: string, game_mode: string) {
  const sql = neon(process.env.DATABASE_URL!)
  try {
    await sql`
    INSERT INTO leaderboard (name, score, category, game_mode)
    VALUES (${name}, ${score}, ${category}, ${game_mode})
  `
    return { success: true }
  } catch (error) {
    console.error("Error adding score:", error)
    throw error
  }
}

export async function uploadPdf(formData: FormData) {
  const sql = neon(process.env.DATABASE_URL!)
  const displayName = formData.get("displayName") as string
  const pdfFile = formData.get("pdfFile") as File

  if (!displayName || !pdfFile || pdfFile.size === 0) {
    return { error: "Display name and PDF file are required." }
  }

  try {
    const blob = await put(pdfFile.name, pdfFile, {
      access: "public",
      pathname: `pdfs/${Date.now()}-${pdfFile.name}`,
    })

    await sql`
    INSERT INTO pdfs (name, file_name, blob_url)
    VALUES (${displayName}, ${pdfFile.name}, ${blob.url})
  `
    return { success: true, blob }
  } catch (error) {
    console.error("Error uploading PDF:", error)
    return { error: "Failed to upload PDF." }
  }
}

export async function getPdfs() {
  const sql = neon(process.env.DATABASE_URL!)
  try {
    const pdfs = await sql`
    SELECT id, name, file_name, blob_url, uploaded_at
    FROM pdfs
    ORDER BY uploaded_at DESC
  `
    return pdfs
  } catch (error) {
    console.error("Error fetching PDFs:", error)
    return []
  }
}

export async function deletePdf(id: number, blobUrl: string) {
  const sql = neon(process.env.DATABASE_URL!)
  try {
    await del(blobUrl)
    await sql`
    DELETE FROM pdfs
    WHERE id = ${id}
  `
    return { success: true }
  } catch (error) {
    console.error("Error deleting PDF:", error)
    if (error && typeof error === "object" && "status" in error && error.status === 404) {
      await sql`
          DELETE FROM pdfs
          WHERE id = ${id}
      `
      return { success: true, warning: "Blob not found, but DB entry deleted." }
    }
    return { error: "Failed to delete PDF." }
  }
}

export async function updatePdfDisplayName(id: number, newDisplayName: string) {
  const sql = neon(process.env.DATABASE_URL!)
  if (!newDisplayName.trim()) {
    return { error: "Display name cannot be empty." }
  }
  try {
    await sql`
    UPDATE pdfs
    SET name = ${newDisplayName}
    WHERE id = ${id}
  `
    return { success: true }
  } catch (error) {
    console.error("Error updating PDF display name:", error)
    return { error: "Failed to update PDF display name." }
  }
}

export async function getPdfById(id: number) {
  console.log(`[Action:getPdfById] Attempting to fetch PDF with ID: ${id}`)
  const sql = neon(process.env.DATABASE_URL!)
  if (!process.env.DATABASE_URL) {
    console.error("[Action:getPdfById] DATABASE_URL is not set!")
    return null
  }
  try {
    const result = await sql`
      SELECT id, name, blob_url, file_name 
      FROM pdfs 
      WHERE id = ${id}
    `
    console.log(`[Action:getPdfById] SQL query result for ID ${id}:`, JSON.stringify(result))
    if (result.length > 0) {
      console.log(`[Action:getPdfById] Found PDF data:`, JSON.stringify(result[0]))
      return result[0] as { id: number; name: string; blob_url: string; file_name: string }
    }
    console.log(`[Action:getPdfById] No PDF found with ID: ${id}`)
    return null
  } catch (error) {
    console.error(`[Action:getPdfById] Error fetching PDF by ID (${id}):`, error)
    return null
  }
}
