import { FC } from "react";
import { logs } from "../styles/styles";
import { Button, Fade } from "@mui/material";

interface LogViewProps {
    log: {
        date: string,
        time: string,
        entry: string
    } | any
    setPageState: React.Dispatch<React.SetStateAction<String>>;
}

const LogView:FC<LogViewProps> = ({ log, setPageState }) => {
    return (
        <div style={logs.logViewContainer as React.CSSProperties}>
            <div style={logs.logHeaderText}>
                Viewing log entry for: <br />
                {log.date} - {log.time}
                <hr style={{border: '1px solid black'}}/>
            </div>
            <Fade in timeout={800}>
                <div>{log.entry}</div>
            </Fade>
            <Button
                onClick={() => setPageState("Home")}
                variant="contained"
                sx={{
                    marginTop: 'auto'
                }}
            >
                Close
            </Button>
        </div>
    )
}

export default LogView