import React, { Component } from 'react';
import TitleSect from './TitleSect';
import { Row, Col } from 'reactstrap';
import ListSect from './ListSect';

class SubHeader extends Component {
  render() {
    return (
      <div className="pb-5">
        <Row>
          <Col md={5}>
            <TitleSect {...this.props} />
          </Col>      
        </Row>
        <Row>
          <Col md={12}>
            <ListSect {...this.props} />
          </Col>      
        </Row>
      </div>
    );
  }
}

export default SubHeader;