import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { username, password } = await request.json()

  if (username === "braddcorp" && password === "platter-amusing-patience-spending-evasion-catfight") {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ success: false }, { status: 401 })
  }
}
