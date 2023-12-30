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
        <div style={{alignSelf: 'center', textAlign: 'center'}}>
            {isClient ? time.toLocaleTimeString() : ''} <br />
            {isClient ? time.getFullYear() : ''}年
            {isClient ? time.getMonth() + 1 : ''}月
            {isClient ? time.getDate() : ''}日
        </div>
    )
}

export default Clock