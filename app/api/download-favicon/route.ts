import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const faviconUrl = "https://storage2.snappages.site/Z97BXX/assets/images/15678444_2000x2000_500.png"
  const response = await fetch(faviconUrl)
  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const publicDir = path.join(process.cwd(), "public")
  const filePath = path.join(publicDir, "favicon.png")

  fs.writeFileSync(filePath, buffer)

  return NextResponse.json({ message: "Favicon downloaded and saved successfully" })
}
