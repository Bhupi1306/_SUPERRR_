import { useEffect, useState } from "react"
import { WeatherDetails } from "./WeatherDetails"
import {WeatherAPI} from "./WeatherAPI"

export const WeatherWidget = ({weatherMode}) => {
    const [city, setCity] = useState("")
    const [weathercurrent,locomoco,futureWeather] = WeatherAPI()
    
    useEffect(()=>{
        chrome.storage.local.get("weather_city", (item)=>{
            setCity(item.weather_city.name)
        })
    })


    return (
        <>
            <div className="relative">
                <div className="absolute top-4 left-6 text-white space-y-1">
                   { weathercurrent || locomoco ? (
                    <div>
                    <span className="flex"> {weathercurrent.condition.icon && <img src={`https:${weathercurrent.condition.icon}`} alt="weather icon" className="inline w-7 h-7 mr-2"/>}
                     <p className="text-2xl font-light ">{weathercurrent.temp_c}</p></span>
                    <p className="text-sm opacity-80">{locomoco.name},{locomoco.country}</p> 
                    </div> )
                    :
                    ( <p>Loading....</p>)
                    }
                   {/*<p className={`${weatherMode?"":"hidden"} text-sm opacity-80`}>Rainy</p>
               */} 
                </div>
                <WeatherDetails setCity={setCity} city={city} futureWeather={futureWeather} weathercurrent={weathercurrent} locomoco={locomoco}/>
            </div>
        </>
    )
}


