import React, { useEffect, useState, FC, Ref } from "react"
import { logs } from "../../styles/styles"
import { invoke } from "@tauri-apps/api/tauri"
import { Button, Fade } from "@mui/material"
import styles from "../../styles/scroll.module.css"
import animation from "../../styles/dateAnimation.module.css"
import { FaTrash, FaExpand } from "react-icons/fa"
import { darkenButton } from "@/functions/darkenButton"
import { lightenButton } from "@/functions/lightenButton"
import Image from "next/image"

interface LogProps {
    refreshExternal: boolean;
    setPageState: React.Dispatch<React.SetStateAction<String>>;
    setLogView: React.Dispatch<React.SetStateAction<Object>>;
}

// contains the component where existing log entries are displayed.
const Logs:FC<LogProps> = ( { refreshExternal, setPageState, setLogView } ) => {

    const [data, setData] = useState<any>();
    const [refresh, setRefresh] = useState<boolean>(false)

    useEffect(() => {
        const retrieveRecords = async () => {
            let logs: string = await invoke('retrieve_logs')
            let json = JSON.parse(logs)
            setData(json)
        }

        retrieveRecords()
    }, [refresh, refreshExternal])

    const removeEntry = async (date: string, time: string) => {
        let removal = await invoke('remove_log', {"date": date, "time": time})
        
        if (removal === "success") {
            setRefresh(!refresh)
        }
    }

    const openDetailView = (log: any) => {
        setLogView(log)
        setPageState("DetailView")
    }

    return (
        <Fade in timeout={800}>
            <div style={logs.logsContainer as React.CSSProperties}>
                <div style={logs.logHeaderText}>View Journal Entries</div>
                <div className={styles.scroll} style={{minHeight: 750, maxHeight: 750, overflowY: 'scroll'}}>
                    {   data !== undefined ?
                        data?.toReversed().map((item: any, i: any, arr: any) => {

                            const Card = () => {
                                return (
                                <div key={i} style={logs.logCard as React.CSSProperties}>
                                    <div style={{flexDirection: 'column'}}>
                                        <div>{item.date} - {item.time}</div>
                                        <div
                                            style={{
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                maxWidth: 290
                                            }}>
                                                {item.entry}
                                        </div>
                                    </div>
                                    {/* View Button */}
                                    <button
                                        onClick={() => openDetailView(item)}
                                        onMouseOver={(e) => darkenButton(e, '#696969')}
                                        onMouseLeave={(e) => lightenButton(e, 'white')}
                                        style={{
                                            marginLeft: 'auto',
                                            padding: 10,
                                            marginTop: -20,
                                            marginBottom: -20,
                                            border: '0px solid black',
                                            transitionDuration: '0.5s'
                                        }}
                                    >
                                        <FaExpand
                                            style={{
                                                fontSize: 18,
                                                background: 'transparent',
                                                color: 'black',
                                                pointerEvents: 'none'
                                            }}
                                        />
                                    </button>
                
                                    {/* Delete Button */}
                                    <button
                                        onClick={() => removeEntry(item.date, item.time)}
                                        onMouseOver={(e) => darkenButton(e, '#770000')}
                                        onMouseLeave={(e) => lightenButton(e, '#C70000')}
                                        style={{
                                            width: 40,
                                            marginLeft: 0,
                                            marginTop: -20,
                                            marginBottom: -20,
                                            padding: 10,
                                            border: '0px solid black',
                                            backgroundColor: '#C70000',
                                            borderTopRightRadius: 5,
                                            borderBottomRightRadius: 5,
                                            transitionDuration: '0.5s'
                                        }}
                                    >
                                        <FaTrash style=
                                            {{
                                                fontSize: 18,
                                                color: 'black',
                                                background: 'transparent',
                                                pointerEvents: 'none'
                                            }}
                                        />
                                    </button>
                                    </div>
                                )
                            }
                            
                            if (arr[i-1] == undefined) {
                                return (<Card key={i} />)
                            }
                            else if (item.date.substring(0,2) != arr[i-1]?.date.substring(0,2)) {
                                return (
                                    <>
                                        <div style={logs.separatorContainer}>
                                            <div style={logs.logDateSeparator}>
                                                {item.date.substring(6,20)}年 <br />
                                                {item.date.substring(0,2)}月
                                            </div>
                                            <div style={logs.dateGraphic as React.CSSProperties}>
                                                <Image 
                                                    src="/watanabe-you-icon.png" 
                                                    width={25} height={25} 
                                                    alt="" 
                                                    className={animation.slide}
                                                    style={{filter: 'brightness(120%)'}}
                                                />
                                                <Image 
                                                    src="/watanabe-you-icon.png" 
                                                    width={25} height={25} 
                                                    alt="" 
                                                    className={animation.slide}
                                                    style={{animationDelay: '2s', filter: 'brightness(150%)'}}
                                                />
                                            </div>
                                        </div>
                                        <Card key={i} />
                                    </>
                                )
                            } 
                            else 
                            {
                                return (
                                    <Card key={i} />
                                )
                            }
                        })
                        :
                        <div>Loading</div>
                    }
                </div>
                <Button
                    variant="contained"
                    onClick={() => setRefresh(!refresh)}
                    sx={{marginTop: 'auto'}}
                >
                    Refresh
                </Button>
            </div>
        </Fade>
    )
}

export default Logs