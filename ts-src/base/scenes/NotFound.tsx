import React from 'react'

import { RouteConfigComponentProps } from 'react-router-config'

interface NotFoundPropTypes { staticContext?: { notFound?: boolean } }

type NotFoundType = React.StatelessComponent<
  NotFoundPropTypes & RouteConfigComponentProps<any> | {}
>

const NotFound: NotFoundType = (props) => {
  const p = props as NotFoundPropTypes

  if (p.staticContext) {
    p.staticContext.notFound = true
  }

  return <h1>Ooops, route not found!</h1>
}

export default { component: NotFound }
