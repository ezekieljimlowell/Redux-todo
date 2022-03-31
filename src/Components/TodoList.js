import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos, onTodoClick, onTodoDelete }) => {
    console.log(todos, onTodoClick, onTodoDelete);
    return (
        <>
            {todos !== undefined && todos.map((data) =>
                <Todo
                    key={data.id}
                    {...data}
                    onClick={() => onTodoClick(data.id)}
                    onTododelete={() => onTodoDelete(data.id)}
                />
            )}
        </>
    )
}
