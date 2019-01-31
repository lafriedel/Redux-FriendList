import {
  GET_FRIENDS_INIT,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAIL
} from "../actions";

const initialState = {
  isFetching: false,
  wasFetched: false,
  isSaving: false,
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
    default:
      return state;
  }
};

export default reducer;
