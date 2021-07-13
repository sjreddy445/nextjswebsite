import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import PeopleCard from './PeopleCard'
import { payload as PeopleData } from '../../Payloads/AboutUs/People'
export default class Leadership extends Component {
  state = {
    people: []
  }
  componentDidMount = async () => {
    var data = await PeopleData();
    this.setState({ people: data });
  }


  render() {
    let people = this.props.data
    return (
      <div className="container-inner">
        <h3 className="text-xl mb-5 font-weight-bold">
          Our Leadership
        </h3>
        <div>
          <Row>
            {this.state.people.map((p, i) => (
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
