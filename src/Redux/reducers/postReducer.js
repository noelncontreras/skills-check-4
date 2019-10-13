import axios from "axios";

//initialState
const initialState = {
    posts: []
};

//constants
const GET_ALL_POSTS = "GET_ALL_POSTS";
const ADD_POST = "ADD_POST";

//action creators
export function getAllPosts() {
    return {
        type: GET_ALL_POSTS,
        payload: axios.get(`/api/posts`)
    };
};

export function addPost(newPost) {
    return {
        type: ADD_POST,
        payload: axios.post("/api/post", newPost)
    };
};

//reducer
export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case `${GET_ALL_POSTS}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };
        case `${ADD_POST}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };
        default:
            return state;
    };
};