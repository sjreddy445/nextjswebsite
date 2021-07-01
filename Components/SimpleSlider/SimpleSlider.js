import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import TextSect from './TextSect'
import ImageSlider from './ImageSlider'

export default class SimpleSlider extends Component {
  render() {
    return (
      <div className="container-inner">
        <Row>
          <Col md={6} className="mt-5">
            <TextSect {...this.props}/>
          </Col>
          <Col md={6} className="mt-5">
            <ImageSlider {...this.props} />
          </Col>
        </Row>
      </div>
    )
  }
}
