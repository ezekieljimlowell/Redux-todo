import React, { useCallback, useState } from "react";
import { MemoizedTodoList } from "./TodoList";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Redux/actions";
import PropTypes from 'prop-types';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [input, setInput] = useState("");

    let dispatch = useDispatch();

    const handleTask = (e) => {
        setInput(e.target.value);
    }

    const add = () => {
        const taskList = [...todoList];
        if(input !== "") {
            const taskObject = {input: input, completed: false, id: uuid()}
            const concatenatedList = taskList.concat(taskObject);
            setTodoList(concatenatedList);
            dispatch(addTask(concatenatedList));
        }
    }

    let viewAdd = useCallback(useSelector((state) => {
        return state;
    }), [todoList]);

    return (
        <>
            <input type="text" onChange={handleTask} ></input>
            <button type="button" onClick={add}>Add Task</button>
            <MemoizedTodoList viewAdd={viewAdd}/>
        </>
    )
}

Todo.propTypes = {

}

export default Todo;