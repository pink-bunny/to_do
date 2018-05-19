import React from 'react';
import { Col,} from 'react-bootstrap';
import CreateProjectForm from '../components/CreateProjectForm';

const Projects = () => (
  <div className="container">
    <div className="row">
      <Col sm={8} smOffset={2}>
        <h2>Projects</h2>
        {/* <Alert bsStyle="success" className="mb-10">
          <p className="mb-5"><b>Well done!</b> You have successfully done all tasks.</p>
        </Alert> */}
        {/* <ProjectItem /> */}
        <CreateProjectForm />
      </Col>
    </div>
  </div>
);

export default Projects;
