import React from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { clickButton, addFriend } from './redux-store/task/actions'
import PropTypes from 'prop-types';
import {
  Test
} from './pages'

const Application = (props) =>
  <div>
    <Link to="/test" >Link to</Link>
    <Route path="/test" component={Test} />

    <br />
    <button onClick={()=> props.clickMe('Lana Razheva')}>My name is {props.data.name}</button>
    <br />
    <button onClick={()=> props.clickBtn(10)}>Now btn_name is {props.data.btn_name}</button>
    <br />
    <button onClick={()=> props.clickBtn(props.data.btn_name || 0)}>Change number</button>
    <br />

    {console.log('NAME IS', props)}
  </div>

Application.propsTypes = {
  name: PropTypes.string,
  btn_name: PropTypes.string
};

const mapDispatchToProps = {
  clickBtn: clickButton,
  clickMe: addFriend
};

const mapStateToProps = state => {
  return {
    data: state.task
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
