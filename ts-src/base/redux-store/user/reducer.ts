import { Reducer, AnyAction } from 'redux'

import Types from './types'

import { FetchCurrentUserAction } from './actions'

export interface User {
  readonly _id: string,
  readonly __v: string,
  readonly googleId: string
}

export type UserState = User | null

const initialState: UserState = null

const reducer: Reducer<UserState> = (state = initialState, action: AnyAction): UserState => {
  switch (action.type) {
    case Types.FETCH_CURRENT_USER:
      return (action as FetchCurrentUserAction).payload.data || null

    default:
      return state
  }
}

export default reducer
