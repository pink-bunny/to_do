import { Store } from 'react-redux'

import State from 'base/redux-store/state'

import { fetchCurrentUser } from 'base/redux-store/user/actions'

export const loadData = (store: Store<State>): Promise<any> => store.dispatch(fetchCurrentUser())

export { default } from './Component'
