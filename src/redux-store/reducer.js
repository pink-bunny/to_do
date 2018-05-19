import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import task from './task/reducer';

export default combineReducers({
  task,
  form: formReducer,
  router: routerReducer
});
