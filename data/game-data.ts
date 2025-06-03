import { genesisData } from "./genesis-data"
import { exodusData } from "./exodus-data"
// Import other data files as needed

export interface GameItem {
  id: string
  question: string
  answer: string
  category: string
  set: "A" | "B"
}

export type GameData = {
  [key: string]: GameItem[]
}

export const gameData: GameData = {
  genesis: genesisData,
  exodus: exodusData,
  // Add other categories here
}

export function getGameData(category: string, set?: "A" | "B"): GameItem[] {
  const data = gameData[category] || []
  return set ? data.filter((item) => item.set === set) : data
}

export function combineGameData(categoryA: string, categoryB: string): GameItem[] {
  return [...(gameData[categoryA] || []), ...(gameData[categoryB] || [])]
}

export function getAllCategories(): string[] {
  return Object.keys(gameData)
}

export function getRandomItems(category: string, count: number, set?: "A" | "B"): GameItem[] {
  const data = getGameData(category, set)
  return data.sort(() => 0.5 - Math.random()).slice(0, count)
}
