import history from '../../history';
import { SubmissionError } from 'redux-form';
import * as types from './types';
import client from '../../service/client';

export function submitSignUp (data) {
  return client.post('auth', {
    email: data.email,
    password: data.password,
    password_confirmation: data.password_confirmation
  })
    .catch((error) => {
      throw new SubmissionError({ email: error.response.data.errors.full_messages });
    });
}

export function submitSignIn (data, dispatch) {
  return client.post('auth/sign_in', {
    email: data.email,
    password: data.password
  })
    .then((response) => {
      localStorage.setItem('access-token', '8TffsxhR2-vy1hpIPARd7Q')
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
  console.log('LOGOUT start');
  const options = {
    method: 'DELETE',
    headers: { 'uid': 'admin@admin.com', 'client': 'H3ofYtyswbTbd8u_MfIdHw' },
    url: 'auth/sign_out',
  };
  return client(options)
    .then((response) => {
      localStorage.removeItem('access-token')
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

export function createProject (data, dispatch) {
  console.log('createProject data', data);
  return client.get('projects', {
    'data': {
      'type': 'projects',
      'attributes': {
        'name': 'data.name'
      }
    }
  })
    .then((response) => {
      console.log('createProject response', response);
      dispatch({
        type: types.PROJECT_IS_CREATED,
        // payload: response.data.data
      });
    })
    .catch((error) => {
      console.log('createProject error', error.response);
      // throw new SubmissionError({ _error: error.response.data.errors[0] });
    });
}
