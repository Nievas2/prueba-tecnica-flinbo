import type { Task } from "@/types/task"
import { createContext } from "react"

export interface TaskContextType {
  handleComplete: (id: number) => void
  handleDelete: (id: number) => void
  handleFilters: (filter: "all" | "pending" | "complete") => void
  loading: boolean
  filter: string
  filtered: Task[]
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)
