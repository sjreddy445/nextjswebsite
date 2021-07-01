import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TextSect from './TextSect';
import FormSect from './FormSect';
// import {Element} from 'react-scroll'

class Contact extends Component {
  render() {
    return (
      // <Element name="contact" id="contactw">
      <div className="container-inner mb-5" id="contactid" name="contactWidget">
        <Row className="no-gutters">
          <Col md={4} sm={12} className="pr-5">
            <TextSect />
          </Col>
          <Col md={8} sm={12}>
            <FormSect />
          </Col>
        </Row>
      </div>
      // </Element>
    );
  }
}

export default Contact;