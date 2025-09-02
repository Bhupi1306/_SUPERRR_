import { useEffect, useState } from "react";

export const Greeting = () => {
    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
        setTime(new Date());
        }, 60000);
    }, []);

    return (
         <div className="flex flex-col items-center justify-center text-white">
            <p className=" font-light text-[50px] text-right lg:text[80px] tracking-[0.8em] pl-10">Good {time.getHours() < 12? "Morning": (time.getHours() < 16? "Afternoon": "Evening" )}</p>
        </div>
    )
}