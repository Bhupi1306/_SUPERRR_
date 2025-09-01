import { useState,useRef,useEffect } from "react"
import { Task } from "./Task"
import PlusCircle from "../svg/PlusCircle"
import { useTasks } from "./useTask"
import { motion, AnimatePresence } from "framer-motion";

export const Todo = () => {
    const [expand, setExpand] = useState(false)
    const [tasks, setTasks] = useTasks()
    const menuRef = useRef(null)
    const [hovered, setHovered] = useState(false)
    const [addEventListener, setAddEventListener] = useState(false)


    
    useEffect(() => {
         
    function handleClickOutside(evt) {
      if (menuRef.current && !menuRef.current.contains(evt.target)) {
        console.log("Clicked outside, collapsing menu")
        setExpand(false)
      }
    }

    if (expand) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
    }, [expand]) 
    

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
        setAddEventListener(false)
    const newTask = {
      id: Date.now(),
        taskName: taskName,
        done: false,}
    setTasks((prev) => [...prev, newTask])}    


    /*View calling*/
    return (
        <>
            <div ref={menuRef} className={`absolute bottom-18 right-10 w-64`} >
                <div onMouseLeave={() => {setHovered(false)}}>
                <div className={` relative bg-white/20 backdrop-blur-sm rounded-lg text-white p-4  shadow-lg max-h-[30rem]
                    ${hovered || expand?"opacity-100 scale-100 ":"opacity-0 scale-90"}
                    ${expand ? "max-h-[30rem]" : "max-h-[10rem]"}
                     transition-all duration-300 ease-in-out 
                    absolute bg-white shadow-lg rounded-xl p-4
                    `}
                    >
                    <h3 className="mb-1 font-semibold text-[1.5rem]">Todo</h3>


                    <div className="max-h-[26rem] overflow-y-auto overflow-x-hidden">
                        {(expand ? tasks : tasks.slice(0, 3)).map((task) => (
                            <motion.div>
                                <Task key={task.id} {...task} onToggle={() => toggleTask(task.id)} onEdit ={editTask} onDelete={()=> deleteTask(task.id)} />
                            </motion.div>
                        ))}
                       

                        <div className={`ml-3 mt-2 text-[0.9rem] opacity-60 transition duration-100 cursor-pointer ${expand?"":"hidden"} w-fit
                            hover:opacity-100`}>
                            {!addEventListener && (
                                <>
                                    <motion.div>
                                        <p className={`inline`}  
                                            onClick={()=>{setAddEventListener(prev=>!prev)}}
                                        >
                                            + Add task
                                        </p>
                                    </motion.div>
                                    </>
                                )}

                            {addEventListener && ( 
                                <>
                                    <input  onKeyUp={e => e.key === "Enter" && addTask(e.currentTarget.value)} type="text" placeholder="+ Add task" className="w-[13rem] mt-2 p-1 focus:outline-none text-sm" />
                                    <hr className="mb-3"/>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full bg-black text-[1.2rem] text-center relative ">
                    <div className="w-full absolute -bottom-10 left-0 ">
                        <p className="cursor-pointer inline text-white underline"
                        onMouseEnter={() => {setHovered(true)}}
                        
                        onClick={() => {setAddEventListener(false),setExpand((prev) => !prev)}}
                        >todo</p>
                    </div>
                </div>
             </div>   
        </div>
        
        </>
    )
}
