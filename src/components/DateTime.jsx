import { useEffect, useState } from "react"
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const DateTime = ({weatherMode}) => {

    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
        setTime(new Date());
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-white">
            <p className="text-sm md:-mb-5 md:text-[1.5rem] md:tracking-wide  ">{days[time.getDay()]}, {months[time.getMonth()]} {time.getDate()}</p>

            <p className="text-6xl
            md:text-[7rem]
            xl:text-[8rem]">{time.getHours()<=12? time.getHours(): time.getHours() -12 }:{time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes()}</p>
            <p className={`${weatherMode? "": "hidden"} text-9xl`}>-</p>
        </div>
    )
}

