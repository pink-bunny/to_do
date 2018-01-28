/* eslint-env node */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter as Router } from 'react-router-redux'

import Application from './Application'

import { configureStore } from 'base/redux-store'

const history = createBrowserHistory()
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
