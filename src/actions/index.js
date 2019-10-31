import { types, status } from '../constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const addTodo = todo => {
    return {
        type: types.addPost,
        payload: todo
    };
}

export const setTodoStatus = (id, status) => {
    console.log(id);

    return {
        type: types.setTodoStatus,
        payload: { id, status }
    };
}

export const setTodoInputValue = value => {
    return {
        type: types.setTodoInputValue,
        payload: value
    };
}

export const setPostInputValue = value => {
    return {
        type: types.setPostInputValue,
        payload: value
    }
}

export const setPostsStatus = s => {
    return {
        type: types.setPostsStatus,
        payload: s
    }
}

export const getPosts = () => async dispatch => {
    try {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: types.setPosts,
            payload: response.data
        });
        dispatch(setPostsStatus(status.succeeded));
    } catch{
        dispatch(setPostsStatus(status.failed));
    }
}

export const searchPosts = query => async dispatch => {
    dispatch(setPostsStatus(status.loading));
    try {
        const response = await jsonPlaceholder.get(`/posts?q=${query}`);
        dispatch({
            type: types.setPosts,
            payload: response.data
        })
        dispatch(setPostsStatus(status.succeeded));
    } catch{
        dispatch(setPostsStatus(status.failed));
    }
}   