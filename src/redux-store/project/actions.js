import history from '../../history';
import { reset } from 'redux-form';
import * as types from './types';
import axios_set from '../../service/axios_set';

export function createProject (data, dispatch) {
  return axios_set.post('projects', {
    'data': {
      'type': 'projects',
      'attributes': {
        'name': data.name
      }
    }
  })
    .then(() => {
      dispatch({
        type: types.PROJECT_IS_CREATED,
      });
      dispatch(reset('createProjectForm'));
    })
    .catch((error) => {
      console.log('createProject error', error.response);
      // throw new SubmissionError({ _error: error.response.data.errors[0] });
    });
}

export function projectsList () {
  return function (dispatch) {
    axios_set.get('projects')
      .then((response) => {
        dispatch({
          type: types.PROJECTS_LIST_RECEIVED,
          payload: {
            list: response.data.data
          }
        });
      });
  };
}
