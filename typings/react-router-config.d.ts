import 'react-router-config'
import { Store } from 'redux'

import State from 'base/redux-store/state'

declare module 'react-router-config' {
  export interface RouteConfig {
    loadData?: (store: Store<State>) => Promise<any>
  }
}
