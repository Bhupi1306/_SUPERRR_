import { useEffect, useRef, useState } from "react"
import SearchIcon from "../svg/SearchIcon"
import SunnyIcon from "../svg/weather_icons/Sunny"

export const WeatherDetails = ({setCity, city}) => {

    const [input, setInput] = useState("")
    const [search, setSearch] = useState(false)
    const [cities, setCities] = useState([])

    const inputRef = useRef(null)


    useEffect(() => {
    if (search && inputRef.current) {
        inputRef.current.focus();
    }
    }, [search]);
    /*Basic input for manual cities*/
    const ChangeInput = (e) => {
        setInput(e.target.value)

        fetch(`https://geocode.maps.co/search?q=${e.target.value}&api_key=${import.meta.env.VITE_LOC_API}`)
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
                fetch(`https://geocode.maps.co/search?q=${e.target.value}&api_key=${import.meta.env.VITE_LOC_API}`)
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
/*Handle click on city from search results*/
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
                    <div className="mt-5 text-[0.9rem]">
                        <div className="flex justify-between space-x-6  p-5 text-shadow-md bg-amber-50/7 rounded-md">
                            <div>
                                <SunnyIcon size={40} stroke="#ffffff"/>
                                <p className="mt-2 text-md text-shadow-lg">Sunny</p>
                            </div>

                            <div>
                                <p>Max: 28&deg;C</p>
                                <p className="mt-2">Min: 14&deg;C</p>
                            </div>

                            {/**Use Icons instead of names */}
                            <div className="text-center">
                                <p>Rain</p>
                                <p className="mt-2">2%</p>
                            </div>

                            <div className="text-center">
                                <p>Wind</p>
                                <p className="mt-2">23mph</p>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className=" px-7 border-r-2 border-gray-50/30 text-shadow-md">
                                <p className="text-center mb-2">Sun</p>
                                <SunnyIcon size={35} stroke="#ffffffdd" />
                                <div className="text-center text-[.8rem]  mt-2">
                                    <p className="text-white">35&deg;C</p>
                                    <p className="text-white/70">29&deg;C</p>
                                </div>
                            </div>
                            <div className=" px-7 border-r-2 border-gray-50/30 text-shadow-md">
                                <p className="text-center mb-2">Mon</p>
                                <SunnyIcon size={35} stroke="#ffffffdd" />
                                <div className="text-center text-[.8rem]  mt-2">
                                    <p className="text-white">35&deg;C</p>
                                    <p className="text-white/70">29&deg;C</p>
                                </div>
                            </div>
                            <div className=" px-7 border-r-2 border-gray-50/30 text-shadow-md">
                                <p className="text-center mb-2">Tue</p>
                                <SunnyIcon size={35} stroke="#ffffffdd" />
                                <div className="text-center text-[.8rem]  mt-2">
                                    <p className="text-white">35&deg;C</p>
                                    <p className="text-white/70">29&deg;C</p>
                                </div>
                            </div>
                            <div className=" px-7 text-shadow-md">
                                <p className="text-center mb-2">Thur</p>
                                <SunnyIcon size={35} stroke="#ffffffdd" />
                                <div className="text-center text-[.8rem]  mt-2">
                                    <p className="text-white">35&deg;C</p>
                                    <p className="text-white/70">29&deg;C</p>
                                </div>
                            </div>
                        </div>
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


