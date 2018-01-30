import State from 'base/redux-store/state'

declare global {
  interface Window {
    readonly INITIAL_STATE: State
  }
}
