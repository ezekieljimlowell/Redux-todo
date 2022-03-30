export const ADD_TASK = "ADDTASK";
export const EDIT_TASK = "EDITTASK";
export const DELETE_TASK = "DELETETASK";
export const COMPLETED = "COMPLETED";

const initialState = [];

export const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    //console.log(payload, type, state);
    switch (type) {
        case ADD_TASK:
            state.push(payload);
            return [
                ...payload
            ]
        case DELETE_TASK:
            const deleted = state.filter((data) =>
                data.id === payload
            );
            state = deleted;
            console.log(state);
            return state;
        default: return state;
    }
}