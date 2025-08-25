import { useState, useEffect } from "react"

export function useTasks() {
  const [tasks, setTasks] = useState([])
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    chrome.storage.local.get(["tasks"], (result) => {
      if (result.tasks) {
        console.log("Loaded tasks from storage:", result.tasks)
        setTasks(result.tasks)
      } else {
        console.log("No tasks found, starting with empty list.")
        setTasks([])
      }
      setLoaded(true)
    });
  }, []);


  useEffect(() => {
    if (!loaded) return 
    chrome.storage.local.set({ tasks }, () => {
      console.log("Saved tasks to storage:", tasks)
    })
  }, [tasks, loaded])

  return [tasks, setTasks]
}
