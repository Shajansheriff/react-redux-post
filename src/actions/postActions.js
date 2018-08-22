import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(data => dispatch({
        type: FETCH_POSTS,
        payload: data
    }))
    .catch(() => console.log("Error in fetching posts"));
};
