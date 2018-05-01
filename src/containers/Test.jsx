import React from 'react';
import { connect } from 'react-redux';
import { submitSignUp } from '../redux-store/task/actions';

const Test = (props) => (
  <div>
    Hello! It is Test page!
    {console.log('@#@', props)}
    <button onClick={()=> props.clickMe('test@example.com', '11111111', '11111111')}>Submit</button>
  </div>
);

const mapDispatchToProps = {
  clickMe: submitSignUp
};

const mapStateToProps = state => {
  return {
    data: state.task
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
