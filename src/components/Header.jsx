import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { submitSignOut } from '../redux-store/auth/actions';
import { projectsList } from '../redux-store/project/actions';

const Header = (props) => (
  <header className="main-header">
    <div className="container pt-10 pb-5">
      <div className="row d-flex align-center">
        <div className="col-xs-3">
          <Link className="mb-5" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="col-xs-6 text-center">
          <h1 className="mt-0 mb-5">Simple ToDo List</h1>
        </div>
        <div className="col-xs-3 text-right">
          <button
            className="mb-5"
            onClick={props.logOutUser}
          >
            Exit
          </button>
          <button
            className="mb-5"
            onClick={props.fetchProjects}
          >
            Fetch projects
          </button>
        </div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = {
  logOutUser: submitSignOut,
  fetchProjects: projectsList,
};


export default connect(null, mapDispatchToProps)(Header);
