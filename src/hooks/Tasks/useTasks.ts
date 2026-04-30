import { TaskContext, type TaskContextType } from "@/contexts/Task/TaskContext"
import { useContext } from "react"

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("useTasks must be used within an TaskProvider")
  }
  return context
}
