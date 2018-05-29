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
        {/* <Alert bsStyle="success" className="mb-10">
          <p className="mb-5"><b>Well done!</b> You have successfully done all tasks.</p>
        </Alert> */}
        { props.projects.map((project, index) => (
          <ProjectItem project={project} key={index} />
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
