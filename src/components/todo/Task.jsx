import DoubleTick from "../svg/DoubleTick"
import "./task.css"
import { useRef, useState } from "react"
import { Pencil } from "lucide-react"
import { Check } from "lucide-react"
export const Task = ({ id, taskName, done, onToggle,onEdit,onDelete }) => {

    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);

     const handleEditClick = () => {
    setEditing(true);
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0) // ensure re-render before focus
  }

    return (
        <div className="p-1 flex items-center ml-3 ">
            {/* <input type="checkbox"
                 checked={done}
                onChange={() => onToggle(id)} 
                className="h-[0.8rem] w-[0.8rem] text-blue-600 rounded ml-1 hidden" /> */}
<button onClick={onToggle} className="relative flex items-center justify-center w-5 h-5">
  {/* Circle background */}
  <div
    className={`
      absolute inset-0 rounded-full border-2
      transition-all duration-300 ease-in-out
      ${done ? "bg-green-500 border-green-500 scale-110" : "bg-transparent border-gray-400"}
    `}
  ></div>

  {/* Tick icon */}
  <Check
    size={12}
    className={`
      text-white transition-all duration-300 ease-in-out
      ${done ? "opacity-100 scale-100" : "opacity-0 scale-50"}
    `}
  />
</button>



            <div className=" w-full flex items-center  ">
                <span className={`${done? "strikethrough":""}`}
                onAnimationEnd={() => {
                if (done) {
                onDelete(id);
                    }
                }}    >
                <input 
                ref={inputRef}
                type="text " 
                    value={taskName}
                    disabled={!editing}
                    onChange={(e) => onEdit(id, e.target.value)}
                    onBlur={() => setEditing(false)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setEditing(false);
                        }
                    }} 
                    className={`relative w-[10rem] text-[1.05rem] leading-0.5  text-white ml-1 px-1 border-b-1 border-transparent
                    focus:outline-none focus:border-white/50 cursor-default ${editing ? "cursor-text" : "cursor-default"}`}
                    />
                   
                </span>
                <Pencil size={14} color="#ffffffaa" className="ml-1 opacity-60 hover:opacity-100 cursor-pointer"
                            onClick={handleEditClick}
                    ></Pencil>
            </div>
        </div>
    )
}











