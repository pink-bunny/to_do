import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitSignUp } from '../redux-store/task/actions';
import InputField from '../components/InputField';
import { minLength8, email } from '../utils/validation';
import { Alert, Col, Form , Button} from 'react-bootstrap';

var test = function(error) {
  let temp = [];
  for (let prop in error) {
    console.log('prop', prop)
    temp.push(error[prop])
  }
  console.log('temp', temp)
  return temp
}


const SignUp = props => {
  return (
    <div className="container">
      <div className="row">
        <Col sm={8} smOffset={2} md={4} mdOffset={4}>
          <h2>Sign Up</h2>
          {/* <Alert bsStyle="success" className="mb-10">
            <p className="mb-5"><strong>Well done!</strong> You have successfully registered.</p>
          </Alert>
          <Alert bsStyle="danger">
            <p className="mb-5">Incorrect login or(and) password.</p>
          </Alert> */}
          {console.log('formHasError', props.formHasError)}
          {test(props.formHasError).map((item, index) => (
              <div className="text-danger" key={index}>
                  {item}
              </div>
          ))}

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
                validate={minLength8}
              />
            </div>
            <Button type="submit" bsStyle="primary" className="mb-15 mr-15">
              Sign Up
            </Button>
            <p>Already a member? <a href="/sign-in">Sign In</a></p>
          </Form>

        </Col>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  formHasError: state.form.simpleSignUpForm && state.form.simpleSignUpForm.syncErrors
});

export default connect(mapStateToProps)(reduxForm({
  form: 'simpleSignUpForm'
})(SignUp));
