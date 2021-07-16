import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import StatsBox from '../ProductStats/ProductStats';

class HomeStats extends Component {
  render() {
    return (
      <div className="container-inner home-stats d-flex justify-content-center">
        <Row className="no-gutters m-0">
          <Col md={12}>
            <div className="title ml-3 text-lg mb-4"><b>Our Impact</b></div>
          </Col>
          <StatsBox data={this.props.data} />
        </Row>

      </div>
    );
  }
}

export default HomeStats;