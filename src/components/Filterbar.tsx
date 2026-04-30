import { useTasks } from "@/hooks/Tasks/useTasks"
import { useThemes } from "@/hooks/Theme/useTheme"
import { Moon, Sun } from "lucide-react"

const Filterbar = () => {
  const { handleFilters, filter } = useTasks()
  const { theme, handleChangeTheme } = useThemes()
  return (
    <>
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
    </>
  )
}
export default Filterbar
