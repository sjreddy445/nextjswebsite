import React, { Component } from 'react';
import { payload as CareerHeaderData } from '../../Payloads/Careers/Header.js'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import CareerCard from "./CareerCard";
import Accordion from "../../Components/Accordion/Accordion";
import Head from "./Head";
import Fade from 'react-reveal/Fade';
import { setNavColor } from '../../Components/TopNav/Utils'
import Openings from "../../Payloads/Careers/Openings"
import styles from "./career.module.scss";
import { Helmet } from 'react-helmet'


export default class Careers extends Component {
  state={
    headerData:{}
  }
  componentDidMount() {
    setNavColor("transparent-bg");
    window.scrollTo(0, 0)
    this.headerDataFunc();
  }

  headerDataFunc = async () => {
    var headerData = await CareerHeaderData();
    this.setState({ headerData: headerData })
  }
  render() {
    return (
      <div className={styles.careerpage}>
        <Helmet>
          <title>getEdGE - Career Path Planning and Development | Career Path Tools</title>
          <meta name="description" content="getEdGE is focused on career path planning and development for various industries. Do contact us with your best job from the list!" />
        </Helmet>
        <Fade>
          <div>
            <HeaderBanner data={this.state.headerData} />
          </div>
          <div className="container-inner">
            <div className={"section-margin "+ styles.aboutedge}>
              <div className={styles.leftcol}>
                <h2 className={styles.boldtitle}>About Edge</h2>
              </div>
              <div className={styles.rightcol}>
                <p><b>EDGE</b> is a leading skill development and technology solutions provider based in Bangalore, India. Passionate about improving the quality, value and nature of skill development system and making it easily accessible across India, our trump card lies in our ability to use technology and services to identify gaps, and fill those with skills that empower the youth. We excel in Analysis of Big Data, Artificial Intelligence, and Predictive Analysis. Our intelligent apps, tools, services and solutions are designed to accelerate, enhance, improve, and influence growth, trends and efficiency of businesses and create an eco-system based on skills. We build solutions for today and tomorrow’s challenges. The machines of tomorrow will have a revolutionary impact on business and it will have its impact on services ranging from airlines to hospitals, energy to disaster management.</p>
              </div>
            </div>
            <div className="section-margin">
              <h2 className={styles.boldtitle}>Open Positions:</h2>
            </div>
            <div className="section-margin mt-4">
              {Openings.map((data, index) => <Accordion key={`jobs_list_${index}`} head={<Head title={data.title} />} body={<CareerCard data={data} />} />)}
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}