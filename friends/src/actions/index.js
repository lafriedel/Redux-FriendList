import axios from 'axios';

export const baseUrl = "http://localhost:5000/api/friends";

export const POST_FRIEND_INIT = "POST_FRIEND_INIT";
export const POST_FRIEND_SUCCESS = "POST_FRIEND_SUCCESS";
export const POST_FRIEND_FAIL = "POST_FRIEND_FAIL";

export const GET_FRIENDS_INIT = "GET_FRIENDS_INIT";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAIL = "GET_FRIENDS_FAIL";

export const PUT_FRIEND_INIT = "PUT_FRIEND_INIT";
export const PUT_FRIEND_SUCCESS = "PUT_FRIEND_SUCCESS";
export const PUT_FRIEND_FAIL = "PUT_FRIEND_FAIL";

export const DELETE_FRIEND_INIT = "DELETE_FRIEND_INIT";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAIL = "DELETE_FRIEND_FAIL";

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

export const updateFriend = item => dispatch => {
    dispatch({ type: PUT_FRIEND_INIT });
    axios
        .put(`${baseUrl}/${item.id}`, item)
        .then(res => dispatch({ type: PUT_FRIEND_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: PUT_FRIEND_FAIL, payload: err}));
}

export const deleteFriend = item => dispatch => {
    dispatch({ type: DELETE_FRIEND_INIT });
    axios
        .delete(`${baseUrl}/${item.id}`)
        .then(res => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_FRIEND_FAIL, payload: err }));
}