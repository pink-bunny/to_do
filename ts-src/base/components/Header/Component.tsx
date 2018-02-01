import React from 'react'

import { Link } from 'react-router-dom'

import { User } from 'base/redux-store/user/reducer'

interface HeaderComponentPropTypes { user: User }
type HeaderComponentType = React.SFC<HeaderComponentPropTypes>

const HeaderComponent: HeaderComponentType = (props) => (
  <nav>
    <div className='nav-wrapper'>
      <Link to='/' className='brand-logo'>React SSR</Link>

      <ul className='right'>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/admins'>Admins</Link></li>

        <li>
          {
            props.user
              ? <a href='/api/logout'>Logout</a>
              : <a href='/api/auth/google'>Login</a>
          }
        </li>
      </ul>
    </div>
  </nav>
)

export default HeaderComponent
