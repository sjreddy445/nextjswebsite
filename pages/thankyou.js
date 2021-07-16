import { withRouter, Router } from 'next/router';
import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, Col, Row } from 'reactstrap';
import SuccessModalImg from '../Assets/images/Icons/message-modal.svg'
import Home from './index';

class SuccessModal extends Component {

  constructor(props) {
    super()
    this.state = {
      isOpen: false,
      msg: ''
    }
  }
  componentDidMount() {
    const { query } = this.props.router;
    if (query && query.msg && query.isOpen === "true") {
      this.setState({ isOpen: true, msg: query.msg })
    }
  }
  toggleModal = () => {
    this.setState({ isOpen: false, msg: '' })
    this.props.router.push("/", "", { shallow: true })
  }
  render() {
    return (
      <div>
        <Home />
        <Modal isOpen={this.state.isOpen} toggle={() => this.toggleModal()} className="info-modal" size="lg" >
          <ModalHeader toggle={() => this.toggleModal()}></ModalHeader>
          <ModalBody>
            <div className="info-modal-body">
              <Row>
                <Col md={5} xm={12} className="p-0">
                  <div className="info-modal-image info-modal-credit">
                    <div className="img-box">
                      <img src={SuccessModalImg.src} alt="" />
                    </div>
                  </div>
                </Col>
                <Col md={7} xm={12}>
                  <div className="info-modal-text pl-4">
                    <div className="title text-xl mb-4">
                      <b>Yay!</b>
                    </div>
                    <div className="subtitle text-xs mb-2">
                      <span>{this.state.msg}</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
export default withRouter(SuccessModal);