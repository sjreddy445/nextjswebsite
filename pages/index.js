import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react'
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { payload as HomeHeaderData } from '../Payloads/Home/Header.js'
import { payload as ProductListData } from '../Payloads/Home/ProductList.js'
import { payload as SecretData } from '../Payloads/Home/Secret'
import { payload as BrandData } from '../Payloads/Home/BrandList'
import { payload as ServiceData } from '../Payloads/Home/Services'
import { payload as ourProductsData } from '../Payloads/Home/OurProducts'
import { payload as testimonialData } from '../Payloads/Testimonials/client'
import { payload as AwardsData } from '../Payloads/Awards/logo'
import ProductList from '../Components/ProductList/ProductList'
import SingleTextImageBanner from '../Components/SingleTextImageBanner/SingleTextImageBanner';
import HomeStats from '../Components/HomeStats/HomeStats';
import BrandList from '../Components/BrandList/BrandList';
import ServiceBanner from '../Components/ServiceBanner/ServiceBanner';
import Awards from '../Components/Awards/Awards';
import Testimonial from '../Components/Testimonials/Testimonials';
import Contact from '../Components/ContactSect/Contact';
import OurProducts from '../Components/OurProducts/OurProducts';
import { setNavColor} from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet'

export default function Home() {
  useEffect(() => {
    setNavColor("transparent-bg");
  });
 
  return (
    <Fade>
      {/* <TopNav></TopNav> */}
      <Helmet>
        <title>getEdGE AI: HR Strategic Workforce Talent Management Simplified</title>
        <meta name="description" content="getEdGE talent acquisition tool is powered using Artificial Intelligence to ensure talent management systems are simplified.  HR solution for talent management. " />
      </Helmet>
      <div >
        <HeaderBanner data={HomeHeaderData} />
      </div>
      <div className="section-margin">
        <HomeStats />
      </div>
      <div className="section-margin">
        <ProductList data={ProductListData} />
      </div>
      <div className="section-margin">
        <SingleTextImageBanner data={SecretData} />
      </div>
      <div className="section-margin">
        <BrandList data={BrandData} />
      </div>
      <div className="section-margin">
        <ServiceBanner data={ServiceData} />
      </div>
      <div className="light-sliver-bg">
        <Awards data={AwardsData} />
      </div>
      <div className="section-margin" >
        <Contact />
      </div>
      <div className="section-margin light-sliver-bg">
        <Testimonial data={testimonialData} />
      </div>
      <div className="section-margin">
        <OurProducts data={ourProductsData} />
      </div>
    </Fade>
  )
}
