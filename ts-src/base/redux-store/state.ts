import { RouterState } from 'react-router-redux'

import { UserState } from './user/reducer'
import { UsersState } from './users/reducer'
import { AdminsState } from './admins/reducer'

export default interface State {
  router: RouterState,
  admins: AdminsState,
  users: UsersState,
  user: UserState
}
