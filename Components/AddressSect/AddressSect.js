import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import DetailSect from './DetailSect';

class AddressSect extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={4} sm={12}>
            <h2 className="text-xl mb-4 mt-2 font-weight-bold">
              {this.props?.data?.title1}
            </h2>
          </Col>
          <Col md={8} sm={12} className="pl-4">
            <DetailSect {...this.props} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddressSect;