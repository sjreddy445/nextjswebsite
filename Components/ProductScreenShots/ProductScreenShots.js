import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TextSect from './TextSect';
import ScreenshotSect from './ScreenShotSect';
import styles from "./ProductScreenShots.module.scss";

class ProductScreenShots extends Component {
    render() {
        return (
            <>
                <div className={"py-5 " + styles.productscreenshot}>
                    <Row className={"container-inner text-lg mb-4 text-black " + styles.productscreenshotbox}>
                        <Col md={4} sm={12} className="pr-5">
                            <TextSect />
                        </Col>
                        <Col md={8} sm={12} >
                            <ScreenshotSect {...this.props} />
                        </Col>

                    </Row>
                </div>
            </>
        );
    }
}

export default ProductScreenShots;