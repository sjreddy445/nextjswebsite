import React, { Component } from 'react';
import YouTube from 'react-youtube'
import { Col } from 'reactstrap'

export default class BlogVideo extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { rel: 0 }
    }
    let { video } = this.props
    return (
      <>
        <Col md={4} className="p-3">
          <div className="embed-responsive embed-responsive-16by9" style={{ zIndex: -99}} >
            <YouTube videoId={video.url_id} opts={opts} onReady={this._onReady} className="embed-responsive-item" />
          </div>
          <div className={'mt-3'}>
          <p className="text-sm">{video.title}</p>
          </div>
        </Col>
      </>
    )
  }
}
