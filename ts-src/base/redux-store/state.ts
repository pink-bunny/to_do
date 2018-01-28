import { RouterState } from 'react-router-redux'

import { UsersState } from './users/reducer'

export default interface State {
  router: RouterState,
  users: UsersState
}
