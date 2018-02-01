import React from 'react'

import { renderRoutes } from 'react-router-config'

import routes from 'base/config/routes'

type RoutesComponentType = React.StatelessComponent

const RoutesComponent: RoutesComponentType = () => renderRoutes(routes)

export default RoutesComponent
