import * as types from './types';

const initialState = {};

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.RECEIVE_AUTH_DATA:
      return {
        ...state,
        ...action.payload
      };

    case types.USER_LOGOUT:
      return {
        ...initialState
      };

    default:
      return state;
  }
}
