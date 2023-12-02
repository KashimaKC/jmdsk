import { FC } from "react";
import { todo } from "../styles/styles";

interface ItemProps {
    key: number,
    item: {
        type: string
        task: string
    }
}

//
//  notes: write out the logic to create new todo items. continue with creating the update invoke logic
//  create the styles and invokes for the task cards to move them around and refresh the page when moved
//  maybe add priorities and extra fields/date and time when todo tasks are created. time elapsed since creation?
//

const TodoItem:FC<ItemProps> = ({ key, item }) => {
    return (
        <div key={key}>
            {item.task}
        </div>
    )
}

export default TodoItem