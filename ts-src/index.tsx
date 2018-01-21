import express from 'express'

import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Application from 'client/Application'

const app = express()

app.use(express.static('build'))

app.get('*', (req, res) => {
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
          <StaticRouter location={req.path} context={{}}>
            <Application />
          </StaticRouter>
        </div>
      </body>
    </html>
  )

  res.send(html)
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
