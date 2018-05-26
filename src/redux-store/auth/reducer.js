import * as types from './types';

const initialState = {
  isLoggedIn: false
};

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.RECEIVE_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true
      };

    case types.USER_LOGOUT:
      return {
        ...initialState,
        isLoggedIn: false
      };

    default:
      return state;
  }
}
