import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styles from './testimonial.module.scss'

class Content extends Component {

    componentDidMount()
    {
    }
    
    render() {

        return (
            <>
                <Col md={{offset:1}} sm={{offset:1}} xs={{offset:4,span:10}} className={""}  >
                    <div className="p-2 ml-3">
                        <img className={styles.img} src={this.props.data.img} alt="new" />
                    </div>
                </Col>
                <Col md={6}  className={styles.desc+" m-1"}>
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
            </>
        );
    }
}

export default Content;