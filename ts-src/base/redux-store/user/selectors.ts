import State from 'base/redux-store/state'

import { User } from './reducer'

export const getUser = (state: State): User | null => state.user
