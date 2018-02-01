import { RouteConfig } from 'react-router-config'

import Application from 'base/components/Application'

import Home from 'base/scenes/Home'
import Users from 'base/scenes/Users'
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
        ...NotFound
      }
    ]
  }
]

export default routes
