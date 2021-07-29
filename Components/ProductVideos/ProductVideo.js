import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TextSect from './TextSect';
import VideoSect from './VideoSect';
import styles from "./ProductVideos.module.scss";
class ProductVideo extends Component {
    render() {
        return (
            <>
                <div className={"py-5 " + styles.productvideo}>
                    <Row className={"container-inner text-lg mb-4 text-white " + styles.productvideobox}>
                        <Col md={5} sm={12} className="pr-5">
                            <TextSect {...this.props} />
                        </Col>
                        <Col md={7} sm={12} >
                            <VideoSect />
                        </Col>

                    </Row>
                </div>
            </>
        );
    }
}

export default ProductVideo;