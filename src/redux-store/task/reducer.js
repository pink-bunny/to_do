import * as types from './types';

const initialState = {
  email: ''
};

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.RECEIVE_AUTH_DATA:
      return {
        ...state,
        ...action.payload
      };

    case types.PROJECT_IS_CREATED:
      return {
        ...state,
        ...action.payload
      };

    case types.PROJECTS_LIST_RECEIVED:
      return {
        ...state,
        // projects: action.payload.projects
        ...action.payload
      };

    default:
      return state;
  }
}
