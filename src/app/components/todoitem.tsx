import { FC, useEffect, useState } from "react";
import { todo } from "../styles/styles";
import { Button } from "@mui/material";
import { FaChevronUp, FaChevronDown, FaEraser } from "react-icons/fa";
import { invoke } from "@tauri-apps/api/tauri";

interface ItemProps {
    item: {
        type: string
        task: string,
        priority: string,
        date: string,
        time: string
    }
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    refresh: boolean,
    small?: boolean | undefined
}

const TodoItem:FC<ItemProps> = ({ item, setRefresh, refresh, small }) => {

    const [isSmall, setSmall] = useState<boolean>(false);

    const removeTask = async (time: string, date: string) => {
        let result = await invoke('remove_task', {"time": time, "date": date})
    
        if ( await result === 'success' ) {
            setRefresh(!refresh)
        }
    }

    const raiseStatus = async (current: string, time: string, date: string) => {
        let result

        if ( current === 'complete' ) {
            alert("cannot raise the task beyond complete!")
        } else if ( current === 'todo' ) {
            result = await invoke('modify_todo_status', {"newType": "working", "date": date, "time": time})
        } else if ( current === 'working' ) {
            result = await invoke('modify_todo_status', {"newType": "complete", "date": date, "time": time})
        }

        if ( result === 'success' ) {
            setRefresh(!refresh)
        }
    }

    const lowerStatus = async (current: string, time: string, date: string) => {
        let result

        if ( current === 'todo' ) {
            alert("cannot lower the task beyond todo!")
        } else if ( current === 'working' ) {
            result = await invoke('modify_todo_status', {"newType": "todo", "date": date, "time": time})
        } else if ( current === 'complete' ) {
            result = await invoke('modify_todo_status', {"newType": "working", "date": date, "time": time})
        }

        if ( result === 'success' ) {
            setRefresh(!refresh)
        }
    }

    useEffect(() => {
        if ( small ) { setSmall(true) }
    }, [small])

    return (
        <div style={todo.todoCard(isSmall) as React.CSSProperties}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                {item.task}
                <Button
                    variant="contained"
                    style={{marginLeft: 'auto', marginRight: 10}}
                    onClick={() => raiseStatus(item.type, item.time, item.date)}
                >
                    <FaChevronUp />
                </Button>
                <Button
                    variant="contained"
                    style={{marginRight: 10}}
                    onClick={() => lowerStatus(item.type, item.time, item.date)}
                >
                    <FaChevronDown />
                </Button>
                <Button
                    variant="contained"
                    onClick={() => removeTask(item.time, item.date)}
                >
                    <FaEraser />
                </Button>
            </div>
            <hr style={{
                width: isSmall ? '23.2vw' : '32.5vw', 
                marginBottom: 0,
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: item.priority === 'High' ? '#B81D13' 
                    : item.priority === 'Medium' ? '#EFB700' 
                    : '#008450',
                borderRadius: 10
            }}/>
        </div>
    )
}

export default TodoItem