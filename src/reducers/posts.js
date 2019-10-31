import { types, status } from '../constants';

export const postInputValueReducer = (state = '', action) => {
    switch (action.type) {
        case types.setPostInputValue:
            return action.payload;
        default:
            return state;
    }
}

export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case types.setPosts:
            return action.payload;
        default:
            return state;
    };
}

export const postsStatusReducer = (state = status.loading, action) => {
    switch (action.type) {
        case types.setPostsStatus:
            return action.payload;
        default:
            return state;
    };
}