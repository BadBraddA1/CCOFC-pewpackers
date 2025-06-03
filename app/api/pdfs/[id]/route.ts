import { type NextRequest, NextResponse } from "next/server"
import { getPdfById } from "@/app/actions" // Ensure this path is correct

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  console.log(`[API:/api/pdfs/[id]] Received GET request for ID: ${params.id}`)

  const pdfId = Number.parseInt(params.id, 10)

  if (isNaN(pdfId)) {
    console.error(`[API:/api/pdfs/[id]] Invalid PDF ID format: ${params.id}`)
    return new NextResponse("Invalid PDF ID", { status: 400 })
  }
  console.log(`[API:/api/pdfs/[id]] Parsed PDF ID: ${pdfId}`)

  let pdfInfo
  try {
    pdfInfo = await getPdfById(pdfId)
    console.log(`[API:/api/pdfs/[id]] Result from getPdfById for ID ${pdfId}:`, JSON.stringify(pdfInfo))
  } catch (error) {
    console.error(`[API:/api/pdfs/[id]] Critical error calling getPdfById for ID ${pdfId}:`, error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error during getPdfById"
    return new NextResponse(`Error retrieving PDF information: ${errorMessage}`, { status: 500 })
  }

  if (!pdfInfo || !pdfInfo.blob_url) {
    console.error(
      `[API:/api/pdfs/[id]] PDF info not found or blob_url missing for ID ${pdfId}. PDFInfo:`,
      JSON.stringify(pdfInfo),
    )
    return new NextResponse("PDF not found or blob URL missing", { status: 404 })
  }
  console.log(
    `[API:/api/pdfs/[id]] PDF info for ID ${pdfId}: blob_url=${pdfInfo.blob_url}, file_name=${pdfInfo.file_name}`,
  )

  try {
    console.log(`[API:/api/pdfs/[id]] Attempting to fetch from blob URL: ${pdfInfo.blob_url}`)
    const blobResponse = await fetch(pdfInfo.blob_url)
    console.log(`[API:/api/pdfs/[id]] Blob fetch response status: ${blobResponse.status} ${blobResponse.statusText}`)

    if (!blobResponse.ok || !blobResponse.body) {
      const errorBodyText = await blobResponse.text().catch(() => "Could not read error body from blob response")
      console.error(
        `[API:/api/pdfs/[id]] Failed to fetch PDF from blob storage: ${blobResponse.status} ${blobResponse.statusText}. Response body: ${errorBodyText}`,
      )
      return new NextResponse("Failed to retrieve PDF from storage", { status: blobResponse.status })
    }
    console.log(
      `[API:/api/pdfs/[id]] Successfully fetched PDF from blob for ID ${pdfId}. Content-Length: ${blobResponse.headers.get("Content-Length")}, Content-Type: ${blobResponse.headers.get("Content-Type")}`,
    )

    const headers = new Headers()
    headers.set("Content-Type", "application/pdf") // Ensure this is application/pdf
    const encodedFilename = encodeURIComponent(pdfInfo.file_name)
    headers.set("Content-Disposition", `inline; filename*=UTF-8''${encodedFilename}`)
    console.log(
      `[API:/api/pdfs/[id]] Set response headers for ID ${pdfId}:`,
      JSON.stringify(Object.fromEntries(headers.entries())),
    )

    const readableStream = blobResponse.body
    console.log(`[API:/api/pdfs/[id]] Returning PDF stream for ID ${pdfId}`)
    return new NextResponse(readableStream, {
      status: 200,
      headers: headers,
    })
  } catch (error) {
    console.error(`[API:/api/pdfs/[id]] Error during blob fetch or response streaming for ID ${pdfId}:`, error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error during streaming"
    return new NextResponse(`Internal server error while serving PDF: ${errorMessage}`, { status: 500 })
  }
}
