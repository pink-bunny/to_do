import history from '../../history';
import { SubmissionError } from 'redux-form';
import * as types from './types';
import axios_set from '../../service/axios_set';

export function createProject (data, dispatch) {
  return axios_set.post('projects', {
      'data': {
        'type': 'projects',
        'attributes': {
          'name': 'data.name'
        }
      }
    })
    .then((response) => {
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

export function projectsList (dispatch) {
  console.log('axios_set', axios_set);
  return axios_set.get('projects')
    .then((response) => {
      console.log('projectsList response', response.data.data);
      dispatch({
        type: types.PROJECTS_LIST_RECEIVED,
        payload: response.data.data
      });
      console.log('projectsList end');
    })
    .catch((error) => {
      console.log('projectsList error', error.response);
      // throw new SubmissionError({ _error: error.response.data.errors[0] });
    });
}
