import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="w-full border-b">
      <div className="container flex justify-center items-center py-4">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PewPackers2025-z4JqMywdzDdYLpGrGPKMCxSBONBBzI.png"
            alt="Pew Packers Logo"
            width={300}
            height={80}
            style={{ width: "auto", height: "auto", maxWidth: "100%" }}
            className="mx-auto"
            priority
          />
        </Link>
      </div>
    </header>
  )
}
