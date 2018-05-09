import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import message from './message/reducer';
import task from './task/reducer';

export default combineReducers({
  message,
  task,
  form: formReducer,
  router: routerReducer
});
