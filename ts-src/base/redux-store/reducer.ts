import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'

import State from './state'

import user from './user/reducer'
import users from './users/reducer'

export default combineReducers<State>({
  user, users, router: routerReducer
})
