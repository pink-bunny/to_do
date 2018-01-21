import { ActionCreator, Action } from 'redux'

import Types from './types'

export const addExclamationMark: ActionCreator<Action> =
  () => ({ type: Types.AddExclamationMark })
