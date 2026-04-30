import TaskCard from "@/components/TaskCard"
import { useTasks } from "@/hooks/Tasks/useTasks"
import { Loader } from "lucide-react"

function App() {
  const { filtered, loading, handleFilters, filter } = useTasks()

  return (
    <main className="flex flex-col p-8 justify-center items-center min-h-screen w-full bg-slate-900 text-white">
      <section className="flex flex-col gap-4 p-4 rounded-xl min-w-96 max-w-96 bg-blue-900 shadow-gray-600 shadow-md">
        <h1 className="text-2xl font-bold text-center">To Do</h1>

        <div className="flex">
          <button
            className={`w-full cursor-pointer ${filter == "all" && "bg-blue-700"}`}
            onClick={() => handleFilters("all")}
          >
            All
          </button>
          <button
            className={`w-full cursor-pointer ${filter == "pending" && "bg-blue-700"}`}
            onClick={() => handleFilters("pending")}
          >
            Pending
          </button>
          <button
            className={`w-full cursor-pointer ${filter == "complete" && "bg-blue-700"}`}
            onClick={() => handleFilters("complete")}
          >
            Complete
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {loading ? (
            <>
              <Loader className="animate-spin" />
              Cargando
            </>
          ) : (
            filtered.map((task) => <TaskCard task={task} key={task.id} />)
          )}
        </div>
      </section>
    </main>
  )
}

export default App
