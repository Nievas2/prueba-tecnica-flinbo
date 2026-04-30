import { useTasks } from "@/hooks/Tasks/useTasks"
import type { Task } from "@/types/task"
import { Trash } from "lucide-react"

interface TaskCardProps {
  task: Task
}
const TaskCard = ({ task }: TaskCardProps) => {
  const { handleComplete, handleDelete } = useTasks()
  return (
    <div className="flex p-2 gap-4 bg-sky-300 text-black dark:bg-blue-950 dark:text-white rounded-md">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleComplete(task.id)}
      />
      <span className={`w-full ${task.completed && "line-through"}`}>
        {task.title}
      </span>
      <button
        className="cursor-pointer group"
        onClick={() => handleDelete(task.id)}
      >
        <Trash className="size-4 group-hover:text-red-800 transition-colors duration-200" />
      </button>
    </div>
  )
}
export default TaskCard
