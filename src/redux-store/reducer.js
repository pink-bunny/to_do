import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth/reducer';
import project from './project/reducer';

export default combineReducers({
  auth,
  project,
  form: formReducer,
  router: routerReducer
});
