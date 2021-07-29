import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import VideoList from './VideoList';


class VideoGallery extends Component {
  render() {
    return (
      <div className="container-inner">
        <Row>
          <Col>
            <h3 className="title mb-4 font-weight-bold text-lg">
              {this.props?.title.title}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <VideoList {...this.props} />
          </Col>
        </Row>

      </div>
    );
  }
}

export default VideoGallery;