"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  getLeaderboard,
  updateLeaderboardEntry,
  deleteLeaderboardEntry,
  uploadPdf,
  getPdfs,
  deletePdf,
  updatePdfDisplayName,
} from "../actions"
import { Label } from "@/components/ui/label"

interface LeaderboardEntry {
  id: number
  name: string
  score: number
  category: string
  game_mode: string
  created_at: string
}

interface PdfEntry {
  id: number
  name: string
  file_name: string
  blob_url: string
  uploaded_at: string
}

export default function AdminDashboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<LeaderboardEntry | null>(null)
  const [filter, setFilter] = useState({ category: "", game_mode: "" })
  const [currentPage, setCurrentPage] = useState(1)
  const entriesPerPage = 10
  const [pdfs, setPdfs] = useState<PdfEntry[]>([])
  const [pdfDisplayName, setPdfDisplayName] = useState("")
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [isUploadingPdf, setIsUploadingPdf] = useState(false)
  const [editingPdfId, setEditingPdfId] = useState<number | null>(null)
  const [editingPdfName, setEditingPdfName] = useState("")

  useEffect(() => {
    fetchLeaderboard()
    fetchPdfs()
  }, [])

  const fetchLeaderboard = async () => {
    const data = await getLeaderboard()
    setLeaderboard(data)
  }

  const fetchPdfs = async () => {
    const pdfData = await getPdfs()
    setPdfs(pdfData as PdfEntry[]) // Cast if getPdfs return type is generic
  }

  const handleEdit = (entry: LeaderboardEntry) => {
    setEditingId(entry.id)
    setEditForm(entry)
  }

  const handleSave = async () => {
    if (editForm) {
      await updateLeaderboardEntry(editForm)
      setEditingId(null)
      setEditForm(null)
      fetchLeaderboard()
    }
  }

  const handleDelete = async (id: number) => {
    await deleteLeaderboardEntry(id)
    fetchLeaderboard()
  }

  const handlePdfUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!pdfFile || !pdfDisplayName) {
      alert("Please provide a display name and select a PDF file.")
      return
    }
    setIsUploadingPdf(true)
    const formData = new FormData()
    formData.append("displayName", pdfDisplayName)
    formData.append("pdfFile", pdfFile)

    const result = await uploadPdf(formData)
    setIsUploadingPdf(false)

    if (result.error) {
      alert(`Error: ${result.error}`)
    } else {
      alert("PDF uploaded successfully!")
      setPdfDisplayName("")
      setPdfFile(null)
      const fileInput = document.getElementById("pdfFile") as HTMLInputElement
      if (fileInput) fileInput.value = "" // Reset file input
      fetchPdfs() // Refresh PDF list
    }
  }

  const handleDeletePdf = async (id: number, blobUrl: string) => {
    if (!confirm("Are you sure you want to delete this PDF?")) return
    const result = await deletePdf(id, blobUrl)
    if (result.error) {
      alert(`Error: ${result.error}`)
    } else {
      alert("PDF deleted successfully!")
      fetchPdfs() // Refresh PDF list
    }
  }

  const handleEditPdfName = (pdf: PdfEntry) => {
    setEditingPdfId(pdf.id)
    setEditingPdfName(pdf.name)
  }

  const handleSavePdfName = async (id: number) => {
    if (!editingPdfName.trim()) {
      alert("Display name cannot be empty.")
      return
    }
    const result = await updatePdfDisplayName(id, editingPdfName)
    if (result.error) {
      alert(`Error: ${result.error}`)
    } else {
      alert("PDF name updated successfully!")
      setEditingPdfId(null)
      setEditingPdfName("")
      fetchPdfs()
    }
  }

  const filteredLeaderboard = leaderboard.filter(
    (entry) =>
      (filter.category === "" || entry.category === filter.category) &&
      (filter.game_mode === "" || entry.game_mode === filter.game_mode),
  )

  const pageCount = Math.ceil(filteredLeaderboard.length / entriesPerPage)
  const paginatedLeaderboard = filteredLeaderboard.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage,
  )

  const uniqueCategories = Array.from(new Set(leaderboard.map((entry) => entry.category)))
  const uniqueGameModes = Array.from(new Set(leaderboard.map((entry) => entry.game_mode)))

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Admin Dashboard - All Game Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-4">
            <Select onValueChange={(value) => setFilter((prev) => ({ ...prev, category: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {uniqueCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setFilter((prev) => ({ ...prev, game_mode: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Game Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Game Modes</SelectItem>
                {uniqueGameModes.map((mode) => (
                  <SelectItem key={mode} value={mode}>
                    {mode}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Game Mode</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedLeaderboard.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>
                    {editingId === entry.id ? (
                      <Input
                        value={editForm?.name || ""}
                        onChange={(e) => setEditForm({ ...editForm!, name: e.target.value })}
                      />
                    ) : (
                      entry.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === entry.id ? (
                      <Input
                        type="number"
                        value={editForm?.score || 0}
                        onChange={(e) => setEditForm({ ...editForm!, score: Number.parseInt(e.target.value) })}
                      />
                    ) : (
                      entry.score
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === entry.id ? (
                      <Input
                        value={editForm?.category || ""}
                        onChange={(e) => setEditForm({ ...editForm!, category: e.target.value })}
                      />
                    ) : (
                      entry.category
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === entry.id ? (
                      <Input
                        value={editForm?.game_mode || ""}
                        onChange={(e) => setEditForm({ ...editForm!, game_mode: e.target.value })}
                      />
                    ) : (
                      entry.game_mode
                    )}
                  </TableCell>
                  <TableCell>{new Date(entry.created_at).toLocaleString()}</TableCell>
                  <TableCell>
                    {editingId === entry.id ? (
                      <Button onClick={handleSave}>Save</Button>
                    ) : (
                      <Button onClick={() => handleEdit(entry)}>Edit</Button>
                    )}
                    <Button variant="destructive" className="ml-2" onClick={() => handleDelete(entry.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-between items-center mt-4">
            <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              Previous
            </Button>
            <span>
              Page {currentPage} of {pageCount}
            </span>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount))}
              disabled={currentPage === pageCount}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* PDF Management Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">PDF Management</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePdfUpload} className="space-y-4 mb-6">
            <div>
              <Label htmlFor="pdfDisplayName">PDF Display Name</Label>
              <Input
                id="pdfDisplayName"
                type="text"
                value={pdfDisplayName}
                onChange={(e) => setPdfDisplayName(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="pdfFile">PDF File</Label>
              <Input
                id="pdfFile"
                type="file"
                accept=".pdf"
                onChange={(e) => setPdfFile(e.target.files ? e.target.files[0] : null)}
                required
                className="mt-1"
              />
            </div>
            <Button type="submit" disabled={isUploadingPdf}>
              {isUploadingPdf ? "Uploading..." : "Upload PDF"}
            </Button>
          </form>

          <h3 className="text-lg font-semibold mb-2">Uploaded PDFs</h3>
          {pdfs.length === 0 ? (
            <p>No PDFs uploaded yet.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Display Name</TableHead>
                  <TableHead>Original Filename</TableHead>
                  <TableHead>Link</TableHead>
                  <TableHead>Uploaded At</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pdfs.map((pdf) => (
                  <TableRow key={pdf.id}>
                    <TableCell>
                      {editingPdfId === pdf.id ? (
                        <Input
                          value={editingPdfName}
                          onChange={(e) => setEditingPdfName(e.target.value)}
                          className="w-auto"
                        />
                      ) : (
                        pdf.name
                      )}
                    </TableCell>
                    <TableCell>{pdf.file_name}</TableCell>
                    <TableCell>
                      <a
                        href={pdf.blob_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View PDF
                      </a>
                    </TableCell>
                    <TableCell>{new Date(pdf.uploaded_at).toLocaleString()}</TableCell>
                    <TableCell className="space-x-2">
                      {editingPdfId === pdf.id ? (
                        <Button size="sm" onClick={() => handleSavePdfName(pdf.id)}>
                          Save
                        </Button>
                      ) : (
                        <Button size="sm" onClick={() => handleEditPdfName(pdf)}>
                          Edit Name
                        </Button>
                      )}
                      <Button variant="destructive" size="sm" onClick={() => handleDeletePdf(pdf.id, pdf.blob_url)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
