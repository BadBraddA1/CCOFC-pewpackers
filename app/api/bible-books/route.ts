import { NextResponse } from "next/server"

const bibleBooks = [
  { book: "Genesis", summary: "The Book of Beginnings" },
  { book: "Exodus", summary: "From Egypt to Sinai" },
  { book: "Leviticus", summary: "The Law of the Priests" },
  { book: "Numbers", summary: "The Wilderness Wanderings" },
  { book: "Deuteronomy", summary: "The Book of Remembrance" },
  { book: "Joshua", summary: "The Conquest of Canaan" },
  { book: "Judges", summary: "Cycling from Sin to Salvation" },
  { book: "Ruth", summary: "A Love Story" },
  { book: "I Samuel", summary: "Transitioning from Judges to Kings" },
  { book: "II Samuel", summary: "The Reign of David" },
  // Add more books as needed
]

export async function GET() {
  return NextResponse.json(bibleBooks)
}
