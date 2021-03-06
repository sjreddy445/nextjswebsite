import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import styles from './ServiceBanner.module.scss'
import { YouTubeGetID } from '../../Utils/Utils'
import YouTube from "react-youtube"
import { API_BASE_URL } from '../../configs/constants'
class ListSect extends Component {
  render() {
    let serviceList = this.props.data
    let videoId
    if (this.props?.video?.url) {
      videoId = YouTubeGetID(this.props?.video?.url)
    }
    else {
      return (
        <p>Loading....</p>
      )
    }
    const opts = {
      playerVars: { 
        rel: 0,
        origin:API_BASE_URL
       }
    }
    return (
      <div>
        <div className="">
          <Row>
            {serviceList?.map((list, i) => (
              <Col md={6} sm={12} key={i}>
                <div className={styles.serviceList}>{list.title}</div>
              </Col>
            ))}</Row>
        </div>

        <div className="section-margin mb-n5">
          <div className="d-flex justify-content-center">
            <div className="embed-responsive embed-responsive-16by9">
                <YouTube videoId={videoId} opts={opts} onReady={this._onReady} className="embed-responsive-item" /> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListSect;