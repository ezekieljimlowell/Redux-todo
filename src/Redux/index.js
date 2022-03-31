import { combineReducers } from "redux";
import { visibilityFilter, todos } from "./reducer";

export const combinedReducer = combineReducers({
    visibilityFilter,
    todos
})