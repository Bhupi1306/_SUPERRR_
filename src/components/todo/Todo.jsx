import { useState } from "react"
import { Task } from "./Task"

export const Todo = () => {
    const [expand, setExpand] = useState(false)

    return (
        <>
            <div 
                className={`absolute  bg-white/20 backdrop-blur-md rounded overflow-auto text-white p-4 w-64 shadow-lg 
                ${expand? "h-full bottom-0 right-0 w-[20rem] pt-8 pl-5" :"bottom-10 right-10 rounded-md"}`
            }>
                <h3 className="mb-2 font-semibold text-[1.1rem]">Todo</h3>

                {expand && (
                    <>
                    <input type="text" placeholder="+ Add task" className="w-[13rem] mt-2 p-1 focus:outline-none text-sm" />
                    <hr className="mb-3"/>
                    </>
                )}

                <Task/>
                <Task/>
                <Task/>

                {!expand && (<p className="text-[0.875rem] leading-[1rem] mt-3">...view more</p>)}
            </div>
        </>
    )
}
