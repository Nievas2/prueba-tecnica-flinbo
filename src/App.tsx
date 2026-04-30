import Filterbar from "@/components/Filterbar"
import TaskList from "@/components/TaskList"

function App() {
  return (
    <main className="flex flex-col p-8 justify-center items-center min-h-screen w-full bg-slate-200 dark:bg-slate-900 text-black dark:text-white">
      <section className="flex flex-col gap-4 p-4 rounded-xl min-w-96 max-w-96 min-h-125 max-h-125 bg-blue-400 dark:bg-blue-900 shadow-gray-600 shadow-md relative">
        <div>
          <h1 className="text-3xl font-bold text-center">To Do</h1>
          <p className="text-sm text-gray-700 dark:text-gray-500 font-extralight text-center">
            Prueba tecnica para ZOEGA (Flinbo)
          </p>
        </div>

        <Filterbar />

        <TaskList />
      </section>
    </main>
  )
}

export default App
