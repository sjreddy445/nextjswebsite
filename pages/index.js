import React, { useEffect } from 'react'
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
import { getServices, getServiceVideo } from '../Payloads/Home/Services';

import ProductList from '../Components/ProductList/ProductList'
import SingleTextImageBanner from '../Components/SingleTextImageBanner/SingleTextImageBanner';
import HomeStats from '../Components/HomeStats/HomeStats';
import BrandList from '../Components/BrandList/BrandList';
import ServiceBanner from '../Components/ServiceBanner/ServiceBanner';
import Awards from '../Components/Awards/Awards';
import Contact from '../Components/ContactSect/Contact';
import Testimonial from '../Components/Testimonials/Testimonials';
import OurProducts from '../Components/OurProducts/OurProducts';
import { setNavColor } from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'

import Api from '../Config/Api'
import { pageTitle } from '../Payloads/pageTitle/title';

export default function Home(props) {

  useEffect(() => {
    setNavColor("transparent-bg");
  });

  console.log("this.props",props)
  return (
    <>
      <Fade>
        <Head>
          <title>{pageTitle('home')}</title>
          <meta name="description" content="getEdGE talent acquisition tool is powered using Artificial Intelligence to ensure talent management systems are simplified.  HR solution for talent management. " />
        </Head>
        <div >
          <HeaderBanner data={props.HeaderData} />
        </div>
        <div className="section-margin">
          <HomeStats data={props.statsData} title={props.statsTitle} />
        </div>
        <div className="section-margin">
          <ProductList data={props.productData} title={props.productsTitle} />
        </div>
        <div className="section-margin">
          <SingleTextImageBanner data={props.secretData} title={props.ServiceTitle} />
        </div>
        <div className="section-margin">
          <BrandList brandList={props.brandList} title={props.brandTitle} />
        </div>
        <div className="section-margin">
          <ServiceBanner video={props.serviceVideo} serviceList={props.serviceList} title={props.ServiceTitle} />
        </div>
        <div className="light-sliver-bg">
          <Awards data={props.awardsList} title={props.AwardTitle} />
        </div>
        <div className="section-margin" >
          <Contact title={props.contactTitle} />
        </div>
        <div className="section-margin light-sliver-bg">
          <Testimonial data={props.testimonialService} title={props.TestimonialTitle} />
        </div>
        <div className="section-margin">
          <OurProducts data={props.ourProductData} />
        </div>
      </Fade>
    </>
  )
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
  var serVideo = await getServiceVideo();

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
      serviceVideo:serVideo
    }
  }
}
