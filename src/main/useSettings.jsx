import { useState, useEffect } from "react";

const defaultSettings = {
  weather: true,
  clock: true,
  greeting: true,
  quote: true,
  todo: true,
  searchBar: true,
  wallpaperRefresh: true,
};

export function useSettings() {
  const [settings, setSettings] = useState(defaultSettings);
  const [loaded, setLoaded] = useState(false);

  // Load once
  useEffect(() => {
    chrome.storage.sync.get(["settings"], (result) => {
      if (result.settings) {
        setSettings({ ...defaultSettings, ...result.settings });
      } else {
        chrome.storage.sync.set({ settings: defaultSettings });
      }
      setLoaded(true);
    });
  }, []);

  // Save after load
  useEffect(() => {
    if (!loaded) return;
    chrome.storage.sync.set({ settings });
  }, [settings, loaded]);

  return [settings, setSettings];
}
