import axios from 'axios';

export const baseUrl = "http://localhost:5000/api/friends";

export const POST_FRIEND_INIT = "POST_FRIEND_INIT";
export const POST_FRIEND_SUCCESS = "POST_FRIEND_SUCCESS";
export const POST_FRIEND_FAIL = "POST_FRIEND_FAIL";

export const GET_FRIENDS_INIT = "GET_FRIENDS_INIT";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAIL = "GET_FRIENDS_FAIL";

export const getFriends = () => dispatch => {
    dispatch({ type: GET_FRIENDS_INIT });
    axios
        .get(baseUrl)
        .then(res => dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_FRIENDS_FAIL, payload: err }));
}

export const postNewFriend = item => dispatch => {
    dispatch({ type: POST_FRIEND_INIT });
    axios
    .post(baseUrl, item)
    .then(res => dispatch({ type: POST_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: POST_FRIEND_FAIL, payload: err }));
}