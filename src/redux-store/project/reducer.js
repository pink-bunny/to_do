import * as types from './types';

const initialState = {
  list: []
};

export default function project(state = initialState, action) {
  console.log('state', state);
  switch (action.type) {

    case types.PROJECT_IS_CREATED:
      return {
        ...state,
        ...action.payload
      };

    case types.PROJECTS_LIST_RECEIVED:
      return {
        ...state,
        list: action.payload.list
      };

    case types.PROJECTS_IS_DELETED:
      return {
        ...state
      }
      // return state.list.filter(({ id }) => id !== action.payload);

    case types.PROJECTS_IS_EDITED:
      return {
        ...state
      };

    default:
      return state;
  }
}
