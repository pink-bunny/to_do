import React from 'react'

import { Route } from 'react-router-dom'

import Home from 'client/scenes/Home'

const Application = () => (
  <div>
    <Route exact path="/" component={Home} />
  </div>
)

export default Application
