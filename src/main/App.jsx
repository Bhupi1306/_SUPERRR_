import './App.css'
import { Todo, WeatherWidget, Qoute, Greeting, DateTime} from '../components'
import { useState } from 'react'
import Goog from '../components/searchengine/goog'

export default function App() {

  const [weatherMode, setWeatherMode] = useState(false)

  return (
    <div>

      <div className="bg-[url('https://images.pexels.com/photos/421759/pexels-photo-421759.jpeg')] relative h-screen max-w-screen bg-cover bg-center overflow-hidden" 
      >

        <WeatherWidget
          weatherMode = {weatherMode}
        />

        <div className='grid grid-rows-3 h-full'>
          <Goog/> 

          <DateTime
            weatherMode = {weatherMode}
          />
          
          <Greeting/>
        </div>
        <Todo/>
        <Qoute/>

      </div>

    </div>
  )
}
