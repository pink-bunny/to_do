import State from 'base/redux-store/state'

import { UsersArray } from './reducer'

export const getUsers = (state: State): UsersArray => state.users
