import * as types from './types';

const initialState = {
  list: []
};

export default function project(state = initialState, action) {
  switch (action.type) {

    case types.PROJECT_IS_CREATED:
      return {
        ...state,
        list: state.list.concat(action.payload)
      };

    case types.PROJECTS_LIST_RECEIVED:
      return {
        ...state,
        list: action.payload.list
      };

    case types.PROJECTS_IS_DELETED:
      return {
        ...state,
        list: state.list.filter(({ id }) => id != action.payload)
      };

    case types.PROJECTS_IS_EDITED:
      return {
        ...state,
        list: state.list.map((project) => (
          project.id === action.payload.id ? action.payload.project : project
        ))
      };

    default:
      return state;
  }
}
