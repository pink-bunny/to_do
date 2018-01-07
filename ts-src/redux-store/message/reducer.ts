import { Action, Reducer } from 'redux'

import Types from './types'

const initialState = 'Hello, world!'

const reducer: Reducer<string> = (state: string = initialState, action: Action): string => {
  switch (action.type) {
    case Types.AddExclamationMark:
      return state + '!'

    default:
      return state
  }
}

export default reducer
