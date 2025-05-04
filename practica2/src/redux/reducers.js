import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, LOAD_TODOS } from './actions';

const initialState = {
    todos: []
};

const saveToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

export default function todoReducer(state = initialState, action) {
    let newState;
    
    switch (action.type) {
        case LOAD_TODOS:
            return {
                ...state,
                todos: action.payload
            };
            
        case ADD_TODO:
            newState = {
                ...state,
                todos: [...state.todos, action.payload]
            };
            saveToLocalStorage(newState.todos);
            return newState;
            
        case DELETE_TODO:
            newState = {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
            saveToLocalStorage(newState.todos);
            return newState;
            
        case TOGGLE_TODO:
            newState = {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
            saveToLocalStorage(newState.todos);
            return newState;
            
        default:
            return state;
    }
}