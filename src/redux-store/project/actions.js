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
    .then((response) => {
      dispatch({
        type: types.PROJECT_IS_CREATED,
        payload: response.data.data
      });
      dispatch(reset('createProjectForm'));
    })
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

export function deleteProject (id) {
  return function (dispatch) {
    axios_set.delete(`projects/${id}`)
      .then(() => {
        dispatch({
          type: types.PROJECTS_IS_DELETED,
          payload: id
        });
      });
  };
}

export function editProject (data, dispatch, props) {
  return axios_set.patch(`projects/${props.project.id}`, {
    'data': {
      'id': props.project.id,
      'type': 'projects',
      'attributes': {
        'name': data.name
      }
    }
  })
    .then((response) => {
      dispatch({
        type: types.PROJECTS_IS_EDITED,
        payload: {
          id: props.project.id,
          project: response.data.data
        }
      });
    });
}
