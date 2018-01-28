import express from 'express'

import React from 'react'
import ReactDOM from 'react-dom/server'

import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { StaticRouter } from 'react-router-dom'

import Application from 'client/Application'

import { configureStore } from 'base/redux-store'

const app = express()

app.use(express.static('build'))

app.get('*', (req, res) => {
  const history = createMemoryHistory()
  const store = configureStore(history)

  const html = ReactDOM.renderToString(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>React and Redux Boilerplate</title>

        <script src="/client.js" defer />
      </head>

      <body>
        <div id="app">
          <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
              <Application />
            </StaticRouter>
          </Provider>
        </div>
      </body>
    </html>
  )

  res.send(html)
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
