import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Alert, Col, Form , Button} from 'react-bootstrap';
import { submitSignUp } from '../redux-store/auth/actions';
import InputField from '../components/InputField';
import { minLength8, email, passwordConfirm } from '../utils/validation';
import { objToArray } from '../utils/helpers';

const SignUp = props => {
  return (
    <div className="container">
      <div className="row">
        <Col sm={8} smOffset={2} md={4} mdOffset={4}>
          <h2>Sign Up</h2>
          { props.submitSucceeded &&
            <Alert bsStyle="success" className="mb-10">
              <p className="mb-5"><strong>Well done!</strong> You have successfully registered.</p>
            </Alert>
          }

          {objToArray(props.formHasError).map((item, index) => (
            <Alert bsStyle="danger" key={index}>
              {item}
            </Alert>
          ))}
          {objToArray(props.submitErrors).map((item, index) => (
            <Alert bsStyle="danger" key={index}>
              {item}
            </Alert>
          ))}

          <Form onSubmit={props.handleSubmit(submitSignUp)}>
            <div className="mb-20">
              <Field
                name="email"
                component={InputField}
                placeholder="Email"
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
                name="password_confirmation"
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
              disabled={props.pristine || props.invalid}
            >
              Sign Up
            </Button>
            <p>Already a member? <Link to="/sign-in">Sign In</Link></p>
          </Form>

        </Col>
      </div>

    </div>
  );
};

SignUp.propTypes = {
  submitSucceeded: PropTypes.bool,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool,
  formHasError: PropTypes.object,
  submitErrors: PropTypes.object,
  handleSubmit: PropTypes.func
};

const mapStateToProps = (state) => {
  const signUpForm = state.form.simpleSignUpForm;
  return({
    formHasError: signUpForm && signUpForm.syncErrors,
    submitErrors: signUpForm && signUpForm.submitErrors,
    submitSucceeded: signUpForm && signUpForm.submitSucceeded
  });
};

export default connect(mapStateToProps)(reduxForm({
  form: 'simpleSignUpForm'
})(SignUp));
