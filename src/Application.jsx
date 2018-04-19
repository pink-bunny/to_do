import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import {
  Test
} from './pages'

const Application = () =>
  <div>
    <Link to="/test" >Link to</Link>
    <Route path="/test" component={Test} />
  </div>

export default Application
