import React, { Component } from 'react';
import YouTube from 'react-youtube'
import { YouTubeGetID } from '../../Utils/Utils'
import { API_BASE_URL } from '../../configs/constants'
class VideoSect extends Component {

  render() {
    let videoId = YouTubeGetID(this.props?.url?.url)
    const opts = {
      playerVars: {
        rel: 0,
        origin: API_BASE_URL
      }
    }
    return (
      <div className="section-margin">
        <div className="embed-responsive embed-responsive-16by9">
          <YouTube videoId={videoId} opts={opts} onReady={this._onReady} className="embed-responsive-item" />
        </div>
      </div>
    );
  }
}

export default VideoSect;