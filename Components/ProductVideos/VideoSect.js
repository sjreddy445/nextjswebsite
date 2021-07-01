import React, { Component } from 'react';
import YouTube from 'react-youtube'
import { YouTubeGetID } from '../../Utils/Utils'
class VideoSect extends Component {

  render() {
    let videoId = YouTubeGetID("https://www.youtube.com/watch?v=uR_FJl6WyKM")
    const opts = {
      playerVars: { rel: 0 }
    }
    return (
      <div className="section-margin">
        {/* <div className="d-flex justify-content-center"> */}
          <div className="embed-responsive embed-responsive-16by9">
            <YouTube videoId={videoId} opts={opts} onReady={this._onReady} className="embed-responsive-item" />
          </div>
        {/* </diyov> */}
      </div>
    );
  }
}

export default VideoSect;