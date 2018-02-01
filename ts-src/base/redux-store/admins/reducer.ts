import { Reducer, AnyAction } from 'redux'

import Types from './types'

import { FetchAdminsAction } from './actions'

export interface Admin {
  readonly id: number,
  readonly name: string
}

export type AdminsArray = ReadonlyArray<Admin>

export type AdminsState = AdminsArray

const initialState: AdminsState = []

const reducer: Reducer<AdminsState> = (state = initialState, action: AnyAction): AdminsState => {
  switch (action.type) {
    case Types.FETCH_ADMINS:
      return (action as FetchAdminsAction).payload.data

    default:
      return state
  }
}

export default reducer
