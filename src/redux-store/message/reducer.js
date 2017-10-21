import { ADD_EXCLAMATION_MARK } from './types'

const initialState = 'Hello, world!'

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_EXCLAMATION_MARK:
      return state + '!'
    default:
      return state
  }
}
