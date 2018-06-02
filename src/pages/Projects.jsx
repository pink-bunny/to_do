import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectsContainer from '../containers/Projects';
import { projectsList } from '../redux-store/project/actions';

class Projects extends Component {

  componentWillMount(){
    this.props.fetchProjectsList();
  }

  render() {
    return (
      <ProjectsContainer projects={ this.props.projects } />
    );
  }
}

Projects.propTypes = {
  fetchProjectsList: PropTypes.func,
  projects: PropTypes.array
};

const mapStateToProps = (state) => ({
  projects: state.project.list
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjectsList: () => dispatch(projectsList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
