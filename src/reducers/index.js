import { combineReducers } from 'redux';

import { addTodoReducer, todoInputValueReducer } from './todos';
import { postInputValueReducer, postsReducer, postsStatusReducer } from './posts';

export default combineReducers({
    todos: addTodoReducer,
    todoInputValue: todoInputValueReducer,
    postInputValue: postInputValueReducer,
    posts: postsReducer,
    postsStatus: postsStatusReducer
});