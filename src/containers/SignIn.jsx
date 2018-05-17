import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert, Col, Form, Button} from 'react-bootstrap';
import InputField from '../components/InputField';
import { Field, reduxForm } from 'redux-form';
import { submitSignIn } from '../redux-store/task/actions';

const SignIn = props => (
  <div className="container">
    <div className="row">
      <Col sm={8} smOffset={2} md={4} mdOffset={4}>
        <h2>Sign In</h2>

        { props.formHasError &&
          <Alert bsStyle="danger">
            { props.formHasError }
          </Alert>
        }

        <Form onSubmit={props.handleSubmit(submitSignIn)}>
          <div className="mb-20">
            <Field
              name="email"
              component={InputField}
              placeholder="Email"
            />
            <Field
              name="password"
              component={InputField}
              type="password"
              placeholder="Password"
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

const mapStateToProps = (state) => ({
  formHasError: state.form.signInForm && state.form.signInForm.error,
});

export default connect(mapStateToProps)(reduxForm({
  form: 'signInForm'
})(SignIn));
