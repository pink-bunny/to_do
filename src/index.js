/* eslint-env node */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Application from './Application'

import store from './redux-store'

const render = Application => {
  ReactDOM.render(
    <Provider store={store}>
      <Application />
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
