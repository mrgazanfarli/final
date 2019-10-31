import { types } from '../constants';

export const addTodoReducer = (state = [], action) => {
    switch (action.type) {
        case types.addPost:
            return [...state, action.payload];
        case types.setTodoStatus:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.completed = action.payload.status;
                }

                return todo;
            })
        default:
            return state;
    }
}

export const todoInputValueReducer = (state = '', action) => {
    switch (action.type) {
        case types.setTodoInputValue:
            return action.payload;
        default:
            return state;
    }
}