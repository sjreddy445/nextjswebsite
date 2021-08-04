import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { data } from 'jquery';

class DetailSect extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={6} sm={12}>
            <h4 className="text-lg mt-3 font-weight-bold">
              {this.props?.data?.title2}
            </h4>
            <div className=" text-md line175 mt-2">
            {ReactHtmlParser(this.props?.data?.address)}
          </div>
            <div className="mt-4 text-brand" style={{ fontSize: "1rem" }}>
              <b><a href={this.props?.data?.direction} target="_blank" rel="noopener noreferrer">{this.props?.data?.title4}</a></b>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <h4 className="text-lg mt-3 font-weight-bold">
            {this.props?.data?.title3}
            </h4>
            <div className=" text-md line175 mt-2 text-brand">
              <a href="tel:+918041148049">{this.props?.data?.phone}</a>
            </div>
            <h4 className="text-lg mt-4 font-weight-bold">
            {this.props?.data?.title5}
            </h4>
            <div className=" text-md line175 mt-2 text-brand">
              <a href={`mailto:${this.props?.data?.email}`}>{this.props?.data?.email}</a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DetailSect;