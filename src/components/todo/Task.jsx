import DoubleTick from "../svg/DoubleTick"
import { Pencil } from "../svg/Pencil"

export const Task = ({ id, taskName, done, onToggle,onEdit,onDelete }) => {
    return (
        <div className="p-1 flex items-center ml-3 ">
            {/* <input type="checkbox"
                 checked={done}
                onChange={() => onToggle(id)} 
                className="h-[0.8rem] w-[0.8rem] text-blue-600 rounded ml-1 hidden" /> */}
            {done ? (<div className="h-3 w-3 border-2 rounded-2xl mt-0.5 "></div>):
            <DoubleTick size={14} color="#ddddddf2"/>}
            <div className=" w-full flex items-center">
                <input type="text " 
                    value={taskName}
                     onChange={(e) => onEdit(id, e.target.value)} 
                    className="relative w-[10rem] text-[1.05rem] leading-0.5  text-white ml-1 px-1 border-b-1 border-transparent
                    focus:outline-none focus:border-white/50 cursor-default"/>
                    <Pencil size={12} color="#ddddddf2" strokeWidth={7}/>
            </div>
        </div>
    )
}











