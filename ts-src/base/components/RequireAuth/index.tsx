import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import State from 'base/redux-store/state'
import { User } from 'base/redux-store/user/reducer'
import { getUser } from 'base/redux-store/user/selectors'

interface WrapperComponentPropTypes {
  user: User | null
}

function RequireAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  class WrapperComponent extends React.Component<WrapperComponentPropTypes & P> {
    render () {
      const { user } = this.props

      return !user
        ? <Redirect to='/' />
        : <WrappedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state: State) => ({
    user: getUser(state)
  })

  return connect(mapStateToProps)(WrapperComponent)
}

export default RequireAuth
