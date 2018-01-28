import { Reducer, AnyAction } from 'redux'

import Types from './types'

import { FetchUsersAction } from './actions'

export interface User {
  readonly id: number,
  readonly name: string
}

export type UsersArray = ReadonlyArray<User>

export type UsersState = UsersArray

const initialState: UsersState = []

const reducer: Reducer<UsersState> = (state = initialState, action: AnyAction): UsersState => {
  switch (action.type) {
    case Types.FETCH_USERS:
      return (action as FetchUsersAction).payload.data

    default:
      return state
  }
}

export default reducer
