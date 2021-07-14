import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { payload as StatsData } from '../../Payloads/Home/Stats'
import StatsBox from './StatsBox';

class HomeStats extends Component {
  state={
    stats:[]
  }
componentDidMount(){
  this.getStatFunc();
}
  getStatFunc = async () => {
    var statData = await StatsData();
    this.setState({ stats: statData })
  }

  render() {
    return (
      <div className="container-inner home-stats d-flex justify-content-center">
        <Row className="no-gutters m-0">
          <Col md={12}>
            <div className="title ml-3 text-lg mb-4"><b>Our Impact</b></div>
          </Col>
          {this.state.stats.map((stats, i) => (
            <Col md={4} xs={12} className="mt-4" key={i}>
              <StatsBox data={stats} />
            </Col>
          ))}

        </Row>

      </div>
    );
  }
}

export default HomeStats;