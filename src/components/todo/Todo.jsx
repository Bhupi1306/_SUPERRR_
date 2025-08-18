export const Todo = () => {
    return (
        <>
            <div className="absolute bottom-20 right-10 bg-gray-800/50 backdrop-blur-md 
                        text-white rounded-2xl p-4 w-64 shadow-lg">
                <h3 className="mb-2 font-semibold">Todo</h3>
                <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><input type="checkbox"/> Task 1</li>
                    <li className="flex items-center gap-2"><input type="checkbox"/> Task 2</li>
                    <li className="flex items-center gap-2"><input type="checkbox"/> Task 3</li>
                    <li className="text-xs opacity-70">...view more</li>
                </ul>
            </div>
        </>
    )
}


