import { NextResponse } from "next/server"

const timelineEvents = [
  // Genesis events
  { event: "Creation", reference: "Genesis 1 & 2" },
  { event: "Fall of Man", reference: "Genesis 3" },
  { event: "Noah's Ark", reference: "Genesis 6-9" },
  { event: "Tower of Babel", reference: "Genesis 11" },
  { event: "Call of Abraham", reference: "Genesis 12" },
  // Matthew events
  { event: "Birth of Jesus", reference: "Matthew 1-2" },
  { event: "Baptism of Jesus", reference: "Matthew 3" },
  { event: "Sermon on the Mount", reference: "Matthew 5-7" },
  { event: "Crucifixion of Jesus", reference: "Matthew 27" },
  { event: "Resurrection of Jesus", reference: "Matthew 28" },
  // John events
  { event: "Jesus turns water into wine", reference: "John 2" },
  { event: "Jesus feeds the 5000", reference: "John 6" },
  { event: "Jesus raises Lazarus", reference: "John 11" },
  { event: "The Last Supper", reference: "John 13" },
  { event: "Jesus appears to disciples after resurrection", reference: "John 20" },
]

export async function GET() {
  return NextResponse.json(timelineEvents)
}
