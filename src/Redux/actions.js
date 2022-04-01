export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TASK = "DELETE_TASK";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const visibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}

const addTodo = (task) => {
    return {
        type: ADD_TASK,
        task
    }
}

const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

const deleteTodo = (id) => {
    //console.log(id);
    return {
        type: DELETE_TASK,
        id
    }
}

const setVisibilityFilter = (filter) => {
    //console.log(filter);
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

export { addTodo, toggleTodo, deleteTodo, setVisibilityFilter }