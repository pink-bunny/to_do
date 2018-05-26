import React from 'react';
import { connect } from 'react-redux';
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
        {props.projectsList.map((project, index) => (
          <ProjectItem projectsList={project} key={index} />
        ))}
        <CreateProjectForm />
      </Col>
    </div>
  </div>
);

Projects.propTypes = {
  projectsList: PropTypes.array
};

const mapStateToProps = (state) => ({
  projectsList: state.project.list
});

export default connect(mapStateToProps)(Projects);
