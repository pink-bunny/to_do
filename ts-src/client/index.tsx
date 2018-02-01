import axios from 'axios'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter as Router } from 'react-router-redux'

import Routes from 'base/components/Routes'

import { configureStore } from 'base/redux-store'

const history = createBrowserHistory()
const axiosInstance = axios.create({ baseURL: '/api' })
const store = configureStore(history, axiosInstance, window.INITIAL_STATE)

const render = (Routes: React.ComponentType) => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>,

    document.getElementById('app')
  )
}

render(Routes)

if (module.hot) {
  module.hot.accept('base/components/Routes', () => {
    render(require('base/components/Routes').default)
  })
}
