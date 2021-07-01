import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import PeopleCard from './PeopleCard'

export default class Leadership extends Component {
  render() {
    let people = this.props.data
    return (
      <div className="container-inner">
        <h3 className="text-xl mb-5 font-weight-bold">
          Our Leadership
        </h3>
        <div>
          <Row>
          {people.map((p, i)=>(
            <Col md={4} xs={12}>
              <PeopleCard data={p} key={i}/>
            </Col>
          ))}
          </Row>
        </div>
      </div>
    )
  }
}
