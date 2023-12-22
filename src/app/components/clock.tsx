import { useEffect, useState } from "react"

const Clock = () => {

    const [time, setTime] = useState<Date>(new Date());
    const [isClient, setIsClient] = useState<boolean>(false)

    useEffect(() => {
        setIsClient(true)

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return(
        <div style={{alignSelf: 'center'}}>
            {isClient ? time.toLocaleTimeString() : ''}
        </div>
    )
}

export default Clock