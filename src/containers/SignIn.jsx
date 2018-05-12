import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Alert, Col, Form , Button} from 'react-bootstrap';
import InputField from '../components/InputField';
import { Field, reduxForm } from 'redux-form';

const SignIn = () => (
  <div className="container">
    <div className="row">
      <Col sm={8} smOffset={2} md={4} mdOffset={4}>
        <h2>Sign In</h2>
        <Alert bsStyle="danger">
          <p className="mb-5">Incorrect login or(and) password.</p>
        </Alert>
        <Form>
          <div className="mb-20">
            <Field
              name="userName"
              component={InputField}
              placeholder="User Name"
              validate={false}
            />
            <Field
              name="password"
              component={InputField}
              type="password"
              placeholder="Password"
              validate={false}
            />
          </div>
          <Button type="submit" bsStyle="primary" className="mb-15 mr-15">
            Sign In
          </Button>
          <p>Do not have an account? <Link to="/sign-up">Sign Up</Link></p>
        </Form>
      </Col>
    </div>
  </div>
)

export default connect()(reduxForm({
  form: 'signInForm'
})(SignIn));
