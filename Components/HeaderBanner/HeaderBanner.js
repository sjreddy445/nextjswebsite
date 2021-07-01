import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import TextSect from './TextSect';
import styles from './banner.module.scss'
import SubHeader from '../SubHeader/SubHeader';

class HeaderBanner extends Component {
  constructor(props) {
    super(props);
    this.state = { bgImg: "", imgAlt: "" };
  }

  loadImage = (title, imgAlt) => {
    let name = title
    let productImg
    import(`../../Assets/images/Headers/${name}`).then(image => {
      this.setState({
        bgImg: image.default.src,
        imgAlt: imgAlt
      });
    });
    return productImg
  };

  componentDidMount() {
    if (this.props.data.bgImg) {
      this.loadImage(this.props.data.bgImg, this.props.data.imgAlt)
    }
  }

  render() {
    return (
      <div className={this.props.data.bgClr ? this.props.data.bgClr+" " + styles.headerbanner : styles.headerbanner} >
        <div className={styles.rightbg} style={!this.props.data.bgImg ? { backgroundImage: `url('${this.props.data.bgCover}')` } : { backround: 'auto' }}>
          <div className={"container-inner " + styles.content}>
            <Row className="m-0 no-gutters">
              <Col md={6} sm={12} className="d-sm-block d-md-none pb-5">
                {this.props.data.bgImg ?
                  <img src={this.state.bgImg} alt={this.state.imgAlt} className="img-fluid" />
                  :
                  ""
                }
              </Col>
              <Col md={6} sm={12} className={styles.titleContainer}>
                <TextSect {...this.props} />
              </Col>
              <Col md={6} sm={12} className="d-none d-md-block">
                {this.props.data.bgImg ?
                  <img src={this.state.bgImg} alt={this.state.imgAlt} className="img-fluid w-90" />
                  :
                  ""
                }
              </Col>
              <Col md={12}>
                {this.props.data.subHeader ?
                  <div className="sm-mt-5"><SubHeader {...this.props} /></div>
                  :
                  ""
                }
              </Col>
            </Row>
            {/* <Row>
              
            </Row> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBanner;