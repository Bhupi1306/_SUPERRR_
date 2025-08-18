import './App.css'
import { Todo, WeatherWidget, Qoute, Greeting } from '../components'

export default function App() {
  return (
    <div>
      <div className="bg-black relative h-screen w-screen bg-cover bg-center" 
      >

        <WeatherWidget/>
        <Greeting/>
        <Todo/>
        <Qoute/>

      </div>

    </div>
  )
}
