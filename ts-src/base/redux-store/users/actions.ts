import { Dispatch, ActionCreator } from 'redux'
import Axios, { AxiosResponse } from 'axios'
import { ThunkAction } from 'redux-thunk'

import State from 'base/redux-store/state'

import Types from './types'
import { UsersArray } from './reducer'

export interface FetchUsersAction {
  type: Types, payload: AxiosResponse<UsersArray>
}

export type FetchUsersActionCreator =
  ActionCreator<ThunkAction<Promise<any>, State, null>>

export const fetchUsers: FetchUsersActionCreator = () => (dispatch: Dispatch<State>) => (
  Axios.get<UsersArray>('https://react-ssr-api.herokuapp.com/users').then(response => {
    dispatch({ type: Types.FETCH_USERS, payload: response } as FetchUsersAction)
  })
)
