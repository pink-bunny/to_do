import React from 'react';
import PropTypes from 'prop-types';
import { Col,} from 'react-bootstrap';
import CreateProjectForm from '../components/CreateProjectForm';
import ProjectItem from '../components/ProjectItem';

const Projects = (props) => (
  <div className="container">
    <div className="row">
      <Col sm={8} smOffset={2}>
        <h2>Projects</h2>
        { props.projects.map((project, index) => (
          <ProjectItem project={project} key={index} form={`editProjectInfo${project.id}`} />
        )) }
        <CreateProjectForm />
      </Col>
    </div>
  </div>
);

Projects.propTypes = {
  projects: PropTypes.array
};

export default Projects;
