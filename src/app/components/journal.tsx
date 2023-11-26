import { journal } from "../styles/styles"
import { TextField, Button } from "@mui/material"
import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react"

const Journal = () => {

    const [text, setText] = useState<string>('');

    const submitJournal = async () => {
        let response = await invoke('submit_log', {"journal": text})
        console.log(response)
    }

    return (
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
    )
}

export default Journal