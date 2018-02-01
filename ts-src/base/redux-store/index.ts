import { History } from 'history'
import { AxiosInstance } from 'axios'

import multiMiddleware from 'redux-multi'
import thunkMiddleware from 'redux-thunk'

import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger as createLoggerMiddleware } from 'redux-logger'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'

import * as env from 'base/config/env'

import State from './state'
import reducer from './reducer'

const configureStore = (history: History, axiosInstance: AxiosInstance, preloadedState?: State) => {
  const loggerMiddleware =
    createLoggerMiddleware({
      collapsed: true,
      timestamp: false
    })

  const routerMiddleware =
    createRouterMiddleware(
      history
    )

  const devMiddleware =
    env.DEV_ENV && env.CLIENT_WEBPACK_BUILD_TARGET
      ? [loggerMiddleware] : []

  const middlewares = applyMiddleware(
    multiMiddleware,
    routerMiddleware,

    thunkMiddleware.withExtraArgument(axiosInstance),

    ...devMiddleware
  )

  const store = !preloadedState
    ? createStore(reducer, composeWithDevTools(middlewares))
    : createStore(reducer, preloadedState, composeWithDevTools(middlewares))

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(require('./reducer').default)
    })
  }

  return store
}

export { configureStore }
