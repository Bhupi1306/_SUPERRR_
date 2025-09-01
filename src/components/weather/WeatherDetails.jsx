import { useEffect, useRef, useState } from "react"
import SearchIcon from "../svg/SearchIcon"

export const WeatherDetails = ({setCity, city}) => {

    const [input, setInput] = useState("")
    const [search, setSearch] = useState(false)
    const [cities, setCities] = useState([])

    const inputRef = useRef(null)

    // 68b5282f71432255704280dvu134533

    useEffect(() => {
    if (search && inputRef.current) {
        inputRef.current.focus();
    }
    }, [search]);
    
    const ChangeInput = (e) => {
        setInput(e.target.value)

        fetch(`https://geocode.maps.co/search?q=${e.target.value}&api_key=68b5282f71432255704280dvu134533`)
            .then(response => {
                return response.json()
            })
            .then((item) => {
                setCities(item)
            })
            .catch(() => {
                console.log("Not working")
            })
    }

    const MakeRequest = (e) => {
        if(e.key == "Enter"){
            setInterval(() => {
                fetch(`https://geocode.maps.co/search?q=${e.target.value}&api_key=68b5282f71432255704280dvu134533`)
                .then(response => {
                    return response.json()
                })
                .then((item) => {
                    setCities(item)
                })
                .catch(() => {
                    console.log("Not working")
                })
            }, 1000);
        }
    }

    const handleClickCity = (item) => {

        const displayNameArray = item.display_name.split(",")
        const displayName = displayNameArray[0] + ", " + displayNameArray[displayNameArray.length - 1]

        chrome.storage.local.set({"weather_city":{name: displayName, lon:item.lon, lat:item.lat}},() => {
            setCity(displayName)
            setInput("")
            setSearch(false)
        })
        
    }   

    return (
        <>
        <div className="relative">
            <div className=" max-w-100 bg-amber-50/20 backdrop-blur-xs absolute top-20 left-4 p-5 rounded-md text-white/90">
                <div className={`${search?"opacity-0":""} `}>
                    <div className="flex justify-between items-center">
                        <div className="text-[1.1rem]  text-shadow-md">{city}</div>
                        <div className="opacity-50 hover:opacity-100" onClick={()=>{setSearch(true)}}><SearchIcon color="#ffffff" size={20}/></div>
                    </div>
                    <div className="flex mt-10 space-x-1 text-[0.9rem]">
                        <div className="h-20  p-3 border-r-2 border-gray-50/30 text-shadow-md">Weather details today</div>
                        <div className="p-3 border-r-2 border-gray-50/30 text-shadow-md">next day</div>
                        <div className="p-3 border-r-2 border-gray-50/30">next day</div>
                        <div className="p-3 border-r-2 border-gray-50/30">next day</div>
                        <div className="p-3">next day</div>
                    </div>

                    <div>
                        <div className="h-20 p-6">MOre details</div>
                    </div>
                </div>

                <div className={`absolute top-0 pt-3 rounded-md h-full bg-black/30 backdrop-blur-3xl px-3 right-0 w-full ${search?"":"hidden"} overflow-y-auto`}>
                    <div className="bg-black/20 w-full flex items-center rounded-md">
                        <input type="text"
                        ref={inputRef}
                        value={input}
                        className=" w-full text-[1rem]  p-2 
                        focus:outline-none"
                        onChange={ChangeInput}
                        onKeyDown={MakeRequest}
                        />
                        <div className="absolure t-4 text-3xl mr-3 cursor-default" onClick={() => {setSearch(false) 
                            setCities([])
                            setInput("")}}>X</div>
                    </div>

                    <div className="bg-black/20 w-full rounded-md mt-1 text-[0.85rem]">
                        {cities.slice(0,4).map((city) => (
                            <div onClick={() =>{handleClickCity(city)}} key={city.place_id} className="my-1 p-2 hover:bg-black/40 rounded-md">{city.display_name}</div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}


