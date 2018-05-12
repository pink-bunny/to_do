import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header'
import {
  SignUp,
  SignIn
} from './pages';

const Application = () =>
  <div>
    <Header />
    <div className="page-container">
      <Route path="/sign-up" component={ SignUp } />
      <Route path="/sign-in" component={ SignIn } />
    </div>
  </div>;

export default Application;
