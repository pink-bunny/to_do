import * as types from './types';
import axios from 'axios';

export function submitSignUp (data) {
  console.log('DATA', data);
  return function(dispatch) {
    return axios.post('http://52.56.45.37/api/v1/auth', {
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation
    }).then((response) => {
      console.log('RESPONSE', response);
    }).catch((error) => {
      console.log('ERROR', error);
      for (var key in error) {
        console.log( 'Ключ: ' + key + ' значение: ' + error[key] );
      }
    });
  }
}
export function submitSignIn (email, password) {
  return function(dispatch) {
    return axios.post('http://52.56.45.37/api/v1/auth/sign_in', {
      email,
      password,
    })
  }
}

// export function addFriend (name) {
//   return {
//     type: types.ADD_FRIEND,
//     name
//   };
// }
// export function clickButton(btn_name) {
//   return {
//     type: types.BTN_CLICK,
//     btn_name: btn_name + 1
//   };
// }
