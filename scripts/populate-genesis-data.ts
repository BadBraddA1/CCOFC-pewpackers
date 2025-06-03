import { addQuestionAnswer } from "../app/actions"

const genesisData = [
  { question: "Genesis 1", answer: "Creation: overall summary" },
  { question: "Genesis 2", answer: "Creation: specifics related to mankind" },
  { question: "Genesis 3", answer: "Sin enters the world" },
  // ... add all other Genesis data here
]

async function populateGenesisData() {
  for (const item of genesisData) {
    try {
      await addQuestionAnswer("genesis", item.question, item.answer)
      console.log(`Added: ${item.question}`)
    } catch (error) {
      console.error(`Error adding ${item.question}:`, error)
    }
  }
}

populateGenesisData().then(() => console.log("Genesis data population complete"))
