import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import message from './message/reducer'

export default combineReducers({
  message, router: routerReducer
})
