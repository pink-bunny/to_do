import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';
import InputField from './InputField';
import DeleteModal from './DeleteModal';
import { editProject } from '../redux-store/project/actions';

class ProjectItem extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      projectInfoClass: '',
      projectClass: ''
    };
    this.toggle = this.toggle.bind(this);
    this.edit = this.edit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }

  toggle() {
    if(this.state.open) {
      this.setState({ projectInfoClass: '', open: false });
    } else {
      this.setState({ projectInfoClass: 'open', open: true });
    }
  }

  edit(){
    this.setState({ projectClass: 'edit' });
    if(this.state.open) {
      this.setState({ projectInfoClass: '', open: false });
    }
  }

  closeEdit(){
    this.setState({ projectClass: '' });
  }

  render(){
    return(
      <div className={classNames('project', this.state.projectClass)}>
        <div className="project-edit">
          <Form onSubmit={this.props.handleSubmit(editProject)}>
            <Field
              name="name"
              component={InputField}
            />
            <Button type="submit" bsStyle="primary" className="mb-5 mr-5">Save</Button>
            <Button bsStyle="default" className="mb-5 mr-5" onClick={this.closeEdit}>Cancel</Button>
          </Form>
        </div>
        <div className={classNames('project-info', this.state.projectInfoClass)}>
          <div className="project-info__header">
            <p className="project-info__title" onClick={this.toggle}>
              <span className="project-info__title-icon  icon icon-arrow-up" />
              { this.props.project.attributes.name }
              <br />
              { this.props.project.id }
            </p>
            <div className="project-info__actions">
              <span
                className="align-middle d-inline-block cursor-pointer mb-5 mr-5"
                onClick={this.edit}
              >
                Edit
              </span>
              <DeleteModal id={ this.props.project.id } />
            </div>
          </div>
          <div className="project-info__body">
            Here will be some info about current project.
          </div>
          {console.log('initialValues', this.props.initialValues.name)}
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  handleSubmit: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return ({
    initialValues: {
      name: ownProps.project.attributes.name
    },
  });
};

export default connect(mapStateToProps)(reduxForm({
  form: 'editProjectNameForm'
})(ProjectItem));
