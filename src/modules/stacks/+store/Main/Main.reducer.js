import {
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_PROGRESS,
  GET_USER_INFO_SUCCESS,
  UPDATE_MAIN_CUSTOM_STATE,
} from './Main.actionTypes';

const initialState = {
  userInfo: {
    success: null,
    loading: true,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MAIN_CUSTOM_STATE:
      return {
        ...state,
        [action?.key]: action?.value,
      };
    case GET_USER_INFO_PROGRESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          loading: true,
        },
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.result,
          loading: false,
        },
      };

    case GET_USER_INFO_FAILURE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,

          loading: false,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
