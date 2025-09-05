import { useState, useEffect } from "react"

export function useLocation() {
  const [location, setLocation] = useState(null)
  const [loaded, setLoaded] = useState(false)

  // Load location from storage when component mounts
  useEffect(() => {
    chrome.storage.local.get(["weather_location"], (result) => {
      if (result.weather_location) {
        console.log("Loaded location:", result.weather_location)
        setLocation(result.weather_location)
      }
      setLoaded(true)
    })
  }, [])

  // Save location back to storage whenever it changes
  useEffect(() => {
    if (!loaded || !location) return
    chrome.storage.local.set({ weather_location: location }, () => {
      console.log("Saved location:", location)
    })
  }, [location, loaded])

  // Function to request location from browser
  function updateLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            timestamp: Date.now(),
          }
          setLocation(coords)
        },
        (err) => console.error("Geolocation error:", err),
        { enableHighAccuracy: true }
      )
    }
  }

  return [location, updateLocation]
}
