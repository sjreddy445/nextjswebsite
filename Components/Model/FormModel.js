import moment from 'moment';
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
    toggleModal = () => {
        this.setState({ isOpen: false, msg: '' })
    }
    render() {        
        return (
            <div>
                <Modal isOpen={this.props.modal} className="info-modal" size="md"  >
                    <ModalHeader className="ml-3 " toggle={() => {
                        const expiresIn = moment().add(1, 'hour');
                        this.props.toggleModal(expiresIn.toDate());
                    }
                    }><p style={{fontWeight:'600'}}>Let us help you with your Talent Decisions</p></ModalHeader>
                    <div className="mb-3"></div>
                    <ModalBody>
                        <div className="info-modal-body text-left ">
                            <Row>
                                <Col xm={12} className="text-center">
                                    <div className="info-modal-text mb-4">
                                        <FormSect hide={true} {...this.props} />
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