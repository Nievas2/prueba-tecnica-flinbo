import { TaskContext } from "@/contexts/Task/TaskContext"
import type { Task } from "@/types/task"
import { useEffect, useState } from "react"

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filtered, setFiltered] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10.")
      .then((response) => response.json())
      .then((json) => {
        setTasks(json)
        setFiltered(json)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (filter === "all") {
      setFiltered(tasks)
    } else if (filter === "pending") {
      setFiltered(tasks.filter((task) => !task.completed))
    } else if (filter === "complete") {
      setFiltered(tasks.filter((task) => task.completed))
    }
  }, [tasks, filter])

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

  function handleFilters(filter: "all" | "pending" | "complete") {
    setFilter(filter)
    if (filter == "all") {
      return setFiltered(tasks)
    }
    if (filter == "pending") {
      return setFiltered(tasks.filter((task) => task.completed == false))
    }
    if (filter == "complete") {
      return setFiltered(tasks.filter((task) => task.completed == true))
    }
  }

  return (
    <TaskContext.Provider
      value={{
        handleComplete,
        handleDelete,
        handleFilters,
        loading,
        filter,
        filtered,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
