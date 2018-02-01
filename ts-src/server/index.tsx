import axios from 'axios'
import express from 'express'

import React from 'react'
import ReactDOM from 'react-dom/server'

import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'
import { createMemoryHistory } from 'history'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import expressHttpProxy from 'express-http-proxy'

import Routes from 'base/components/Routes'

import routes from 'base/config/routes'
import { configureStore } from 'base/redux-store'

const app = express()

app.use(
  '/api',

  expressHttpProxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator: (options) => {
      options.headers['x-forwarded-host'] = 'localhost:3000'

      return options
    }
  })
)

app.use(express.static('build'))

app.get('*', (req, res) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  })

  const history = createMemoryHistory()

  const store = configureStore(
    history, axiosInstance
  )

  const promises: Promise<any>[] =
    matchRoutes(routes, req.path)
      .map(({ route }) =>
        route.loadData
          ? route.loadData(store)
          : null
      )
      .filter(v => v !== null) as Promise<any>[]

  const context: any = {}

  Promise.all(promises).then(() => {
    const html = ReactDOM.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>React and Redux Boilerplate</title>

          <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" />

          <script dangerouslySetInnerHTML={{ __html: `window.INITIAL_STATE = ${serialize(store.getState())}` }} />

          <script src="/client.js" defer />
        </head>

        <body>
          <div id="app">
            <Provider store={store}>
              <StaticRouter
                context={context}
                location={req.path}
              >
                <Routes />
              </StaticRouter>
            </Provider>
          </div>
        </body>
      </html>
    )

    if (context.notFound) {
      res.status(404)
    }

    res.send(html)
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
