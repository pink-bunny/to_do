import * as types from './types';

const initialState = {
  name: 'John Doe',
  btn_name: 1
};

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      return {
        name: action.name
      };

    case types.BTN_CLICK:
      return {
        btn_name: action.btn_name
      };

    default:
      return state;
  }
}
