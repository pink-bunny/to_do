import * as types from './types';

export function addFriend (name) {
  return {
    type: types.ADD_FRIEND,
    name
  };
}
export function clickButton(btn_name) {
  return {
    type: types.BTN_CLICK,
    btn_name: btn_name + 1
  };
}
