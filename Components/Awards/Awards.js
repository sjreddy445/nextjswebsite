import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import AwardText from './AwardText';
import AwardImage from './AwardImage';
import { payload as payloadImage } from '../../Payloads/Awards/logo';

class Awards extends Component {
    state = {
        logo: []
    }
    componentDidMount = async () => {
        let data = await payloadImage();
        this.setState({ logo: data });
    }
    render() {
        return (
            <>
                <div className="container-inner py-5" id="contactid" name="contactWidget">
                    <Row className="no-gutters">
                        <Col md={4} sm={12} className="">
                            <AwardText />
                        </Col>
                        <Col md={8} sm={12}>
                            <AwardImage data={this.state.logo} />
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Awards;