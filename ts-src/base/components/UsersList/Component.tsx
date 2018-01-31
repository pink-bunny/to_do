import React from 'react'

import { UsersArray } from 'base/redux-store/users/reducer'
import { FetchUsersActionCreator } from 'base/redux-store/users/actions'

interface UsersListComponentProps {
  users: UsersArray, fetchUsers: FetchUsersActionCreator
}

class UsersListComponent extends React.PureComponent<UsersListComponentProps> {
  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    return (
      <div>
        Here is a big list of users:

        <br />

        <ul>
          {this.props.users.map(user =>
            <li key={user.id}>
              {user.name}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default UsersListComponent
