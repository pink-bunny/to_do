import React from 'react'

import { Link } from 'react-router-dom'

import { User } from 'base/redux-store/user/reducer'

interface HeaderComponentPropTypes { user: User }
type HeaderComponentType = React.SFC<HeaderComponentPropTypes>

const HeaderComponent: HeaderComponentType = (props) => (
  <div>
    <Link to='/'>React SSR</Link>

    <div>
      <Link to='/users'>Users</Link>
      <Link to='/admins'>Admins</Link>

      {
        props.user
          ? <a href='/api/logout'>Logout</a>
          : <a href='/api/auth/google'>Login</a>
      }
    </div>
  </div>
)

export default HeaderComponent
