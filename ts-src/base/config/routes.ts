import { RouteConfig } from 'react-router-config'

import Home from 'base/scenes/Home'
import Users from 'base/scenes/Users'

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    ...Home
  },
  {
    exact: true,
    path: '/users',
    ...Users
  }
]

export default routes
