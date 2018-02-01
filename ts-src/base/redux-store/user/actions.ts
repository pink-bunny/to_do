import { AxiosInstance, AxiosResponse } from 'axios'
import { ThunkAction } from 'redux-thunk'
import { ActionCreator } from 'redux'

import State from 'base/redux-store/state'

import Types from './types'
import { User } from './reducer'

export interface FetchCurrentUserAction {
  type: Types, payload: AxiosResponse<User | ''>
}

export type FetchCurrentUserActionCreator = ActionCreator<
  ThunkAction<Promise<any>, State, AxiosInstance>
>

export const fetchCurrentUser: FetchCurrentUserActionCreator = () => (dispatch, _, axios) => (
  axios.get<User>('/current_user').then(response => {
    dispatch({ type: Types.FETCH_CURRENT_USER, payload: response } as FetchCurrentUserAction)
  })
)
