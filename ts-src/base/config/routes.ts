import { RouteConfig } from 'react-router-config'

import Application from 'base/components/Application'

import Home from 'base/scenes/Home'
import Users from 'base/scenes/Users'
import Admins from 'base/scenes/Admins'
import NotFound from 'base/scenes/NotFound'

const routes: RouteConfig[] = [
  {
    ...Application,

    routes: [
      {
        path: '/',
        exact: true,
        ...Home
      },
      {
        exact: true,
        path: '/users',
        ...Users
      },
      {
        exact: true,
        path: '/admins',
        ...Admins
      },
      {
        ...NotFound
      }
    ]
  }
]

export default routes
