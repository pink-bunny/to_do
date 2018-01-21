/* eslint-env node */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createHashHistory } from 'history'
import { ConnectedRouter as Router } from 'react-router-redux'

import Application from './Application'

import { configureStore } from './redux-store'

const history = createHashHistory()
const store = configureStore(history)

const render = (Application: React.ComponentType) => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Router history={history}>
        <Application />
      </Router>
    </Provider>,

    document.getElementById('app')
  )
}

render(Application)

if (module.hot) {
  module.hot.accept('./Application', () => {
    render(require('./Application').default)
  })
}
