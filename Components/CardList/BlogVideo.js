import React, { Component } from 'react';
import YouTube from 'react-youtube'
import { Row, Col } from 'reactstrap'
import { API_BASE_URL } from '../../configs/constants'
export default class BlogVideo extends Component {

  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        rel: 0,
        origin:API_BASE_URL
       }
    }
    let { video } = this.props

    return (
      <>
        <Col md={4} className="p-3" >
          <div className={"embed-responsive embed-responsive-16by9"} >
            <YouTube videoId={video.url_id} opts={opts} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" onReady={this._onReady} className="embed-responsive-item" />
          </div>
          <Row className={"mt-3"}>
            <Col>
              <div>
                <p className="text-sm">{video.title}</p>
              </div>
            </Col>
          </Row>
        </Col>

      </>
    )
  }
}
