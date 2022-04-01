import React from "react";
import styles from './Todo.module.css';

export const Todo = (props) => {
    const {task, completed, onClick, onTodoDelete} = props;

    return (
        <div>
            <div style={{textDecoration: completed ? "line-through" : "none"}} className={styles.taskText}>
                {task}
            </div>
            <button className={`btn btn-secondary ${styles.completeButton}`} onClick={onClick}>{completed ? "InComplete" : "Complete"}</button>
            <button className={`btn btn-secondary ${styles.deleteButton}`} onClick={onTodoDelete}>Delete</button>
        </div>
    )
}