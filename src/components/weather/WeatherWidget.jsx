import { useState } from "react"

export const WeatherWidget = ({weatherMode}) => {


    return (
        <>
            <div className="absolute top-4 left-6 text-white space-y-1">
                <p className="text-2xl font-light">23°C</p>
                <p className="text-sm opacity-80">Delhi</p>
                <p className={`${weatherMode?"":"hidden"} text-sm opacity-80`}>Rainy</p>
            </div>
        </>
    )
}


