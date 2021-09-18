import React, { Component } from 'react';
import dynamic from "next/dynamic";
import {AddCmsImgBaseUrl, YouTubeGetID} from '../../Utils/Utils'
import YouTube from"react-youtube";
class ImageSect extends Component {
  render() {
    let videoId
    if (this.props.data?.youtube) {
      videoId = YouTubeGetID(this.props.data?.youtube)
    }
    else{
      return(
        <p>Loading....</p>
      )
    }
    const opts  = {
      playerVars : {rel: 0}
    }
    return (
      <div>
        {videoId?
          <div className="embed-responsive embed-responsive-16by9">
            <YouTube videoId={videoId} opts={opts} onReady={this._onReady} className="embed-responsive-item"/>
          </div>
          :
          <img src={AddCmsImgBaseUrl(this.props.data?.imgUrl)} className="img-fluid img-round" alt="edge-news"/>
        }
      </div>
    );
  }
}

export default ImageSect;