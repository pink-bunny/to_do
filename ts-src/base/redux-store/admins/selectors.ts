import State from 'base/redux-store/state'

import { AdminsArray } from './reducer'

export const getAdmins = (state: State): AdminsArray => state.admins
