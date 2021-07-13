import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import styles from './ServiceBanner.module.scss'
import {YouTubeGetID} from '../../Utils/Utils'
import YouTube from 'react-youtube'
import Image from 'next/image';

class ListSect extends Component {
  render() {
    let serviceList = this.props.data
    let videoId = YouTubeGetID("https://www.youtube.com/watch?v=uR_FJl6WyKM")
    const opts  = {
      playerVars : {rel: 0}
    }
    return (
      <div>
        <div className="">
          <Row> 
            {serviceList.map((list, i) => (
              <Col md={6} sm={12} key={i}>
                <div className={styles.serviceList}>{list.title}</div>
              </Col>
            ))}</Row>
        </div>

        <div className="section-margin mb-n5">
          <div className="d-flex justify-content-center">
            <div className="embed-responsive embed-responsive-16by9">
              <YouTube videoId={videoId} opts={opts} onReady={this._onReady} className="embed-responsive-item"/>
            </div>
          </div>
          
          {/* <imgsrc="https://picsum.photos/844/339" alt="" className="img-fluid img-round-top" /> */}
        </div>
      </div>
    );
  }
}

export default ListSect;