import {
  GET_FRIENDS_INIT,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAIL,
  POST_FRIEND_INIT,
  POST_FRIEND_SUCCESS,
  POST_FRIEND_FAIL,
  PUT_FRIEND_INIT,
  PUT_FRIEND_SUCCESS,
  PUT_FRIEND_FAIL,
  DELETE_FRIEND_INIT,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAIL
} from "../actions";

const initialState = {
  isFetching: false,
  wasFetched: false,
  isAdding: false,
  isUpdating: false,
  wasUpdated: false,
  isDeleting: false,
  wasDeleted: false,
  friends: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_INIT:
      return {
        ...state,
        isFetching: true
      };
      case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        wasFetched: true,
        friends: action.payload,
        error: ""
      };
      case GET_FRIENDS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: "There was an error. Please refresh and try again."
      };
      case POST_FRIEND_INIT:
      return {
        ...state,
        isAdding: true
      };
      case POST_FRIEND_SUCCESS:
      return {
        ...state,
        isAdding: false,
        friends: action.payload,
        error: ""
      };
      case POST_FRIEND_FAIL:
      return {
        ...state,
        isAdding: false,
        error: action.payload
      };
      case PUT_FRIEND_INIT:
      return {
        ...state,
        isUpdating: true
      };
      case PUT_FRIEND_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        wasUpdated: true,
        friends: action.payload,
        error: ""
      };
      case PUT_FRIEND_FAIL:
      return {
        ...state,
        isUpdating: false,
        error: action.payload
      };
      case DELETE_FRIEND_INIT:
      return {
        ...state,
        isDeleting: true
      };
      case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        wasDeleted: true,
        friends: action.payload,
        error: ""
      };
      case DELETE_FRIEND_FAIL:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
