import PDFViewer from "@/components/PDFViewer"

export default function SamplePDFPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sample PDF Viewer</h1>
      <PDFViewer pdfUrl="/sample.pdf" />
    </div>
  )
}
