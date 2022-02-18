import React, { Component } from 'react';
import NavLink from 'next/link'
import CreditModalImg from '../../Assets/images/Icons/credits-modal.svg'
import Image from "next/image";
import { Modal, ModalHeader, ModalBody, Col, Row } from 'reactstrap';
import NewsletterForm from './NewsletterForm';
import BookDemo from './BookDemo';
import { payload as sectionTitle, } from '../../Payloads/sectionTitle/title'
import { payload as footerData, socialLinks } from '../../Payloads/Footer/footer'
import ReactHtmlParser from 'react-html-parser';
import { AddCmsImgBaseUrl } from '../../Utils/Utils';
const year = new Date().getFullYear()
class Footer extends Component {
  constructor(props) {
    super()
    this.state = {
      modal: false,
      data: {},
      newsLetterTitle: {},
      demoTitle: {},
      socialLinks: {}
    }
  }

  async componentDidMount() {
    var newsLetterTitle = await sectionTitle('newsletter');
    var demoTitle = await sectionTitle('bookdemo');
    var footData = await footerData();
    var links = await socialLinks();
    this.setState({ newsLetterTitle: newsLetterTitle, data: footData, demoTitle: demoTitle, socialLinks: links });
  }
  toggleCreditModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }
  myLoader = (url) => {
    return AddCmsImgBaseUrl(url)
  }
  
  render() {
    
    return (
      <>
        <Modal isOpen={this.state.modal} toggle={this.toggleCreditModal} className="info-modal" size="lg" >
          <ModalHeader toggle={this.toggleCreditModal}></ModalHeader>
          <ModalBody>
            <div className="info-modal-body">
              <Row>
                <Col md={5} xm={12} className="p-0">
                  <div className="info-modal-image info-modal-credit">
                    <div className="img-box">
                      <img src={CreditModalImg.src} alt="" />
                    </div>
                  </div>
                </Col>
                <Col md={7} xm={12}>
                  <div className="info-modal-text pl-4">
                    <div className="title text-xl mb-4">
                      <b>Credits</b>
                    </div>
                    <div className="subtitle text-xs mb-2">
                      <b>Images:</b>
                    </div>
                    <div className="msg text-xs mb-4">
                      <div className="msg-text mb-1">
                        Life@Edge Header: Pexels | Andrea Piacquadio
                      </div>
                      <div className="msg-text">
                        Homepage Header: Freepik | Drobotdean
                      </div>
                    </div>
                    <div className="subtitle text-xs mb-2">
                      <b>All Illustrations:</b>
                    </div>
                    <div className="msg text-xs mb-2">
                      <div className="msg-text mb-1">
                        Life@Edge Header: Pexels | Andrea Piacquadio
                      </div>
                      <div className="msg-text">
                        Homepage Header: Freepik | Drobotdean
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </ModalBody>
        </Modal>
        <div className="footer">
          <div className="py-5 book-demo-form">
            <div className="container-inner book-demo-box">
              <h4 className="text-white ma-0 title">{this.state?.demoTitle?.title}</h4>
              <BookDemo />
            </div>
          </div>
          <div className="py-5 news-letter-form">
            <div className="container-inner news-letter-box">
              <h4 className="text-white ma-0 title">{this.state?.newsLetterTitle?.title}</h4>
              <NewsletterForm />
            </div>
          </div>
          <div className="bold-grey-bg">
            <div className="py-5">
              <div className="container-inner">
                <img alt='' src={AddCmsImgBaseUrl(this.state?.data?.logo?.url)} />
              </div>
              <div className="mt-5 container-inner footer-quarter-element d-flex justify-content-between">
                <div className="about-edge">
                  <p className="text-xs text-grey1 text-line-height-1-6 edge-details">{this.state?.data.description1}</p>
                </div>
                <div className="footer-link-1">
                  <ul className="text-white footer-v-nav">
                    <li className="text-line-height-1-6"><NavLink href="/elapage" className="link-no-decor">ELA</NavLink></li>
                    <li className="text-line-height-1-6"><NavLink href="/life-at-edge" className="link-no-decor">Life @ Edge</NavLink></li>
                    <li className="text-line-height-1-6"><NavLink href="/careers" className="link-no-decor">Careers</NavLink></li>
                  </ul>
                </div>
                <div className="footer-link-2">
                  <ul className="text-white footer-v-nav">
                    {/* <li className="text-line-height-1-6">Our Products </li> */}
                    <li className="text-line-height-1-6"><NavLink href="/contact" className="link-no-decor">Contact</NavLink></li>
                    <li className="text-line-height-1-6"><NavLink href="/about" className="link-no-decor">About us</NavLink></li>
                    <li className="text-line-height-1-6"><NavLink href="/sitemap" className="link-no-decor">Sitemap</NavLink></li>
                    {/* <li className="text-line-height-1-6 pointer" >Credits</li> */}
                  </ul>
                </div>
                <div className="social-icons">
                  <a href={this.state?.socialLinks?.facebook} aria-label="facebook" rel="noopener noreferrer" target="_blank" className="link-no-decor"><i className="icon-facebook icon"></i></a>
                  <a href={this.state?.socialLinks?.twitter} aria-label="twitter" rel="noopener noreferrer" className="link-no-decor" target="_blank"><i className="icon-twitter icon"></i></a>
                  <a href={this.state?.socialLinks?.linkedIn} aria-label="linkedIn" rel="noopener noreferrer" className="link-no-decor" target="_blank"><i className="icon-linkedin icon"></i></a>
                  <a href={this.state?.socialLinks?.youtube} aria-label="youtube" rel="noopener noreferrer" className="link-no-decor" target="_blank"><i className="icon-youtube icon"></i></a>
                </div>

              </div>
            </div>

            <hr></hr>
            <div className="py-5 container-inner footer-trio-element d-flex justify-content-between align-items-center">
              <div className="gartner-img">
                {this.state?.data?.logo2?.url && <Image
                  loader={() => this.myLoader(this.state?.data?.logo2?.url)}

                  alt=''
                  width={700}
                  height={700}
                  src={AddCmsImgBaseUrl(this.state?.data?.logo2?.url)} />
                }
              </div>
              <div className="text-grey1 box gartner-title">
                <h3 className="gartner">
                  {ReactHtmlParser(this.state?.data?.description2)}
                </h3>
                <p className="text-xs text-white">{this.state?.data?.date}</p>
              </div>
              <p className="text-xxs text-grey1 box text-line-height-1-6 gartner-details">{this.state?.data?.description3}</p>
            </div>

            <hr></hr>

            <div className="container-inner py-2 d-flex justify-content-between">
            <p className="text-left text-grey1 text-xxs sm-text-left m-0 py-2 md-4">
                {this.state?.data?.address}
              </p>
              <p className="text-right text-grey1 text-xxs sm-text-left m-0 py-2"> {year} {this.state?.data?.description4}|<NavLink href="/privacy" className="link-no-decor"> Privacy Policy</NavLink> | <span onClick={this.toggleCreditModal} className="pointer">Credits</span></p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Footer;