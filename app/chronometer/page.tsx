'use client';
import { useState } from "react";

export default function Chronometer() {


    const [time,setTime] = useState <string>();
    const [active,setActivation] = useState (false);
    const [interval,setChronometerInterval] = useState<any>();

    function changeTime(begin:Date){
        var now = new Date();
        var elapsedTime = new Date(now.getTime()-begin.getTime());
        setTime(elapsedTime.getMinutes() + ':' + elapsedTime.getSeconds() + ':' + elapsedTime.getMilliseconds());
    }

    function beginChronometer(){
        if(active){
            setActivation(false);
            clearInterval(interval);
        }
        else {
            const begin = new Date()
            setActivation(true);
            setChronometerInterval(setInterval(()=>changeTime(begin),1000));
        }
    }

    return (
        <div>
            {time}
            <button onClick={()=>beginChronometer()}>Count Time</button>
        </div>
    )
}
