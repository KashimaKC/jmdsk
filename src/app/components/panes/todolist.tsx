import { FC, useEffect, useState } from "react";
import { todo } from "@/app/styles/styles";
import { FaPlus } from "react-icons/fa";
import { Button, Fade } from "@mui/material";
import { invoke } from "@tauri-apps/api/tauri";
import TodoItem from "../todoitem";

const TodoList:FC = () => {

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

    return (
        <Fade in timeout={500}>
            <div style={todo.todoContainer as React.CSSProperties}>
                <div style={todo.todoSection("full")}>
                    <div style={todo.todoHeader}>
                        ToDo
                        <Button
                            onClick={() => setRefresh(!refresh)}
                        >
                            <FaPlus />
                        </Button>
                    </div>

                   {    
                    todoData.map((item: any, i) => (
                        <TodoItem key={i} item={item} />
                    ))
                   }
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>

                    <div style={todo.todoSection("half")}>
                        <div style={todo.todoHeader}>Working On</div>

                        {
                            workingData.map((item: any, i) => (
                                <TodoItem key={i} item={item} />
                            ))
                        }
                    </div>


                    <div style={todo.todoSection("half")}>
                        <div style={todo.todoHeader}>Completed</div>

                        {
                            completeData.map((item: any, i) => (
                                <TodoItem key={i} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default TodoList