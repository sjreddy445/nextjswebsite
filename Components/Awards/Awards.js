import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import AwardText from './AwardText';
import AwardImage from './AwardImage';
class Awards extends Component {
    render() {
        return (
            <>
                <div className="container-inner py-5" id="contactid" name="contactWidget">
                    <Row className="no-gutters">
                        <Col md={4} sm={12} className="">
                            <AwardText />
                        </Col>
                        <Col md={8} sm={12}>
                            <AwardImage {...this.props} />
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Awards;