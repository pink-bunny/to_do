import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import InputField from './InputField';
import { Field, reduxForm } from 'redux-form';
import { createProject } from '../redux-store/project/actions';

const CreateProjectForm = (props) => (
  <Form onSubmit={props.handleSubmit(createProject)}>
    <div className="mb-20">
      <Field
        name="email"
        component={InputField}
        placeholder="Enter Project Name..."
      />
    </div>
    { props.focusForm &&
      <div>
        <Button
          type="submit"
          bsStyle="primary"
          className="mb-15 mr-15"
        >
          Create Project
        </Button>
        <Button
          type="submit"
          bsStyle="default"
          className="mb-15 mr-15"
          onClick={props.reset}
        >
          Cancel
        </Button>
      </div>
    }
  </Form>
);

CreateProjectForm.propTypes = {
  focusForm: PropTypes.object,
  reset: PropTypes.func,
  handleSubmit: PropTypes.func
};

const mapStateToProps = (state) => ({
  formHasError: state.form.createProjectForm && state.form.createProjectForm.error,
  focusForm: state.form.createProjectForm && state.form.createProjectForm.values
});

export default connect(mapStateToProps)(reduxForm({
  form: 'createProjectForm'
})(CreateProjectForm));
