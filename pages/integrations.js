import React, { useEffect } from 'react'
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { payload as IntegrationHeaderData } from '../Payloads/Integrations/Header'
import { payload as integrationData } from '../Payloads/Integrations/integrationData'
import { payload as payloadAwards } from '../Payloads/Awards/logo';
import { payload as sectionTitle } from '../Payloads/sectionTitle/title'
import { payload as testimonialPayload } from '../Payloads/Testimonials/client'
import { payload as ourProductsData } from '../Payloads/Home/OurProducts'
import Accordion from '../Components/Accordion/Accordion';
import Integratio from '../Components/Integrations/integration';
import Awards from '../Components/Awards/Awards';
import Contact from '../Components/ContactSect/Contact';
import Testimonial from '../Components/Testimonials/Testimonials';
import OurProducts from '../Components/OurProducts/OurProducts';
import { setNavColor } from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import Header from './careers/Header';

import Api from '../Config/Api'
import { pageTitle } from '../Payloads/pageTitle/title';

export default function Home(props) {

    useEffect(() => {
        setNavColor("transparent-bg text-white");
    }, []);


    return (
        <>
            <Fade>
                <Head>
                    <title>{pageTitle('home')}</title>
                    <meta name="description" content="getEdGE talent acquisition tool is powered using Artificial Intelligence to ensure talent management systems are simplified.  HR solution for talent management. " />
                </Head>
                <div >
                    <HeaderBanner data={props.HeaderData} btnTitle={"SEE OUR INTEGRATIONS"} />
                </div>
                <div className="section-margin container-inner" style={{ marginTop: 100, marginBottom: 100 }}>
                    <div>
                        <b>{props?.integrationTitle?.title}</b>
                    </div>
                    {props?.integrationData?.map((data, index) =>
                        <Accordion key={`integration_list_${index}`} hr={true} head={<Header title={data?.title} />} subTitle={data?.subTitle} body={<Integratio data={data?.integrations} />} />
                    )}
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
    var headerData = await IntegrationHeaderData();
    let awardsData = await payloadAwards();
    var testimonialData = await testimonialPayload();
    var contactTitle = await sectionTitle('contact');
    var AwardTitle = await sectionTitle('awards');
    var integrationTitle = await sectionTitle('integrate');
    var TestimonialTitle = await sectionTitle('testimonial');
    var integratData = await integrationData();
    var proddata = await ourProductsData();

    return {
        props: {
            HeaderData: headerData,
            awardsList: awardsData,
            testimonialService: testimonialData,
            contactTitle: contactTitle,
            AwardTitle: AwardTitle,
            TestimonialTitle: TestimonialTitle,
            integrationData: integratData,
            integrationTitle: integrationTitle,
            ourProductData: proddata,
        }
    }
}
