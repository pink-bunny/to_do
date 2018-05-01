import * as types from './types';
import axios from 'axios';

export function submitSignUp (email, password, password_confirmation) {
  return function(dispatch) {
    return axios.post('http://52.56.45.37/api/v1/auth', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        email,
        password,
        password_confirmation
      }
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
