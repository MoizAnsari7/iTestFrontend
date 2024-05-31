import { useEffect, useState } from "react";

const  TimerComponent = ()=>{
    const [ timer, setTimer ] = useState({ hours : 2, minutes : 30, seconds : 40 }) 
    useEffect(()=>{
        let countInterval = setInterval(() => {
            if(timer.seconds > 0)
            {
                setTimer((prevTimer)=>{ return { ...prevTimer, seconds : prevTimer.seconds - 1}})
            }else{
                console.log("else block");
                if(timer.minutes > 0)
                    {
                        console.log("inside minutes");
                        setTimer((preTimer)=>{return { ...preTimer, minutes : preTimer.minutes - 1, seconds : 59 }})
                    }else{
                        if(timer.hours > 0)
                            {
                                setTimer((prevTimer)=>{
                                    return { hours : prevTimer.hours - 1 , minutes : 59 , seconds : 59 }
                                })
                            }else{
                                clearInterval(countInterval)
                            }
                    }
            }
            // console.log("timer.second",timer)
        }, 1000);
        return ()=>{
            clearInterval(countInterval)
        }
    }, [ timer ])
    return (
        <>
            <h1>{`${ timer.hours } : ${ timer.minutes } : ${ timer.seconds } `}</h1>
        </>
    )
}

export default TimerComponent;