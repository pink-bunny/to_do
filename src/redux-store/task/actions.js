import * as types from './types';
import axios from 'axios';

export function submitSignUp (email, password, password_confirmation) {
  return function(dispatch) {
    return axios.post('http://52.56.45.37/api/v1/auth', {
      email,
      password,
      password_confirmation
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
