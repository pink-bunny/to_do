import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { deleteProject } from '../redux-store/project/actions';

class DeleteModal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false});
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="align-middle d-inline-block mb-5 cursor-pointer">
        <span onClick={this.open}>
          Delete
        </span>
        <Modal
          bsSize="small"
          show={this.state.showModal}
          onHide={this.close}
        >
          <Modal.Header closeButton>
            <Modal.Title className="in-black">Delete project</Modal.Title>
          </Modal.Header>
          <Modal.Body className="pb-5">
            <p className="mb-10">
              Do you really want to delete Name project?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.props.deleteProject(this.props.id);
                this.close();
              }}
              bsStyle="primary"
            >
              Delete
            </Button>
            <Button bsStyle="default" onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

DeleteModal.propTypes = {
  deleteProject: PropTypes.func,
  id: PropTypes.string
};

const mapDispatchToProps = {
  deleteProject
};

export default connect(null, mapDispatchToProps)(DeleteModal);
