import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../Redux/actions";

const TodoList = (props) => {

    let dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteTask(id));
    }

    let viewDelete = useSelector((state) => {
        console.log(state);
    })
    console.log(viewDelete);

    return (
        <div>
            {props.viewAdd !== undefined && props.viewAdd.map((data, index) =>
                <div key={data.id}>
                    <div>{data.input}</div>
                    <button type="button" onClick={() => deleteHandler(data.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export const MemoizedTodoList = React.memo(TodoList);