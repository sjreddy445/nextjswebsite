import React, { Component } from 'react';
import { payload as CareerHeaderData } from '../../Payloads/Careers/Header.js'
import { payload as sectionTitle } from '../../Payloads/sectionTitle/title'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import CareerCard from "./CareerCard";
import Accordion from "../../Components/Accordion/Accordion";
import Fade from 'react-reveal/Fade';
import { setNavColor } from '../../Components/TopNav/Utils'
import {openingData} from "../../Payloads/Careers/Openings"
import styles from "./career.module.scss";
import Head from 'next/head'
import { pageTitle } from '../../Payloads/pageTitle/title';
import Header from './Header'
import ReactHtmlParser from 'react-html-parser';
export default class Careers extends Component {
  state={
    headerData:{},
    openings:[]
  }
  componentDidMount() {
    setNavColor("transparent-bg");
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className={styles.careerpage}>
        <Head>
        <title>{pageTitle('career')}</title>
          <meta name="description" content="getEdGE is focused on career path planning and development for various industries. Do contact us with your best job from the list!" />
        </Head>
        <Fade>
          <div>
            <HeaderBanner data={this.props.headerData} />
          </div>
          <div className="container-inner">
            <div className={"section-margin "+ styles.aboutedge}>
              <div className={styles.leftcol}>
                <h2 className={styles.boldtitle}>{this.props?.title?.title}</h2>
              </div>
              <div className={styles.rightcol}>
                <p>{ReactHtmlParser(this.props?.title?.description)}</p>
              </div>
            </div>
            <div className="section-margin">
              <h2 className={styles.boldtitle}>Open Positions:</h2>
            </div>
            <div className="section-margin mt-4">
              {this.props.openings?.map((data, index) => <Accordion key={`jobs_list_${index}`} head={<Header title={data.title} />} body={<CareerCard data={data} emailData={this.props.emailData} />} />)}
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}
export async function getStaticProps(context) {
  var headerData = await CareerHeaderData();
  var opening = await openingData();
  var careerTitle = await sectionTitle('career');
  var emailData = await sectionTitle('email');
  return {
    props: {
      headerData:headerData,
      openings:opening,
      title:careerTitle,
      emailData:emailData
    }
  }
}