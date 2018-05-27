import React, { Component } from 'react';
import ProjectsContainer from '../containers/Projects';
import { projectsList } from '../redux-store/project/actions';

class Projects extends Component {

  componentWillMount(){
    projectsList();
  }

  render() {
    return (
      <ProjectsContainer />
    );
  }
}

export default Projects;
