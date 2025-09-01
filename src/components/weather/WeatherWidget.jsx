import { useEffect, useState } from "react"
import { WeatherDetails } from "./WeatherDetails"

export const WeatherWidget = ({weatherMode}) => {
    const [city, setCity] = useState("")
    useEffect(()=>{
        chrome.storage.local.get("weather_city", (item)=>{
            setCity(item.weather_city.name)
        })
    })


    return (
        <>
            <div className="relative">
                <div className="absolute top-4 left-6 text-white space-y-1">
                    <p className="text-2xl font-light">23°C</p>
                    <p className="text-sm opacity-80">{city}</p>
                    <p className={`text-sm opacity-80`}>Rainy</p>
                </div>
                {weatherMode && (<WeatherDetails setCity={setCity} city={city}/>)}
            </div>
        </>
    )
}


