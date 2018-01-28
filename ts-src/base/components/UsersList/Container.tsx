import { connect } from 'react-redux'

import State from 'base/redux-store/state'
import { getUsers } from 'base/redux-store/users/selectors'
import { fetchUsers } from 'base/redux-store/users/actions'

import UsersListComponent from './Component'

const mapStateToProps = (state: State) => ({
  users: getUsers(state)
})

const mapDispatchToProps = {
  fetchUsers
}

const UsersListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(UsersListComponent)

export default UsersListContainer