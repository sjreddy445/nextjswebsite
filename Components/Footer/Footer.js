import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import NavLink from 'next/link'
// import "./Footer.scss";
import CreditModalImg from '../../Assets/images/Icons/credits-modal.svg'
import LogoWhite from "../../Assets/images/edge_logo_white.svg";
import GartnerCoolImg from "../../Assets/images/Gartner_Cool_Vendor.png"
import { Modal, ModalHeader, ModalBody, Col, Row } from 'reactstrap';
import NewsletterForm from './NewsletterForm';
import BookDemo from './BookDemo';

const year = new Date().getFullYear()

class Footer extends Component {

  constructor(props) {
    super()
    this.state = {
      modal: false
    }
  }

  toggleCreditModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
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
              <h4 className="text-white ma-0 title">Text Placeholder - Lorem Ipsum is simply dummy text.</h4>
              <BookDemo/>
            </div>
          </div>
          <div className="py-5 news-letter-form">
            <div className="container-inner news-letter-box">
              <h4 className="text-white ma-0 title">Sign up for our newsletter.</h4>
              <NewsletterForm />
            </div>
          </div>

          <div className="bold-grey-bg">
            <div className="py-5">
              <div className="container-inner">
                <img src={LogoWhite.src} alt='' />
              </div>
              <div className="mt-5 container-inner footer-quarter-element d-flex justify-content-between">
                <div className="about-edge">
                  <p className="text-xs text-grey1 text-line-height-1-6 edge-details">Edge Networks is a talent decision platform powered by Artificial Intelligence. We aim to simplify decisions in talent management to help organizations build the workforce of the future.</p>
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
                  <a href="https://www.facebook.com/edgenetworkspvtltd" rel="noopener noreferrer"  target="_blank" className="link-no-decor"><i className="icon-facebook icon"></i></a>
                  <a href="https://twitter.com/getedge_ai" rel="noopener noreferrer"  className="link-no-decor" target="_blank"><i className="icon-twitter icon"></i></a>
                  <a href="https://www.linkedin.com/company/avr-edge-networks-pvt--ltd-/" rel="noopener noreferrer"  className="link-no-decor" target="_blank"><i className="icon-linkedin icon"></i></a>
                  <a href="https://www.youtube.com/channel/UCrceycnUns21KLXYubEZuTA" rel="noopener noreferrer"  className="link-no-decor" target="_blank"><i className="icon-youtube icon"></i></a>
                </div>

              </div>
            </div>

            <hr />

            <div className="py-5 container-inner footer-trio-element d-flex justify-content-between align-items-center">
              <div>
                <img className="gartner-img" alt='' src={GartnerCoolImg.src} />
              </div>
              <div className="text-grey1 box gartner-title">
                <h3 className="gartner">
                  Gartner,<br />
              Cool Vendors in Human<br />
              Capital Management.
            </h3>
                <h5 className="text-xs text-white">2016, May 9, 2016</h5>
              </div>
              <p className="text-xxs text-grey1 box text-line-height-1-6 gartner-details">The Gartner Cool Vendor Logo is a trademark and service mark of Gartner, Inc., and/or its affiliates, and is used herein with permission. All rights reserved. Gartner does not endorse any vendor, product or service depicted in its research publications, and does not advise technology users to select only those vendors with the highest ratings or other designation. Gartner research publications consist of the opinions of Gartners research organization and should not be construed as statements of fact. Gartner disclaims all warranties, expressed or implied, with respect to this research, including any warranties of merchantability or fitness for a particular purpose.</p>
            </div>

            <hr />

            <div className="container-inner py-2">
              <p className="text-right text-grey1 text-xxs sm-text-left m-0 py-2">{year} © EdGE Networks. All Rights Reserved |<NavLink href="/privacy" className="link-no-decor"> Privacy Policy</NavLink> | <span onClick={this.toggleCreditModal} className="pointer">Credits</span></p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Footer;