import history from '../../history';
import { SubmissionError } from 'redux-form';
import * as types from './types';
import axios_set from '../../service/axios_set';

const token = 'yTaQN0i2kq-ZXWAPcmtxJA';
const clientI = 'Ieh40mYK2wYxiCl2zVEpJg';
const uid = 'com@com.com';

export function submitSignUp (data) {
  return axios_set.post('auth', {
    email: data.email,
    password: data.password,
    password_confirmation: data.password_confirmation
  })
    .catch((error) => {
      throw new SubmissionError({ email: error.response.data.errors.full_messages });
    });
}

export function submitSignIn (data, dispatch) {
  return axios_set.post('auth/sign_in', {
    email: data.email,
    password: data.password
  })
    .then((response) => {
      localStorage.setItem('access-token', token)
      history.push('projects');
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
  return axios_set.delete('auth/sign_out')
    .then((response) => {
      localStorage.removeItem('access-token')
      history.push('/sign-up');
      dispatch({
        type: types.USER_LOGOUT,
      });
    })
};
