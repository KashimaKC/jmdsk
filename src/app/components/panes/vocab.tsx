import { vocab } from "@/app/styles/styles";
import { Button, TextField } from "@mui/material";
import { invoke } from "@tauri-apps/api/tauri";
import React, { FC, useEffect, useState } from "react";
import styles from "../../styles/scroll.module.css"


const Vocab:FC = () => {

    const [refresh, setRefresh] = useState<boolean>(false);

    const [vocabField, setVocabField] = useState<string>();
    const [definitionField, setDefinitionField] = useState<string>();
    const [exampleField, setExampleField] = useState<string>();

    const [vocabList, setVocabList] = useState<any>();

    useEffect(() => {
        const retrieveVocab = async () => {
            let vocab: string = await invoke('retrieve_vocab')
            let json = JSON.parse(vocab)
            setVocabList(json)
        }

        retrieveVocab()
    }, [refresh])

    const submitVocabulary = async () => {
        let date = new Date()

        let result = await invoke('create_vocab', {
            "date": date.toLocaleDateString(),
            "time": date.toLocaleTimeString(),
            "word": vocabField,
            "definition": definitionField,
            "sentence": exampleField
        })

        if ( await result === 'success' ) {
            setRefresh(!refresh)
            setVocabField('')
            setDefinitionField('')
            setExampleField('')
        }
    }

    const removeVocab = async (date: string, time: string) => {
        let removal = await invoke('remove_vocab', {"date": date, "time": time})

        if ( removal === "success" ) {
            setRefresh(!refresh)
        }
    }

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
                        onClick={() => submitVocabulary()}
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
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
                />
            </div>
            <div style={vocab.categorySelector}>
                <Button
                    variant="contained"
                    sx={{height: 25, marginLeft: 1, textTransform: 'none'}}
                >
                    verbs
                </Button>
                <Button
                    variant="contained"
                    sx={{height: 25, marginLeft: 1, textTransform: 'none'}}
                >
                    nouns
                </Button>
                <Button
                    variant="contained"
                    sx={{height: 25, marginLeft: 1, textTransform: 'none'}}
                >
                    expressions
                </Button>
                <Button
                    variant="contained"
                    sx={{height: 25, marginLeft: 1, textTransform: 'none'}}
                >
                    adjectives
                </Button>
            </div>
            <div style={{marginTop: 5,minHeight: 590, maxHeight: 590, overflowY: 'scroll'}} className={styles.scroll}>
                {
                    vocabList?.toReversed().map((item: any, i: any) => {
                        const Card:FC = () => {
                            return(
                                <div style={vocab.cardContainer as React.CSSProperties}>
                                    <div style={{flexBasis: '20%', marginBottom: 10}}>{item.word}</div>
                                    <div style={{flexBasis: '60%', marginBottom: 10}}>{item.definition}</div>
                                    <Button 
                                        variant="contained" 
                                        sx={{height: '25px', backgroundColor: 'red', color: 'black'}}
                                        onClick={() => removeVocab(item.date, item.time)}
                                    >
                                        　削除（さくじょ）
                                    </Button>

                                    <div style={{flexBasis: '80%', marginBottom: 10}}>{item.sentence}</div>
                                    <Button variant="contained" sx={{height: '25px'}}>カテゴリー</Button>
                                </div>
                            )
                        }
                        return (
                            <Card key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Vocab