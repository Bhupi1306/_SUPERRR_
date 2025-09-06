import { Settings } from "lucide-react";
import { useState } from "react";

export const Setting = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6">
        <h1>HELLLOW</h1>
      {/* Settings Icon */}
      <div
        onClick={() => setOpen(()=>!open)}
        className="relative"
      >
        <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100">
          <Settings className="w-6 h-6 text-gray-700" />
        </button>

        {/* Hover Box */}
        {open && (
          <div className="absolute bottom-14 left-0 w-48 p-4 bg-white shadow-lg rounded-xl border border-gray-200">
            <h3 className="text-sm font-semibold mb-2">Settings</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer">Theme</li>
              <li className="hover:text-blue-600 cursor-pointer">Units (°C/°F)</li>
              <li className="hover:text-blue-600 cursor-pointer">Notifications</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
