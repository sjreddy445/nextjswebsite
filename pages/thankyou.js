import { withRouter, Router } from 'next/router';
import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, Col, Row, Fade } from 'reactstrap';
import SuccessModalImg from '../Assets/images/Icons/message-modal.svg'
import Home from './index';
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { payload as HomeHeaderData } from '../Payloads/Home/Header.js'
import { payload as SecretData } from '../Payloads/Home/Secret'
import { getBrands } from '../Payloads/Home/BrandList'
import { payload as payloadAwards } from '../Payloads/Awards/logo';
import { payload as StatsData } from '../Payloads/Home/Stats'
import { payload as sectionTitle } from '../Payloads/sectionTitle/title'
import { payload as ProductListData } from '../Payloads/Home/ProductList'
import { payload as ourProductsData } from '../Payloads/Home/OurProducts'
import { payload as testimonialPayload } from '../Payloads/Testimonials/client'
import { getServices } from '../Payloads/Home/Services';

import ProductList from '../Components/ProductList/ProductList'
import SingleTextImageBanner from '../Components/SingleTextImageBanner/SingleTextImageBanner';
import HomeStats from '../Components/HomeStats/HomeStats';
import BrandList from '../Components/BrandList/BrandList';
import ServiceBanner from '../Components/ServiceBanner/ServiceBanner';
import Awards from '../Components/Awards/Awards';
import Contact from '../Components/ContactSect/Contact';
import Testimonial from '../Components/Testimonials/Testimonials';
import OurProducts from '../Components/OurProducts/OurProducts';

class SuccessModal extends Component {

  constructor(props) {
    super()
    this.state = {
      isOpen: false,
      msg: ''
    }
  }
  componentDidMount() {
    const { query } = this.props.router;
    console.log("query", query)
    if (query && query.msg && query.isOpen === "true") {
      this.setState({ isOpen: true, msg: query.msg })
    }
  }
  toggleModal = () => {
    this.setState({ isOpen: false, msg: '' })
    this.props.router.push("/", "", { shallow: true })
  }
  render() {
    return (
      <div>
        <div >
          <HeaderBanner data={this.props.HeaderData} />
        </div>
        <div className="section-margin">
          <HomeStats data={this.props.statsData} title={this.props.statsTitle} />
        </div>
        <div className="section-margin">
          <ProductList data={this.props.productData} title={this.props.productsTitle} />
        </div>
        <div className="section-margin">
          <SingleTextImageBanner data={this.props.secretData} title={this.props.ServiceTitle} />
        </div>
        <div className="section-margin">
          <BrandList brandList={this.props.brandList} title={this.props.brandTitle} />
        </div>
        <div className="section-margin">
          <ServiceBanner serviceList={this.props.serviceList} title={this.props.ServiceTitle} />
        </div>
        <div className="light-sliver-bg">
          <Awards data={this.props.awardsList} title={this.props.AwardTitle} />
        </div>
        <div className="section-margin" >
          <Contact title={this.props.contactTitle} />
        </div>
        <div className="section-margin light-sliver-bg">
          <Testimonial data={this.props.testimonialService} title={this.props.TestimonialTitle} />
        </div>
        <div className="section-margin">
          <OurProducts data={this.props.ourProductData} />
        </div>
        <Modal isOpen={this.state.isOpen} toggle={() => this.toggleModal()} className="info-modal" size="lg" >
          <ModalHeader toggle={() => this.toggleModal()}></ModalHeader>
          <ModalBody>
            <div className="info-modal-body">
              <Row>
                <Col md={5} xm={12} className="p-0">
                  <div className="info-modal-image info-modal-credit">
                    <div className="img-box">
                      <img src={SuccessModalImg.src} alt="" />
                    </div>
                  </div>
                </Col>
                <Col md={7} xm={12}>
                  <div className="info-modal-text pl-4">
                    <div className="title text-xl mb-4">
                      <b>Yay!</b>
                    </div>
                    <div className="subtitle text-xs mb-2">
                      <span>{this.state.msg}</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
export async function getServerSideProps(context) {
  var headerData = await HomeHeaderData();
  var secretData = await SecretData();
  let awardsData = await payloadAwards();
  var statData = await StatsData();
  let productData = await ProductListData();
  let brandData = await getBrands();
  var serviceData = await getServices();
  var testimonialData = await testimonialPayload();
  var proddata = await ourProductsData();
  var brandTitle = await sectionTitle('brands');
  var contactTitle = await sectionTitle('contact');
  var AwardTitle = await sectionTitle('awards');
  var TestimonialTitle = await sectionTitle('testimonial');
  var ServiceTitle = await sectionTitle('offers');
  var statsTitle = await sectionTitle('stats');
  var productsTitle = await sectionTitle('3products');

  return {
    props: {
      HeaderData: headerData,
      awardsList: awardsData,
      secretData: secretData,
      statsData: statData,
      productData: productData,
      brandList: brandData,
      serviceList: serviceData,
      testimonialService: testimonialData,
      ourProductData: proddata,
      brandTitle: brandTitle,
      contactTitle: contactTitle,
      AwardTitle: AwardTitle,
      TestimonialTitle: TestimonialTitle,
      ServiceTitle: ServiceTitle,
      statsTitle: statsTitle,
      productsTitle: productsTitle,
    }
  }
}

export default withRouter(SuccessModal);