import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header'
import {
  SignUp
} from './pages';

const Application = () =>
  <div>
    <Header />
    <div className="page-container">
      <Route path="/" component={ SignUp } />
    </div>
  </div>;

export default Application;
