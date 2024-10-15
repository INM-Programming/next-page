'use client';
import { useState } from "react";
import Time_Class from "@/class/time_class";
import chronometer from "./chronometer.module.css"

export default function Chronometer() {


    const [time,setTime] = useState <Time_Class>(new Time_Class('0','0','0'));
    const [active,setActivation] = useState (false);
    const [interval,setChronometerInterval] = useState<any>();

    function changeTime(begin:Date){
        var now = new Date();
        var elapsedTime = new Date(now.getTime()-begin.getTime());
        setTime(new Time_Class(elapsedTime.getMinutes().toString(),elapsedTime.getSeconds().toString(),elapsedTime.getMilliseconds().toString()));
    }

    function beginChronometer(){

        if(!active){
            const begin = new Date()
            setActivation(true);
            setChronometerInterval(setInterval(()=>changeTime(begin),1000));
        }
    }

    function stopChronometer(){
        
        if(active){
            setActivation(false);
            clearInterval(interval);
        }

    }

    return (
        <div className={chronometer.page_chronometer}>
            <div className={chronometer.container_time}>
                <div className={chronometer.time}>{time?.getMinute()}m</div>
                <div className={chronometer.time}>{time?.getSecond()}s</div>
                <div className={chronometer.time}>{time?.getMilisecond()}ms</div>
            </div>
            <div className={chronometer.container_buttons}>
                <button className={chronometer.button_start} onClick={()=>beginChronometer()}>Start</button>
                <button className={chronometer.button_stop} onClick={()=>stopChronometer()}>Stop</button>
            </div>
        </div>
    )
}
