import { connect } from 'react-redux'

import State from 'base/redux-store/state'
import { getUser } from 'base/redux-store/user/selectors'

import HeaderComponent from './Component'

const mapStateToProps = (state: State) => ({ user: getUser(state) })

const HeaderContainer = connect(mapStateToProps)(HeaderComponent)

export default HeaderContainer
