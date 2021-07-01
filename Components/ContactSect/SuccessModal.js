import { withRouter } from 'next/router';
import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, Col, Row } from 'reactstrap';
import SuccessModalImg from '../../Assets/images/Icons/message-modal.svg'
import Home from '../../Pages/Home';

class SuccessModal extends Component {

  constructor(props) {
    super()
    this.state = {
      isOpen: false,
      msg: ''
    }
  }
  componentWillMount() {
    // const { location } = this.props;
    // if (location && location.data) {
    //   this.setState({ isOpen: location.data.isOpen, msg: location.data.message })
    // }

  }
  toggleModal = () => {
    this.setState({ isOpen: false, msg: '' })
    this.props.router.push("/", "", { shallow: true })
  }
  render() {
    if (!this.state.isOpen || !this.state.msg) {
      // return (
      //   <Redirect to="/" />
      // )
    }
    return (
      <div>
        <Home />
        {/* <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className="info-modal" size="lg" >
          <ModalHeader toggle={()=>this.props.toggleModal()}></ModalHeader> */}
        <Modal isOpen={this.state.isOpen} toggle={() => this.toggleModal()} className="info-modal" size="lg" >
          <ModalHeader toggle={() => this.toggleModal()}></ModalHeader>
          <ModalBody>
            <div className="info-modal-body">
              <Row>
                <Col md={5} xm={12} className="p-0">
                  <div className="info-modal-image info-modal-credit">
                    <div className="img-box">
                      <img src={SuccessModalImg} alt="" />
                    </div>
                  </div>
                </Col>
                <Col md={7} xm={12}>
                  <div className="info-modal-text pl-4">
                    <div className="title text-xl mb-4">
                      <b>Yay!</b>
                    </div>
                    <div className="subtitle text-xs mb-2">
                      {/* <span>{this.props.message}</span> */}
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