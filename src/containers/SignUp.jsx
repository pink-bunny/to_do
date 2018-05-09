import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitSignUp } from '../redux-store/task/actions';
import InputField from '../components/InputField';
import { minLength8, email } from '../utils/validation';

const SignUp = props => {
  return (
    <div className="container">

      {console.log('formHasError', props.formHasError)}

      <form onSubmit={props.handleSubmit(submitSignUp)}>
        <div>
          <div>
            <Field
              name="firstName"
              component={InputField}
              label="First Name"
              placeholder="First Name"
              validate={email}
            />
            <Field
              name="password"
              component={InputField}
              type="password"
              label="Password"
              placeholder="Password"
              validate={minLength8}
            />
            <Field
              name="confirm_password"
              component={InputField}
              type="password"
              label="Confirm password"
              placeholder="Confirm password"
              validate={minLength8}
            />
            <button type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>

    </div>
  );
};

const mapStateToProps = (state) => ({
  formHasError: state.form.simpleSignUpForm && state.form.simpleSignUpForm.syncErrors
});

export default connect(mapStateToProps)(reduxForm({
  form: 'simpleSignUpForm'
})(SignUp));
