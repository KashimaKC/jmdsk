import { useEffect, useState, FC, Ref } from "react"
import { logs } from "../styles/styles"
import { invoke } from "@tauri-apps/api/tauri"
import { Button } from "@mui/material"

interface RefreshProps {
    refreshExternal: boolean;
}

// contains the component where existing log entries are displayed.
const Logs:FC<RefreshProps> = ( { refreshExternal } ) => {

    const [data, setData] = useState<Object | any >([]);
    const [refresh, setRefresh] = useState<boolean>(false)

    useEffect(() => {
        const retrieveRecords = async () => {
            let logs: string = await invoke('retrieve_logs')
            let json = JSON.parse(logs)
            setData(json)
        }

        retrieveRecords()
    }, [refresh, refreshExternal])

    return (
        <div style={logs.logsContainer as React.CSSProperties}>
            <div style={logs.logHeaderText}>View Journal Entries</div>
            <div style={{minHeight: 750, maxHeight: 750, overflowY: 'scroll'}}>
                {
                    data?.toReversed().map((item: any, i: any) => (
                        <div key={i} style={logs.logCard as React.CSSProperties}>
                            <div>{item.date} - {item.time}</div>
                            <div 
                                style={{
                                    overflow: 'hidden', 
                                    textOverflow: 'ellipsis', 
                                    whiteSpace: 'nowrap'
                                }}>
                                    {item.entry}
                                </div>
                        </div>
                    ))
                }
            </div>
            <Button
                variant="contained"
                onClick={() => setRefresh(!refresh)}
            >
                Refresh
            </Button>
        </div>
    )
}

export default Logs