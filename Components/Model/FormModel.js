import { withRouter } from 'next/router';
import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, Col, Row } from 'reactstrap';
import FormSect from '../ContactSect/FormSect';

class FormModal extends Component {

    constructor(props) {
        super()
        this.state = {
            isOpen: false,
            msg: ''
        }
    }
    componentWillMount() {
    }
    toggleModal = () => {
        this.setState({ isOpen: false, msg: '' })
    }
    render() {
        console.log("sdfsd",this.props)
        return (
            <div>

                <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className="info-modal" size="md"  >
                    <ModalHeader toggle={this.props.toggleModal}></ModalHeader>
                    <ModalBody>
                        <div className="info-modal-body text-left">
                            <Row>
                                <Col xm={12} className="text-center">
                                    <div className="info-modal-text mb-4">
                                        <FormSect hide={true} />
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
export default FormModal;