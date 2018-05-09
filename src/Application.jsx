import React from 'react';
import { Route } from 'react-router';
import {
  SignUp
} from './pages';

const Application = () =>
  <div>
    <Route path="/" component={ SignUp } />
  </div>;

export default Application;
