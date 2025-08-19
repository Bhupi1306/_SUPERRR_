import './App.css'
import { Todo, WeatherWidget, Qoute, Greeting, DateTime} from '../components'
import Goog from '../components/searchengine/goog'

export default function App() {
  return (
    <div>
      <div className="bg-black relative h-screen w-screen bg-cover bg-center" 
      >

        <WeatherWidget/>
        <div className='grid grid-rows-3 h-full'>
          <Goog/>
          <DateTime/>
          <Greeting/>
        </div>
        <Todo/>
        <Qoute/>

      </div>

    </div>
  )
}
