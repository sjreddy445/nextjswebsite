import React, { Component } from 'react';
import dynamic from "next/dynamic";
import {AddCmsImgBaseUrl, YouTubeGetID} from '../../Utils/Utils'
const YouTube = dynamic(() => import("react-youtube"), {
  ssr: false
});
class ImageSect extends Component {
  render() {
    let videoId
    if (this.props.data?.youtube) {
      videoId = YouTubeGetID(this.props.data?.youtube)
    }
    const opts  = {
      playerVars : {rel: 0}
    }
    return (
      <div>
        {this.props.data?.youtube?
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