import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header';
import { Link } from 'react-router-dom';
import {
  SignUp,
  SignIn,
  Projects
} from './pages';

const Application = () =>
  <div>
    <Header />
    <div className="page-container">
      { !localStorage.getItem('access-token') &&
        <div className="container text-center">
          <Link to="sign-up">Sign up</Link>
        </div>
      }
      <Route path="/sign-up" component={ SignUp } />
      <Route path="/sign-in" component={ SignIn } />
      <Route path="/projects" component={ Projects } />
    </div>
  </div>;

export default Application;
