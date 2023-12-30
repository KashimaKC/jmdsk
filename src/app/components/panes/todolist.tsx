import { FC, useEffect, useState } from "react";
import { todo } from "@/app/styles/styles";
import { FaAngleDoubleUp, FaAngleUp, FaExclamationTriangle } from "react-icons/fa";
import { Button, Fade, TextField, setRef } from "@mui/material";
import { invoke } from "@tauri-apps/api/tauri";
import TodoItem from "../todoitem";
import styles from "../../styles/scroll.module.css"

const TodoList:FC = () => {

    const [inputText, setInputText] = useState<string>("");
    const [priority, setPriority] = useState<string>("Low");
    const [refresh, setRefresh] = useState<boolean>(false);

    const [todoData, setTodoData] = useState<Array<Object>>([{}]);
    const [workingData, setWorkingData] = useState<Array<Object>>([{}]);
    const [completeData, setCompleteData] = useState<Array<Object>>([{}]);

    const parseData = (data: Array<any>) => {

        let todo: Array<Object> = [];
        let working: Array<Object> = [];
        let complete: Array<Object> = [];

        data.forEach(element => {
            if (element.type === "todo") {
                todo?.push(element)
            } else if (element.type === "working") {
                working?.push(element)
            } else if (element.type === "complete") {
                complete?.push(element)
            }
        });

        setTodoData(todo)
        setWorkingData(working)
        setCompleteData(complete)
    }

    useEffect(() => {
        const retrieveTodo = async () => {
            let logs: string = await invoke('retrieve_todo')
            let json = JSON.parse(logs)
            parseData(json)
        }

        retrieveTodo()
    }, [refresh])

    const submitTask = async () => {
        let date = new Date()

        let result = await invoke('create_task', {
            "newType": "todo",
            "task": inputText,
            "time": date.toLocaleTimeString(),
            "date": date.toLocaleDateString(),
            "priority": priority
        })

        if ( await result === 'success' ) {
            setRefresh(!refresh)
        }
    }

    const clearFields = () => {
        setInputText("")
        setPriority("Low")
        setRefresh(!refresh)
    }

    return (
        <Fade in timeout={500}>
            <div style={todo.todoContainer as React.CSSProperties}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>

                    {/*
                     *  Start of the ToDo section
                     */}
                    <div className={styles.scroll} style={todo.todoSection("full") as React.CSSProperties}>
                        <div style={todo.todoHeader}>ToDo</div>
                       {
                        todoData.map((item: any, i) => (
                            <div key={i} style={todo.itemContainer as React.CSSProperties}>
                                <TodoItem key={i} item={item} setRefresh={setRefresh} refresh={refresh} />
                            </div>
                        ))
                       }
                    </div>

                    {/*
                     *  Here is where new list items are created. 
                     */}
                    <div style={todo.todoSection("three") as React.CSSProperties}>
                        <div style={todo.todoHeader}>Create New Task</div>
                        <div style={todo.inputField as React.CSSProperties}>
                            <TextField
                                placeholder="Task"
                                type="text" 
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setInputText(event.target.value)}}
                                value={inputText}
                                inputProps={{
                                    style: { color: 'white' }
                                }}   
                                style={{padding: 5}} 
                            />
                            {/* ------------------------------ */}
                            <div style={{marginTop: 10, marginBottom: 10}}>Priority: {priority}</div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Button
                                    variant="contained"
                                    onClick={() => setPriority("High")}
                                    style={{flexDirection: 'column'}}
                                    sx={{
                                        backgroundColor: '#B81D13'
                                    }}
                                >
                                    <FaExclamationTriangle style={{fontSize: 22}} />
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => setPriority("Medium")}
                                    style={{flexDirection: 'column'}}
                                    sx={{
                                        backgroundColor: '#EFB700'
                                    }}
                                >
                                    <FaAngleDoubleUp style={{fontSize: 22}} />
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => setPriority("Low")}
                                    style={{flexDirection: 'column'}}
                                    sx={{
                                        backgroundColor: '#008450'
                                    }}
                                >
                                    <FaAngleUp style={{fontSize: 22}} />
                                </Button>
                            </div>
                            {/* ------------------------------ */}
                            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: 'auto', marginBottom: 5}}>
                                <Button
                                    variant="contained"
                                    onClick={() => clearFields()}
                                    style={{width: 130}}
                                    sx={{
                                        backgroundColor: 'orange',
                                        color: 'black'
                                    }}
                                >Clear</Button>
                                <Button
                                    variant="contained"
                                    onClick={() => submitTask()}
                                    style={{width: 130}}
                                >Create</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom half of the pane */}

                <div style={{display: 'flex', justifyContent: 'space-between'}}>

                    <div className={styles.scroll} style={todo.todoSection("half") as React.CSSProperties}>
                        <div style={todo.todoHeader}>Working On</div>

                        {
                            workingData.map((item: any, i) => (
                                <TodoItem key={i} item={item} setRefresh={setRefresh} refresh={refresh} small />
                            ))
                        }
                    </div>


                    <div className={styles.scroll} style={todo.todoSection("half") as React.CSSProperties}>
                        <div style={todo.todoHeader}>Completed</div>

                        {
                            completeData?.toReversed().map((item: any, i) => (
                                <TodoItem key={i} item={item} setRefresh={setRefresh} refresh={refresh} small />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default TodoList