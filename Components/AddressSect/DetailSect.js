import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class DetailSect extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={6} sm={12}>
            <h4 className="text-lg mt-3 font-weight-bold">
              Visit us at
            </h4>
            <div className=" text-md line175 mt-2">
              2nd Floor # 8/2, Novel Office Central, <br />
              Ulsoor Road,  Bangalore  <br />560042
          </div>
            <div className="mt-4 text-brand" style={{ fontSize: "1rem" }}>
              <b><a href="https://g.page/NovelOfficeMGRoad?share" target="_blank" rel="noopener noreferrer">GET DIRECTIONS</a></b>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <h4 className="text-lg mt-3 font-weight-bold">
              Give us a ring
            </h4>
            <div className=" text-md line175 mt-2 text-brand">
              <a href="tel:+918041148049">+ 91 80 4114 8049</a>
            </div>
            <h4 className="text-lg mt-4 font-weight-bold">
              Drop a mail
            </h4>
            <div className=" text-md line175 mt-2 text-brand">
              <a href="mailto:info@edgenetworks.in">info@edgenetworks.in</a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DetailSect;