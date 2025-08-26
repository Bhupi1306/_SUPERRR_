import { useEffect, useRef, useState } from "react"
import SearchIcon from "../svg/SearchIcon"

export const queryToken = "{{query}}"

export const SearchBar = () => {

    const[searching, setSearching] = useState(false)
    const[engine, setEngine] = useState("www.google.com/search")
    const searchRef = useRef(null)
    const inputRef = useRef(null)


    // Handling click outside the search bar
    useEffect(() => {
            
    function handleClickOutside(event) {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
        console.log("Clicked outside, collapsing menu")
        setSearching(false)
        }
    }

    if (searching) {
        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("touchstart", handleClickOutside)
    }

    return () => {
        document.removeEventListener("click", handleClickOutside)
        document.removeEventListener("touchstart", handleClickOutside)
    }
    }, [searching]) 

    // Handling ctrl + k
    useEffect(() => {
        if(searching) return

        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key.toLowerCase() === "/") {
                event.preventDefault();
                setSearching((prev) => (!prev))
            }
        }
            

        document.addEventListener("keydown", handleKeyDown)
    return () => {
        document.removeEventListener("keydown", handleKeyDown)
    }
    }, []) 

    // Handling the focus on search bar
    useEffect(() => {
        if(searching){
            inputRef.current.focus()
        }
    },[searching])
        

    // Redirecting user to query
    const redirectToSearch = (query) => {  
          if (!engine.includes(queryToken)) {
            window.location.href = `https://${engine}?q=${encodeURIComponent(query)}`
          } else {
            window.location.href = engine.replace(queryToken, encodeURIComponent(query))
          }
      }
    

    return (
        <>
            {/* Actual Search bar */}
            {searching && (<div className="w-screen h-screen absolute left-0 top-0 grid grid-rows-4 place-items-center bg-amber-50/20 backdrop-blur-sm z-100">
                <div ref={searchRef}  
                    className="row-start-2 flex justify-center items-center rounded-md bg-gray-50/85  w-[40rem] relative overflow-hidden"
                >
                    
                    <div className="px-4 py-2  border-r-1 border-gray-500/20 absolute left-0">G</div>

                    <div className="absolute right-3"><SearchIcon size={22} color="#00000055"/></div>

                    <input ref={inputRef} type="text" 
                        className=" w-full p-3 pl-13 rounded-md border-1 border-transparent focus:outline-none text-[1rem] text-black/85
                        focus:shadow-2xl focus:border-black/35" 
                        placeholder="Search anything"
                        onKeyUp={e => e.key === "Enter" && redirectToSearch(e.currentTarget.value)}
                     />
                </div>
                <div></div>
            </div>)}

            {/* Display on homescreen */}
            <div className="h-[2rem] w-[15rem] border-b-2 border-gray-50/50 text-white text-lg relative hover:border-gray-50"
            onClick={() => {setSearching(true)}} >
                <input type="text" placeholder="Ctrl + /"  className="h-full w-full pl-8 relative placeholder-gray-50 focus:outline-none"/>
                <SearchIcon size={23} color="#fffffff7" className="absolute left-1 top-1"/>
            </div>
            
        </>
    )
}

