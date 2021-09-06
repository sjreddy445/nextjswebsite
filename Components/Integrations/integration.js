import React, { Component } from 'react';
import styles from "./integration.module.scss"
import $ from 'jquery';
import { Col, Row } from 'reactstrap'
import { AddCmsImgBaseUrl } from '../../Utils/Utils';

export default class Accordion extends Component {
  constructor(props) {
    super();
  }


  render() {
    return (
      <div className={styles.accordion}>
        <div className={styles.head} >
          <Row className="no-gutters">
            {this.props?.data.map((data, i) => (
              <Col key={i} md={4} sm={4}>
                <div className={styles.bggray} >
                  <img onClick={() => { data?.link ? window.open(data?.link, "_bank") : '' }} src={AddCmsImgBaseUrl(data?.logo?.url)} className={styles.logo} />
                </div>
                <div>
                  <p className={styles.title}>{data?.title}</p>
                  <p className={styles.desc}>{data?.content}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }
}