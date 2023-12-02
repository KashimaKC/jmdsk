import { journal } from "../../styles/styles"
import { TextField, Button, Fade } from "@mui/material"
import { invoke } from "@tauri-apps/api/tauri";
import { useState, FC } from "react"

interface RefreshProps {
    refreshLogs: boolean;
    setRefreshLogs: React.Dispatch<React.SetStateAction<boolean>>;
}

const Journal:FC<RefreshProps> = ( {setRefreshLogs, refreshLogs} ) => {

    const [text, setText] = useState<string>('');

    const submitJournal = async () => {
        let date = new Date()
        let response = await invoke('submit_log', 
            {
                "journal": text, 
                "date": date.toLocaleDateString(),
                "time": date.toLocaleTimeString()
            }
        )
        if (response === 'success') {
            alert("log successful!")
            setText('')
            setRefreshLogs(!refreshLogs)
        } else {
            alert("failed to log response, please try again.")
        }
    }

    return (
        <Fade in timeout={500}>
            <div style={journal.journalContainer as React.CSSProperties}>
                    <div style={journal.journalHeaderText}>Create New Journal Entry</div>
                    <TextField
                        variant="outlined"
                        multiline
                        rows={29}
                        value={text}
                        inputProps={{
                            style: { color: 'white' }
                        }}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setText(event.target.value)}}
                    />
                    <Button
                        variant="contained"
                        onClick={submitJournal}
                        style={{marginTop: 10}}
                    >Submit</Button>
                    <Button
                        variant="contained"
                        onClick={() => setText('')}
                        color="warning"
                        style={{marginTop: 10}}
                    >Clear</Button>
            </div>
        </Fade> 
    )
}

export default Journal