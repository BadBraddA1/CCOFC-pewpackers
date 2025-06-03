import { NextResponse } from "next/server"

const attributes = [
  { attribute: "God is one", reference: "Deuteronomy 6:4" },
  { attribute: "God is eternal", reference: "Psalm 90:2" },
  { attribute: "God is all-knowing", reference: "I John 3:20" },
  { attribute: "God is all-powerful", reference: "Jeremiah 32:17" },
  { attribute: "God is Spirit", reference: "John 4:24" },
  { attribute: "God is just", reference: "Revelation 15:3" },
  { attribute: "God is faithful", reference: "II Timothy 2:13" },
  { attribute: "God is holy", reference: "I Peter 1:15,16" },
  { attribute: "God is love", reference: "I John 4:8,9" },
  { attribute: "God is longsuffering", reference: "II Peter 3:9" },
  { attribute: "God is merciful", reference: "I Peter 1:3" },
  { attribute: "God is gracious", reference: "Psalm 116:5" },
  { attribute: "God is our Savior", reference: "Jude 25" },
  { attribute: "God is light", reference: "I John 1:5" },
  { attribute: "God is our helper", reference: "Psalm 46:1" },
  { attribute: "God is a consuming fire", reference: "Hebrews 12:29" },
]

export async function GET() {
  return NextResponse.json(attributes)
}
