import React from 'react'
import ReactDOM from 'react-dom/server'

import express from 'express'

import Application from 'client/Application'

const app = express()

app.use(express.static('build'))

app.get('/', (_, res) => {
  const html = ReactDOM.renderToString(
    <html>
      <head></head>

      <body>
        <div id="app">
          <Application />
        </div>

        <script src="client.js" />
      </body>
    </html>
  )

  res.send(html)
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
