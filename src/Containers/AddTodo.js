import React from "react";
import { connect, useDispatch } from "react-redux";
import { addTodo } from "../Redux/actions";
import styles from './AddTodo.module.css';

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
            <form onSubmit={addTaskHandler} className="form-group">
                <div className="row">
                    <div>
                        <div className="col-2">
                            <label className="form-check-label" id={styles.taskLabel}>Task name</label>
                            <input type="text" ref={node => input = node} className="form-control" id={styles.taskInput}></input>
                            <button type="submit" className="btn btn-outline-secondary" id={styles.addButton}>Add task</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

AddTodo = connect()(AddTodo);
export default AddTodo;