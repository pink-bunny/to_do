import React from 'react'

import { renderRoutes } from 'react-router-config'

import routes from 'base/config/routes'

const Application = () => (
  <div>
    {renderRoutes(routes)}
  </div>
)

export default Application
