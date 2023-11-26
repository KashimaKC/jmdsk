import { useEffect, useState } from "react"

const Clock = () => {

    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return(
        <div>
            {time.toLocaleTimeString()}
        </div>
    )
}

export default Clock