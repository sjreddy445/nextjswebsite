import React, { useEffect } from 'react'
import dynamic from "next/dynamic";

// import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
const HeaderBanner = dynamic(() => import("../Components/HeaderBanner/HeaderBanner"), {
  ssr: true
});
const ProductList = dynamic(() => import("../Components/ProductList/ProductList"), {
  ssr: true
});
const SingleTextImageBanner = dynamic(() => import("../Components/SingleTextImageBanner/SingleTextImageBanner"), {
  ssr: true
});

const HomeStats = dynamic(() => import('../Components/HomeStats/HomeStats'), {
  ssr: true
});
const BrandList = dynamic(() => import('../Components/BrandList/BrandList'), {
  ssr: true
});
const ServiceBanner = dynamic(() => import('../Components/ServiceBanner/ServiceBanner'), {
  ssr: true
});
const Awards = dynamic(() => import('../Components/Awards/Awards'), {
  ssr: true
});
const Contact = dynamic(() => import('../Components/ContactSect/Contact'), {
  ssr: true
});
const Testimonial = dynamic(() => import('../Components/Testimonials/Testimonials'), {
  ssr: true
});
const OurProducts = dynamic(() => import('../Components/OurProducts/OurProducts'), {
  ssr: true
});

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
import { setNavColor } from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import Api from '../Config/Api'
import { pageTitle } from '../Payloads/pageTitle/title';

export default function Home(props) {

  useEffect(() => {
    setNavColor("transparent-bg");
  });
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
          <SingleTextImageBanner data={props.secretData} title={props.ServiceTitle} />
        </div>
        <div className="section-margin">
          <ProductList data={props.productData} title={props.productsTitle} />
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
          <OurProducts data={props.ourProductData} title={props.beforeFooterTitle} />
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
  var beforeFooterTitle = await sectionTitle('home-before-footer');
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
      beforeFooterTitle: beforeFooterTitle,
      serviceVideo: serVideo
    }
  }
}
