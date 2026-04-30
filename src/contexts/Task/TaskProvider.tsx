import { TaskContext } from "@/contexts/Task/TaskContext"
import type { Task } from "@/types/task"
import { useEffect, useState } from "react"

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10.")
      .then((response) => response.json())
      .then((json) => {
        setTasks(json)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
      .finally(() => setLoading(false))
  }, [])

  function handleComplete(taskId: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function handleDelete(taskId: number) {
    setTasks((prev) => prev.filter((task) => task.id !== taskId))
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleComplete,
        handleDelete,
        loading,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
