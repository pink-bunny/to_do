import React from 'react'

import { AdminsArray } from 'base/redux-store/admins/reducer'
import { FetchAdminsActionCreator } from 'base/redux-store/admins/actions'

interface AdminsListComponentProps {
  admins: AdminsArray, fetchAdmins: FetchAdminsActionCreator
}

class AdminsListComponent extends React.Component<AdminsListComponentProps> {
  componentDidMount () {
    this.props.fetchAdmins()
  }

  render () {
    return (
      <div>
        Here is a big list of admins:

        <br />

        <ul>
          {this.props.admins.map(admin =>
            <li key={admin.id}>
              {admin.name}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default AdminsListComponent
