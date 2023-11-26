import { useEffect, useState } from "react"
import { logs } from "../styles/styles"
import { invoke } from "@tauri-apps/api/tauri"


// contains the component where existing log entries are displayed.
const Logs = () => {

    const [data, setData] = useState<Object | any >([]);

    useEffect(() => {
        const retrieveRecords = async () => {
            let logs: string = await invoke('retrieve_logs')
            let json = JSON.parse(logs)
            console.log(json)
            setData(json)
        }

        retrieveRecords()
    }, [])

    return (
        <div style={logs.logsContainer as React.CSSProperties}>
            {
                data?.map((item: any, i: any) => (
                    <div key={i}>{item.entry}</div>
                ))
            }
        </div>
    )
}

export default Logs