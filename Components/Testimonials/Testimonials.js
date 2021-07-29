import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TestimonialText from './text';
import Slider from './slider';

class Testimonial extends Component {
    render() {
        return (
            <>

                <div className="container-inner py-5" id="contactid">
                    <Row className="no-gutters">
                        <Col md={3} sm={12} className="">
                            <TestimonialText {...this.props} />
                        </Col>
                        <Col></Col>
                        <Col md={8} className={'mr-1'} sm={12}>
                            <Slider {...this.props}  />
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Testimonial;
