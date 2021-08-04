import React, { Component } from 'react';
import {YouTubeGetID} from '../../Utils/Utils'
import YouTube from 'react-youtube'

class VideoItem extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    // event.target.
  }
  render() {
    let videoId = YouTubeGetID(this.props.data.url)
    const opts  = {
      playerVars : {rel: 0},
      height:'100%',
      width:'100%',
    }
    return (
      <>
      <div  className="embed-responsive embed-responsive-16by9">
        <YouTube videoId={videoId} opts={opts} onReady={this._onReady} className="embed-responsive-item"/>;
      </div>
      <div className="mt-4">
        <h5>{this.props.data.title}</h5>
      </div>
      </>
    );
  }
}

export default VideoItem;