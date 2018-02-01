import React from 'react'

import {
  renderRoutes,
  RouteConfigComponentProps
} from 'react-router-config'

import Header from 'base/components/Header'

type ApplicationComponentPropTypes = RouteConfigComponentProps<any>
type ApplicationComponentType = React.SFC<ApplicationComponentPropTypes | {}>

const ApplicationComponent: ApplicationComponentType = (props) => (
  <div>
    <Header />

    {renderRoutes((props as ApplicationComponentPropTypes).route!.routes)}
  </div>
)

export default ApplicationComponent
