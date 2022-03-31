import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addTodo } from "../Redux/actions";
import VisibleTodoList from "./VisibleTodoList";
import { toggleTodo, deleteTodo } from "../Redux/actions";

let AddTodo = () => {
    /*const [input, setInput] = useState("");
    const changeHandler = (e) => {
        setInput(e.target.value);
    } 
    */
    let dispatch = useDispatch();
    let input;
    const addTaskHandler = (e) => {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        dispatch(addTodo(input.value));
        input.value = "";
    }

    return (
        <>
            <form onSubmit={addTaskHandler}>
                <input type="text" ref={node => input = node}></input>
                <button type="submit">Add task</button>
            </form>
        </>
    )
}

const getVisibleTodos = (todos, filter) => {
    //console.log(todos);
    switch(filter) {
        case "SHOW_ALL": 
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed === true);
        case "SHOW_ACTIVE":
            return todos.filter(t => t.completed !== true);
        default: return todos;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => dispatch(toggleTodo(id)),
        onTodoDelete: (id) => dispatch(deleteTodo(id))
    }
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);
export default AddTodo;