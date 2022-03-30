import { ADD_TASK, DELETE_TASK } from "./reducer";

const addTask = (task) => {
    //console.log(task);
    return {
        type: ADD_TASK,
        payload: task
    }
}

const deleteTask = (id) => {
    console.log(id);
    return {
        type: DELETE_TASK,
        payload: id
    }
}

const completeTask = (isCompleted) => {
    return {
        type: "COMPLETED",
        payload: isCompleted
    }
}

export { addTask, deleteTask, completeTask }