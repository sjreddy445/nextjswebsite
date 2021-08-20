import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styles from './testimonial.module.scss'
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
class Content extends Component {

    componentDidMount()
    {
    }
    
    render() {

        return (
            <div className={'d-inline-flex'}>
                <Col md={{offset:0}} sm={{offset:1}} xs={{offset:0,span:10}} className={""}  >
                    <div className="p-2 ml-4">
                        <img className={styles.img} src={AddCmsImgBaseUrl(this.props.data.image.url)} alt="new" />
                    </div>
                </Col>
                <Col md={7}  className={styles.desc+" m-1"}>
                    <p className="text-xs font-weight-light m-2">
                        {this.props.data.name}
                    </p>
                    <p className="text-xs m-2 font-weight-normal">
                        {this.props.data.designation}
                    </p>
                    <p className="text-md m-2 font-weight-bold">
                        {this.props.data.company}
                    </p>
                </Col>
            </div>
        );
    }
}

export default Content;