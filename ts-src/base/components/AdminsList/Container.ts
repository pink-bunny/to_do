import { connect, Store } from 'react-redux'

import State from 'base/redux-store/state'
import { getAdmins } from 'base/redux-store/admins/selectors'
import { fetchAdmins } from 'base/redux-store/admins/actions'

import RequireAuth from 'base/components/RequireAuth'

import AdminsListComponent from './Component'

const mapStateToProps = (state: State) => ({
  admins: getAdmins(state)
})

const mapDispatchToProps = {
  fetchAdmins
}

const AdminsListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(RequireAuth(AdminsListComponent))

export const loadData = (store: Store<State>): Promise<any> => store.dispatch(fetchAdmins())

export default AdminsListContainer
