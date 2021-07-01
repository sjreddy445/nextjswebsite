import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TextSect from './TextSect';
import ImageSect from './ImageSect';

class SingleTextImageBanner extends Component {
  render() {
    return (
      <div>
        <div className="container-inner">
          <Row className="no-gutters">
            <Col md={5} sm={12}>
              <TextSect {...this.props} />
            </Col>
            <Col md={7} sm={12} className="sm-mt-2">
              <ImageSect {...this.props} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SingleTextImageBanner;