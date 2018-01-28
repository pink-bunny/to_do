import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'

import State from './state'

import users from './users/reducer'

export default combineReducers<State>({
  users, router: routerReducer
})
