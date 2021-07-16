import React, { Component } from 'react';
import { Col } from 'reactstrap';
import TextSect from './TextSect';
import ImageSect from './ImageSect';
class BrandList extends Component {
  render() {
    return (
      <div className="container-inner d-flex flex-mobile-wrap">
        <Col lg={4} md={12} className="mt-3 p-0">
          <TextSect {...this.props} />
        </Col>
        <Col lg={8} md={12} className="p-0">
          <ImageSect data={this.props.brandList} />
        </Col>
      </div>
    );
  }
}

export default BrandList;