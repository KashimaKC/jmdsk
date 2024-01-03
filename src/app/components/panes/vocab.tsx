import { vocab } from "@/app/styles/styles";
import { Button, TextField } from "@mui/material";
import React, { FC, useState } from "react";


const Vocab:FC = () => {

    const [vocabField, setVocabField] = useState<string>();
    const [definitionField, setDefinitionField] = useState<string>();
    const [exampleField, setExampleField] = useState<string>();

    return (
        <div style={vocab.vocabContainer as React.CSSProperties}>
            <div style={vocab.entryContainer as React.CSSProperties}>
                <div style={{
                    flexBasis: '100%', 
                    color: 'white', 
                    fontSize: 20, 
                    padding: 5, 
                    margin: 5, 
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <div>新しい語彙</div>
                    <Button 
                        variant="contained"
                        style={{marginLeft: 'auto'}}
                        sx={{
                            backgroundColor: 'green'
                        }}
                    >
                        　送信（そうしん）
                    </Button>
                    <Button 
                        variant="contained"
                        style={{marginLeft: 10}}
                        sx={{
                            backgroundColor: 'red'
                        }}
                    >
                        クリア
                    </Button>
                </div>
                <TextField 
                    placeholder="語彙（ごい）"
                    type="text" 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setVocabField(event.target.value)}}
                    value={vocabField}
                    inputProps={{
                        style: { color: 'white' }
                    }}   
                    style={vocab.entryField('35%')} 
                />
                <TextField 
                    placeholder="語彙の定義（ごいのていぎ）"
                    type="text" 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setDefinitionField(event.target.value)}}
                    value={definitionField}
                    inputProps={{
                        style: { color: 'white' }
                    }}   
                    style={vocab.entryField('60%')} 
                />
                <TextField 
                    placeholder="例文（れいぶん）"
                    type="text" 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setExampleField(event.target.value)}}
                    value={exampleField}
                    inputProps={{
                        style: { color: 'white' }
                    }}   
                    style={vocab.entryField('100%')} 
                />
            </div>
        </div>
    )
}

export default Vocab