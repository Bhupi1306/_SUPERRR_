import { Settings } from "lucide-react";
import { useState } from "react";
import Toggle from "./Toggle";
export const Setting = ({settings,setSettings}) => {
  const [open, setOpen] = useState(false);
  

  const settingOptions = [
    { id: "weather", label: "Weather" },
    { id: "clock", label: "Clock" },
    { id: "greeting", label: "Greeting" },
    { id: "quote", label: "Quote" },
    { id: "todo", label: "Todo" },
    { id: "searchBar", label: "Search Bar" },
    { id: "wallpaperRefresh", label: "Wallpaper Refresh" },
  ];

  {/* absolute bottom-12 right-20  */}
  return (
    <div className="fixed bottom-6 left-6">
      {/* Settings Icon */}
      <div
       
        className="relative"
      >
        <button  onClick={() => setOpen(()=>!open)} className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100">
          <Settings className="w-6 h-6 text-gray-700" />
        </button>

        {/* Hover Box */}
        {open && (
          <div className={`absolute bottom-14 left-0 w-48 p-4 bg-white/20 backdrop-blur-sm rounded-lg text-white p-4  shadow-lg mb-3 origin-bottom
                            h-auto"}
                            shadow-lg rounded-xl p-4`}>
            <h3 className="text-sm font-semibold mb-2">Settings</h3>
            {settingOptions.map((opt) => (
        <Toggle
          key={opt.id}
          id={opt.id}
          label={opt.label}
          settings={settings}
          setSettings={setSettings}
        />
      ))}
          </div>
        )}
      </div>
    </div>
  )
}
