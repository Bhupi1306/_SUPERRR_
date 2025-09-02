import {useEffect,useState} from 'react'
import { useLocation } from './useLocation'

export function WeatherAPI  ()  {
    const [location, updateLocation] = useLocation()
    const [weathercurrent, setWeatherCurrent] = useState(null)
    const[locomoco, setLocomoco] = useState(null)
    const[futureWeather, setFutureWeather] = useState(null)
    useEffect(() => {
        if (!location) {
            updateLocation()
        }
    }, [location, updateLocation])

    useEffect(() => {
        if (location){
            console.log("Fetching weather for location:", location)
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API}&q=${location.lat},${location.lon}&days=3&aqi=no&alerts=yes
`)
            .then(response => response.json())
            .then(data => {
                console.log("Weather data:", data)
                setWeatherCurrent(data.current)
                setLocomoco(data.location)
                setFutureWeather(data.forecast.forecastday)
            })
            .catch(err => {
                console.error("Error fetching weather data:", err)
            })
        }
    }, [location])
  return [
   weathercurrent,locomoco,futureWeather
  ]
}

