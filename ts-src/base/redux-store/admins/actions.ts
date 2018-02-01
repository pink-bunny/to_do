import { AxiosInstance, AxiosResponse } from 'axios'
import { ThunkAction } from 'redux-thunk'
import { ActionCreator } from 'redux'

import State from 'base/redux-store/state'

import Types from './types'
import { AdminsArray } from './reducer'

export interface FetchAdminsAction {
  type: Types, payload: AxiosResponse<AdminsArray>
}

export type FetchAdminsActionCreator = ActionCreator<
  ThunkAction<Promise<any>, State, AxiosInstance>
>

export const fetchAdmins: FetchAdminsActionCreator = () => (dispatch, _, axios) => (
  axios.get<AdminsArray>('/admins').then(response => {
    dispatch({ type: Types.FETCH_ADMINS, payload: response } as FetchAdminsAction)
  })
)
