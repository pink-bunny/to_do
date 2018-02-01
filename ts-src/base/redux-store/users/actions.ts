import { AxiosInstance, AxiosResponse } from 'axios'
import { ThunkAction } from 'redux-thunk'
import { ActionCreator } from 'redux'

import State from 'base/redux-store/state'

import Types from './types'
import { UsersArray } from './reducer'

export interface FetchUsersAction {
  type: Types, payload: AxiosResponse<UsersArray>
}

export type FetchUsersActionCreator = ActionCreator<
  ThunkAction<Promise<any>, State, AxiosInstance>
>

export const fetchUsers: FetchUsersActionCreator = () => (dispatch, _, axios) => (
  axios.get<UsersArray>('/users').then(response => {
    dispatch({ type: Types.FETCH_USERS, payload: response } as FetchUsersAction)
  })
)
