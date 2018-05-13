import axios from 'axios';
import { SubmissionError } from 'redux-form'

export function submitSignUp (data) {
  return axios.post('http://52.56.45.37/api/v1/auth', {
    email: data.email,
    password: data.password,
    password_confirmation: data.password_confirmation
  }
  ).catch((error) => {
    throw new SubmissionError({ email: 'Email has already been taken' })
  });
}
export function submitSignIn (email, password) {
  return function(dispatch) {
    return axios.post('http://52.56.45.37/api/v1/auth/sign_in', {
      email,
      password,
    })
  }
}
