import React from 'react'

import { Route } from 'react-router-dom'

import Home from 'base/scenes/Home'

const Application = () => (
  <div>
    <Route exact path="/" component={Home} />
  </div>
)

export default Application
