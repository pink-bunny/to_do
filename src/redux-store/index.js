/* global process */
/* eslint-env node */

import multiMiddleware from 'redux-multi'
import thunkMiddleware from 'redux-thunk'

import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger as createLoggerMiddleware } from 'redux-logger'

import reducer from './reducer'

const isDev = process.env.NODE_ENV === 'development'

const configureStore = () => {
  const loggerMiddleware =
    createLoggerMiddleware({
      collapsed: true,
      timestamp: false
    })

  const devMiddleware = isDev
    ? [loggerMiddleware]
    : []

  const middlewares = applyMiddleware(
    multiMiddleware,
    thunkMiddleware,
    ...devMiddleware
  )

  const store = createStore(reducer,
    composeWithDevTools(middlewares)
  )

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(require('./reducer').default)
    })
  }

  return store
}

export default configureStore()
