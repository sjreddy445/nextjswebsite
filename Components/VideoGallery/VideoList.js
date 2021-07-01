import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import VideoItem from './VideoItem';

class VideoList extends Component {
  render() {
    let items = this.props.data
    return (
      <div>
        <Row>
          {items.map((item, i)=>(
            <Col md={4} sm={12} key={i} className="mb-4">
              <VideoItem data={item} />
            </Col>
          ))}
          
        </Row>
      </div>
    );
  }
}

export default VideoList;