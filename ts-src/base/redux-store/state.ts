import { RouterState } from 'react-router-redux'

import { UserState } from './user/reducer'
import { UsersState } from './users/reducer'

export default interface State {
  router: RouterState,
  users: UsersState,
  user: UserState
}
