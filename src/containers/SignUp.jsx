import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Alert, Col, Form , Button} from 'react-bootstrap';
import { submitSignUp } from '../redux-store/task/actions';
import InputField from '../components/InputField';
import { minLength8, email, passwordConfirm } from '../utils/validation';

var errorList = function(error) {
  let temp = [];
  for (let prop in error) {
    temp.push(error[prop]);
  }
  return temp;
};

const SignUp = props => {
  return (
    <div className="container">
      <div className="row">
        <Col sm={8} smOffset={2} md={4} mdOffset={4}>
          <h2>Sign Up</h2>
          {
            props.submitSucceeded &&
            <Alert bsStyle="success" className="mb-10">
              <p className="mb-5"><strong>Well done!</strong> You have successfully registered.</p>
            </Alert>
          }

          {
            errorList(props.formHasError).map((item, index) => (
              <Alert bsStyle="danger" key={index}>
                {item}
              </Alert>
            ))
          }

          <Form onSubmit={props.handleSubmit(submitSignUp)}>
            <div className="mb-20">
              <Field
                name="firstName"
                component={InputField}
                placeholder="First Name"
                validate={email}
              />
              <Field
                name="password"
                component={InputField}
                type="password"
                placeholder="Password"
                validate={minLength8}
              />
              <Field
                name="confirm_password"
                component={InputField}
                type="password"
                placeholder="Confirm password"
                validate={passwordConfirm}
              />
            </div>
            <Button
              type="submit"
              bsStyle="primary"
              className="mb-15 mr-15"
            >
              Sign Up
            </Button>
            <p>Already a member? <a href="/sign-in">Sign In</a></p>
          </Form>

        </Col>
      </div>

    </div>
  );
};

SignUp.propTypes = {
  submitSucceeded: PropTypes.bool,
  formHasError: PropTypes.object,
  handleSubmit: PropTypes.func
};

const mapStateToProps = (state) => ({
  formHasError: state.form.simpleSignUpForm && state.form.simpleSignUpForm.syncErrors,
  submitSucceeded: state.form.simpleSignUpForm && state.form.simpleSignUpForm.submitSucceeded
});

export default connect(mapStateToProps)(reduxForm({
  form: 'simpleSignUpForm'
})(SignUp));