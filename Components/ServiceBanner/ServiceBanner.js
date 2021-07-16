import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TitleSect from './TitleSect';
import ListSect from './ListSect';

class ServiceBanner extends Component {
  render() {
    return (
      <div className="dark-grey-bg">
        <div className="container-inner py-5">
          <Row>
            <Col md={4} sm={12}>
              <TitleSect {...this.props} />
            </Col>
            <Col md={8} sm={12}>
              <ListSect data={this.props.serviceList} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ServiceBanner;