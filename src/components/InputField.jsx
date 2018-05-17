import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

const InputField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <FormGroup
    className={touched && error && 'has-error'}
  >
    { label && <ControlLabel>{label}</ControlLabel> }

    <FormControl
      {...input}
      placeholder={placeholder}
      type={type}
    />

  </FormGroup>
);

InputField.defaultProps = {
  type: 'text'
};

InputField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export default InputField;
