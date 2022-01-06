import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { DashToUpper } from '../../Utils/Utils'

class SubMenu extends Component {
  render() {
    let { menuItems } = this.props
    return (
      <div>
        {/* <Card> */}
        <div className={"container-inner"}>
          <Row >
            <Col md={10}>
              <div className="d-flex justify-content-around py-2">
                {menuItems?.map((item, i) => (
                  <a className="item p-3 text-md link-no-decor" key={i} href={`#${item}`}>{DashToUpper(item)}</a>
                ))}  
              </div>
            </Col>
            {this.props.hasSocial ?
              <Col md={2}>
                <div className="float-right py-2 d-flex">
                  <div className="iconBox p-3 text-md">
                    <a href="https://www.facebook.com/edgenetworkspvtltd" className="link-no-decor" target="_blank" rel="noopener noreferrer"><i className="icon-facebook icon"></i></a>
                  </div>
                  <div className="iconBox p-3 text-md">
                    <a href="https://twitter.com/getedge_ai" className="link-no-decor" target="_blank" rel="noopener noreferrer"><i className="icon-twitter icon"></i></a>
                  </div>
                </div>
              </Col>
              :
              ""
            }
          </Row>
        </div>
        {/* </Card> */}
      </div>
    );
  }
}

export default SubMenu;