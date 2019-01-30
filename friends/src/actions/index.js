import axios from 'axios';

export const POST_FRIEND_INIT = "POST_FRIEND_INIT";
export const GET_FRIENDS_INIT = "GET_FRIENDS_INIT";

export const getFriends = () => dispatch => {
    dispatch({ type: GET_FRIENDS_INIT })
}

export const postNewFriend = () => dispatch => {
    dispatch({ type: POST_FRIEND_INIT })
}