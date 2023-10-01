"use client"
import { useEffect, useState } from "react"



export default function Clock({serverTime}:{serverTime: Date}): JSX.Element {
    // constants
    const locales:Intl.LocalesArgument = 'es-AR'
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Argentina/Buenos_Aires', 
        hour12: false, 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric'
    }
    // states
    const [clockValue, setClockValue] = useState<Date>(serverTime)
    // function
    

    useEffect(() => {
        const tick = setInterval(() => {
            setClockValue(new Date());
        }, 1000);
        return () => clearInterval(tick)
    }, [])

    // render
    return (
        <span className="font-SatoshiMedium tabular-nums">{clockValue.toLocaleTimeString(locales,options)} now in <i>Buenos Aires, Argentina</i> </span>
    )
}