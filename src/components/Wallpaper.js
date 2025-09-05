import {createClient} from "pexels"

const KEYWORDS = {
    "sunny" : ["sunny", "sun", "afternoon", "blue sky", "sky"],
    "rainy" : ["rains", "clouds", "thunderstorm", "street rain"],
    "snow" : ["snow", "snowfall", "snowy night"]
}

export const WallpaperAPI = async(weather) => {

    const queryArray = KEYWORDS[weather]
    const randomKeywordIndex = Math.floor(Math.random() * queryArray.length)
    const query = queryArray[randomKeywordIndex]

    const client = createClient(import.meta.env.VITE_PEXELS_API)
    const perPage = 15;
    const randomPage = Math.floor(Math.random() * 10) + 1; // pages 1-10

    const test = await client.photos.search({query, per_page : perPage, orientation: "landscape", page: randomPage})
    const randomIndex = Math.floor(Math.random() * test.photos.length);
    const link = test.photos[randomIndex].src.large2x
    
    return link
}

async function imageUrlToBase64(url) {
    const response = await fetch(url);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result); // result = base64 string
        reader.onerror = reject;
        reader.readAsDataURL(blob); // converts blob to base64
    });
}

export async function saveImageToStorage(url, key = "wallpaper") {
  try {
    const time = new Date()
    const base64 = await imageUrlToBase64(url);
    chrome.storage.local.set({ [key]: base64 });
    chrome.storage.local.set({ "time": time.getTime()});
  } catch (err) {
    console.error("Error converting image:", err);
  }
}

