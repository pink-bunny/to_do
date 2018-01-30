import * as React from 'react'

import UsersList from 'base/components/UsersList'
import { loadData } from 'base/components/UsersList'

const Users = () => (
  <UsersList />
)

export default { component: Users, loadData }
