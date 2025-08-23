import { useState } from "react"
import { Task } from "./Task"
import PlusCircle from "../svg/PlusCircle"

export const Todo = () => {
    const [expand, setExpand] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [tasks, setTasks] = useState([
        {id: 1, taskName: "Bring butter", done: true},
        {id: 2, taskName: "Task 2", done: false},
        {id: 2, taskName: "Task 2", done: false},
        {id: 2, taskName: "Task 2", done: false},
        {id: 2, taskName: "Task 2", done: false},
        {id: 2, taskName: "Task 2", done: false},
        {id: 2, taskName: "Task 2", done: false},




    ])
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
            <div className={`absolute bottom-18 right-10 w-64`}>
                <div className={`bg-white/20 backdrop-blur-sm rounded-lg text-white p-4  shadow-lg max-h-[30rem]
                    ${hovered?"":"hidden"}
                    `}>
                    <h3 className="mb-1 font-semibold text-[1.5rem]">Todo</h3>

                    {/* {expand && (
                        <>
                        <input onChange={(e)=>addTask(e.target.value)} type="text" placeholder="+ Add task" className="w-[13rem] mt-2 p-1 focus:outline-none text-sm" />
                        <hr className="mb-3"/>
                        </>
                    )} */}

                    <div className="max-h-[26rem] overflow-y-auto overflow-x-hidden">
                        {tasks.map((task) => (
                            <Task key={task.id} {...task} onToggle={() => toggleTask(task.id)} onEdit ={editTask} onDelete={()=> deleteTask(task.id)} />
                        ))}

                        {/* <div className={`mx-3 flex items-center opacity-40 ${expand?"":"hidden"}
                        transition duration-100
                        hover:opacity-100
                        `}>
                            <div className="bg-white/50 h-0.5 w-full"></div>
                            <p className="w-[50%] text-center flex justify-center">
                                <PlusCircle size={22} color="#ffffffaa"/>
                            </p>
                            <div className="bg-white/50 h-0.5 w-full"></div>
                        </div> */}

                        <div className={`inline ml-3 mt-2 text-[0.9rem] opacity-60 transition duration-100 cursor-pointer
                            ${expand?"":"hidden"} 
                            hover:opacity-100`}>
                            <p className="inline">+ Add task</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-black text-[1.2rem] text-center relative">
                    <div className="w-full absolute -bottom-10 left-0 ">
                        <p className="cursor-pointer inline text-white underline"
                        onMouseEnter={() => {setHovered(true)}}
                        onClick={() => {setExpand((prev) => !prev)}}
                        >todo</p>
                    </div>
                </div>
        </div>
        
        </>
    )
}
