import { useEffect, useState } from "react";

function ClockFunction(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);

        return () => clearInterval(timerId)
    }, [])

    useEffect(() => {
        console.log('Clock updated')
    }, [currentTime]);

    return (<div>
        {currentTime.toTimeString()}
    </div>)
}

export default ClockFunction;