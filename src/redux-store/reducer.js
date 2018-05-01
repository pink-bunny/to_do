import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import message from './message/reducer';
import task from './task/reducer';

export default combineReducers({
  message, task, router: routerReducer
});
