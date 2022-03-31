import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
    ADD_TASK,
    DELETE_TASK,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    visibilityFilters
} from './actions';

const { SHOW_ALL } = visibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
    //console.log(state, action);
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default: return state;
    }
} 

const todos = (state = [], action) => {
    //console.log(state, action)
    switch(action.type) {
        case ADD_TASK:
            console.log(state, action);
            return [
                ...state,
                {
                    task: action.task,
                    completed: false,
                    id: state.length
                }
            ]
        case DELETE_TASK: 
            return state.filter(data => data.id === action.id);
        case TOGGLE_TODO: 
            return state.map((data, index) => {
                if(action.id === index) {
                    return Object.assign({}, data, {
                        completed: !data.completed
                    })
                }
                return data;
            })
        default: return state;
    }
}

export {visibilityFilter, todos};