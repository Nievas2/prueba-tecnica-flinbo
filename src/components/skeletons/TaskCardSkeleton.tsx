const TaskCardSkeleton = () => {
  return (
    <div className="flex items-center p-3 gap-4 bg-sky-300 text-black dark:bg-blue-950 dark:text-white rounded-md">
      <div className="size-3 rounded-lg bg-indigo-400 opacity-45 animate-pulse" />
      <div className="w-full">
        <div className="h-3 w-48 rounded-lg bg-indigo-400 opacity-45 animate-pulse" />
      </div>
      <button className="size-4 rounded-lg bg-indigo-400 opacity-45 animate-pulse" />
    </div>
  )
}
export default TaskCardSkeleton
