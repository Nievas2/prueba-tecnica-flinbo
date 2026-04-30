import TaskCardSkeleton from "@/components/skeletons/TaskCardSkeleton"
import TaskCard from "@/components/TaskCard"
import { useTasks } from "@/hooks/Tasks/useTasks"
import { useThemes } from "@/hooks/Theme/useTheme"
import { Moon, Sun } from "lucide-react"

function App() {
  const { filtered, loading, handleFilters, filter } = useTasks()
  const { theme, handleChangeTheme } = useThemes()

  return (
    <main className="flex flex-col p-8 justify-center items-center min-h-screen w-full bg-slate-200 dark:bg-slate-900 text-black dark:text-white">
      <section className="flex flex-col gap-4 p-4 rounded-xl min-w-96 max-w-96 min-h-125 max-h-125 bg-blue-400 dark:bg-blue-900 shadow-gray-600 shadow-md relative">
        <button
          onClick={handleChangeTheme}
          className="absolute top-2 right-2 flex h-8 w-16 items-center rounded-full bg-slate-200 p-1 transition-colors duration-300 focus:outline-none dark:bg-slate-700 cursor-pointer"
        >
          <div
            className={`flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
              theme == "dark" ? "translate-x-8" : "translate-x-0"
            }`}
          >
            {theme == "dark" ? (
              <Moon size={14} className="text-slate-700" />
            ) : (
              <Sun size={14} className="text-yellow-500" />
            )}
          </div>
        </button>
        <h1 className="text-2xl font-bold text-center">To Do</h1>

        <div className="flex">
          <button
            className={`w-full cursor-pointer ${filter == "all" && "bg-blue-600 dark:bg-blue-700 text-white font-bold"}`}
            onClick={() => handleFilters("all")}
          >
            All
          </button>
          <button
            className={`w-full cursor-pointer ${filter == "pending" && "bg-blue-600 dark:bg-blue-700 text-white font-bold"}`}
            onClick={() => handleFilters("pending")}
          >
            Pending
          </button>
          <button
            className={`w-full cursor-pointer ${filter == "complete" && "bg-blue-600 dark:bg-blue-700 text-white font-bold"}`}
            onClick={() => handleFilters("complete")}
          >
            Complete
          </button>
        </div>

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
                {
                  filter == "pending" ? "No hay tareas pendientes"
                    : filter == "all" ? "No hay tareas"
                     : "No hay tareas completas"
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default App
