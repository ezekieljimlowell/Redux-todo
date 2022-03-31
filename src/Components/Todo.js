import React from "react";

export const Todo = (props) => {
    console.log(props);
    const {task, completed, onClick, onTodoDelete} = props;

    return (
        <>
            <div style={{textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </div>
            <button onClick={onClick}>{completed ? "InComplete" : "Complete"}</button>
            <button onClick={onTodoDelete}>Delete</button>
        </>
    )
}