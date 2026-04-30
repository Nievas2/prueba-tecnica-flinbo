import type { Task } from "@/types/task"
import { createContext } from "react"

export interface TaskContextType {
  handleComplete: (id: number) => void
  handleDelete: (id: number) => void
  tasks?: Task[]
  loading: boolean
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

