import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import TextSect from './TextSect';
import styles from './banner.module.scss'
import SubHeader from '../SubHeader/SubHeader';
import Image from "next/image";
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
class HeaderBanner extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    if (this.props?.data?.bgImg) {
      // this.loadImage(this.props.data.bgImg, this.props.data.imgAlt)
    }
  }
  myLoader = (url) => {
    return AddCmsImgBaseUrl(url)
  }


  render() {

    return (
      <div className={this.props?.data?.bgClr ? this.props?.data?.bgClr + " " + styles.headerbanner : styles.headerbanner} >
        <div className={styles.rightbg} style={!this.props?.data?.bgImg ? { backgroundImage: `url('${this.props?.data?.bgCover ? AddCmsImgBaseUrl(this.props.data.bgCover.url) : ''}')` } : { background: 'auto' }}>
          <div className={"container-inner " + styles.content}>
            <Row className="m-0 no-gutters">
              <Col md={6} sm={12} className="d-sm-block d-md-none pb-5">
                {this.props.data?.bgImg ?
                  <img src={AddCmsImgBaseUrl(this.props.data?.bgImg?.url)} alt={this.props?.data?.imgAlt} className="img-fluid" />
                  :
                  ""
                }
              </Col>
              <Col md={6} sm={12} className={styles.titleContainer}>
                <TextSect {...this.props} />
              </Col>
              <Col md={6} sm={12} className="d-none d-md-block " style={{position: "relative",top: "6px"}}>
                {this.props.data?.bgImg ?
                  <Image
                    style={{ position: 'unset' }}
                    loader={() => this.myLoader(this.props.data?.bgImg?.url)}
                    src={AddCmsImgBaseUrl(this.props.data?.bgImg?.url)}
                    alt={this.props.data?.imgAlt}
                    width={600}
                    height={520}
                    layout="fixed"
                  />
                  :
                  ""
                }
              </Col>
              <Col md={12}>
                {this.props.data?.sub_headers.length > 0 ?
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