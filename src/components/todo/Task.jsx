export const Task = ({ id, taskName, done, onToggle,onEdit,onDelete }) => {
    return (
        <div className=" bg-white/20 shadow-md shadow-black/25 backdrop-blur-xs rounded-md p-1 flex items-center mt-1.5 ml-3">
            <input type="checkbox"
                 checked={done}
                onChange={() => onToggle(id)} 
                className="h-[0.8rem] w-[0.8rem] text-blue-600 rounded ml-1" />
            <input type="text" 
                    value={taskName}
                     onChange={(e) => onEdit(id, e.target.value)} 
                    className=" w-[11rem] text-[0.9rem] leading-[1.125rem] text-white rounded px-2 py-0.5 focus:outline-none cursor-default"/>
            <button onClick={onDelete} className="text-white/70 hover:text-white ml-auto mr-1 text-sm font-bold">x</button>
        </div>
    )
}











