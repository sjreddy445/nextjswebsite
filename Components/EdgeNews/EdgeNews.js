import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';

import VideoGallery from '../../Components/VideoGallery/VideoGallery'
import LinkPreview from '../LinkPreviews/LinkPreview';
import { payload as VideoData } from '../../Payloads/Life/Videos'

export default class EdgeNews extends Component {
  render() {
    return (
      <>
        <div className="container-inner">
          <Row>
            <Col>
              <h3 className="title mb-4 font-weight-bold text-lg">
                Edge in News
              </h3>
            </Col>
          </Row>
          <Row>
            {this.props.data.map((news, i) => (
              <Col md={3} key={i} className="mb-4">
                <LinkPreview data={news} />
              </Col>
            ))}
          </Row>
          <div className="mt-5">
            <Row>
              <VideoGallery data={VideoData} />
            </Row>
          </div>
        </div>
      </>
    )
  }
}
