import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import PeopleCard from './PeopleCard'
import { payload as PeopleData } from '../../Payloads/AboutUs/People'
export default class Leadership extends Component {
  render() {
    
    return (
      <div className="container-inner">
        <h3 className="text-xl mb-5 font-weight-bold">
          {this.props?.title?.title}
        </h3>
        <div>
          <Row>
            {this.props?.people?.map((p, i) => (
              <Col key={i} md={4} xs={12}>
                <PeopleCard data={p} key={i} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }
}
