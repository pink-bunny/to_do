import axios from 'axios';
import history from '../../history';
import { SubmissionError } from 'redux-form';
import * as types from './types';

export function submitSignUp (data) {
  return axios.post('http://52.56.45.37/api/v1/auth', {
    email: data.email,
    password: data.password,
    password_confirmation: data.password_confirmation
  })
    .catch((error) => {
      throw new SubmissionError({ email: error.response.data.errors.full_messages });
    });
}

export function submitSignIn (data, dispatch) {
  return axios.post('http://52.56.45.37/api/v1/auth/sign_in', {
    email: data.email,
    password: data.password
  })
    .then((response) => {
      history.push('/');
      dispatch({
        type: types.RECEIVE_AUTH_DATA,
        payload: response.data.data
      });
    })
    .catch((error) => {
      throw new SubmissionError({ _error: error.response.data.errors[0] });
    });
}


export const submitSignOut = () => (dispatch) => {
  console.log('LOGOUT start');
  return axios.delete('http://52.56.45.37/api/v1/auth/sign_out')
    .then((response) => {
      console.log('LOGOUT response', response);
      history.push('/sign-up');
      dispatch({
        type: types.USER_LOGOUT,
        // payload: response.data.data
      });
    })
    .catch((error) => {
      console.log('LOGOUT error', error.response.data.errors[0]);
      // throw new SubmissionError({ _error: error.response.data.errors[0] });
    });
};
