import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../Redux/actions";
import { TodoList } from "../Components/TodoList";

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
    //console.log(state);
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

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
