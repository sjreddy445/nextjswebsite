import React, { useEffect } from 'react'
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { payload as HomeHeaderData } from '../Payloads/Home/Header.js'
import { payload as SecretData } from '../Payloads/Home/Secret'
import { payload as BrandData,getBrands } from '../Payloads/Home/BrandList'
import { payload as ServiceData } from '../Payloads/Home/Services'
import { payload as payloadAwards } from '../Payloads/Awards/logo';
import { payload as StatsData } from '../Payloads/Home/Stats'
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
import { setNavColor } from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'

export default function Home(props) {

  useEffect(() => {
    setNavColor("transparent-bg");
  });

  return (
    <>
      <Fade>
        <Head>
          <title>getEdGE AI: HR Strategic Workforce Talent Management Simplified</title>
          <meta name="description" content="getEdGE talent acquisition tool is powered using Artificial Intelligence to ensure talent management systems are simplified.  HR solution for talent management. " />
        </Head>
        <div >
          <HeaderBanner data={props.HeaderData} />
        </div>
        <div className="section-margin">
          <HomeStats data={props.statsData} />
        </div>
        <div className="section-margin">
          <ProductList data={props.productData} />
        </div>
        <div className="section-margin">
          <SingleTextImageBanner data={props.secretData} />
        </div>
        <div className="section-margin">
          <BrandList data={BrandData} brandList={props.brandList} />
        </div>
        <div className="section-margin">
          <ServiceBanner data={ServiceData} serviceList={props.serviceList} />
        </div>
        <div className="light-sliver-bg">
          <Awards data={props.awardsList} />
        </div>
        <div className="section-margin" >
          <Contact />
        </div>
        <div className="section-margin light-sliver-bg">
          <Testimonial data={props.testimonialService} />
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
      ourProductData:proddata
    }
  }
}
