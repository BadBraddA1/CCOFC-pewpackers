import { getPdfs } from "@/app/actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Download } from "lucide-react"

interface PdfEntry {
  id: number
  name: string // This is the display name
  file_name: string // Original file name
  blob_url: string
  uploaded_at: string
}

export default async function PdfsPage() {
  const pdfs = (await getPdfs()) as PdfEntry[]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Documents & PDFs</CardTitle>
          </div>
          <p className="text-muted-foreground pt-2">Browse and download available PDF documents.</p>
        </CardHeader>
        <CardContent>
          {pdfs && pdfs.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60%]">Document Name</TableHead>
                  <TableHead>Uploaded</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pdfs.map((pdf) => (
                  <TableRow key={pdf.id}>
                    <TableCell className="font-medium">{pdf.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(pdf.uploaded_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button asChild variant="outline" size="sm">
                        {/* Update the Link href here */}
                        <Link href={`/api/pdfs/${pdf.id}`} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" />
                          View/Download
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-10">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-lg font-medium text-muted-foreground">
                No PDF documents are currently available.
              </p>
              <p className="text-sm text-muted-foreground">
                Please check back later or contact support if you believe this is an error.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
