export async function fetchCSVData(url: string) {
  const res = await fetch(url)
  const text = await res.text()
  const rows = text.split("\n").map((row) => row.split(","))
  return rows
    .slice(1) // Skip header row
    .filter((row) => row.length >= 2) // Ensure row has at least two columns
    .map(([question, answer, ...rest]) => ({
      question: question ? question.trim() : "",
      answer: answer ? answer.trim() : "",
    }))
    .filter((item) => item.question && item.answer) // Remove items with empty question or answer
}
