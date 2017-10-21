import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import 'Application.scss'

import { getMessage } from 'redux-store/message/selectors'
import { addExclamationMark } from 'redux-store/message/actions'

const Application = props => (
  <div>
    <div>{props.message}</div>

    <button onClick={props.addExclamationMark}>
      Add exclamation mark
    </button>
  </div>
)

Application.propTypes = {
  message: PropTypes.string.isRequired,
  addExclamationMark: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  message: getMessage(state)
})

const mapDispatchToProps = {
  addExclamationMark
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)
