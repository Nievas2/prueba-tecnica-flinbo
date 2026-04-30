import TaskCardSkeleton from "@/components/skeletons/TaskCardSkeleton"
import TaskCard from "@/components/TaskCard"
import { useTasks } from "@/hooks/Tasks/useTasks"

const TaskList = () => {
  const { filtered, loading, filter } = useTasks()
  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {loading ? (
        Array.from({ length: 8 }).map(() => (
          <TaskCardSkeleton key={crypto.randomUUID()} />
        ))
      ) : filtered.length > 0 ? (
        filtered.map((task) => <TaskCard task={task} key={task.id} />)
      ) : (
        <div className="w-full h-56 flex items-center justify-center">
          <p className="text-lg text-gray-700 dark:text-gray-500 font-light">
            {filter == "pending"
              ? "No hay tareas pendientes"
              : filter == "all"
                ? "No hay tareas"
                : "No hay tareas completas"}
          </p>
        </div>
      )}
    </div>
  )
}
export default TaskList
