import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';

const InputField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <FormGroup>
    { label && <ControlLabel>{label}</ControlLabel> }

    <FormControl
      {...input}
      placeholder={placeholder}
      type={type}
    />

    {touched && error && <HelpBlock>{error}</HelpBlock> }
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
