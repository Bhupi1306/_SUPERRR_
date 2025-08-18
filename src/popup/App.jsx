import crxLogo from '@/assets/crx.svg'
import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import HelloWorld from '@/components/HelloWorld'
import './App.css'

export default function App() {
  return (
    <div>
     <div className="bg-black relative h-screen w-screen bg-cover bg-center" 
    >

  <div className="absolute top-4 left-6 text-white space-y-1">
    <p className="text-2xl font-light">23°C</p>
    <p className="text-sm opacity-80">Delhi</p>
  </div>

  <div className="flex flex-col items-center justify-center h-full text-white">
    <p className="text-sm mb-2">Monday, January 1</p>
    <p className="text-7xl font-light tracking-wider">5:13</p>
    <p className="mt-6 text-4xl tracking-widest">Good Morning</p>
  </div>

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

  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white italic opacity-80 text-sm">
    “Start where you are. Use what you have. Do what you can.”
  </div>

</div>

    </div>
  )
}
