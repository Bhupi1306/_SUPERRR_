import { useState } from "react"
import { Task } from "./Task"
import { useTasks } from "./useTask"

export const Todo = () => {
    const [expand, setExpand] = useState(false)
    const [tasks, setTasks] = useTasks()


     const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }
  const editTask = (id, newName) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, taskName: newName } : task
      )
    )
  }
 const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
        taskName: taskName,
        done: false,}
    setTasks((prev) => [...prev, newTask])}    

    return (
        <>
            <div 
                className={`absolute  bg-white/10 backdrop-blur-sm rounded overflow-auto text-white p-4 w-64 shadow-lg 
                ${expand? "h-full bottom-0 right-0 w-[20rem] pt-8 pl-5" :"bottom-10 right-10 rounded-md"}`
            }>
                <h3 className="mb-2 font-semibold text-[1.1rem]">Todo</h3>

                {expand && (
                    <>
                    <input  onKeyUp={e => e.key === "Enter" && addTask(e.currentTarget.value)} type="text" placeholder="+ Add task" className="w-[13rem] mt-2 p-1 focus:outline-none text-sm" />
                    <hr className="mb-3"/>
                    </>
                )}

              {tasks.map((task) => (
        <Task key={task.id} {...task} onToggle={() => toggleTask(task.id)} onEdit ={editTask} onDelete={()=> deleteTask(task.id)} />
      ))}

                {!expand && (<p onClick={()=> {setExpand(prev => !prev)}} className="text-[0.875rem] leading-[1rem] mt-3 cursor-pointer">...view more</p>)}
            </div>
        </>
    )
}
