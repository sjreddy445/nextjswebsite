import React, { Component } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { payload as ELAHeaderData } from '../../Payloads/Ela/Header'
import InfoListCard from '../../Components/Cards/InfoListCard/InfoListCard'
import { payload as ElaData } from '../../Payloads/Ela/ElaContents'
import { payload as ElaTitle } from '../../Payloads/sectionTitle/title'
import Contact from '../../Components/ContactSect/Contact';
import styles from './ElaPage.module.scss'
import { setNavColor } from '../../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import Api from '../../Config/Api';
import { pageTitle } from '../../Payloads/pageTitle/title';
import ReactHtmlParser from 'react-html-parser';
export default class ElaPage extends Component {
  state = {
    headerData: {},
    ela: []
  }
  componentDidMount() {
    setNavColor("transparent-bg");
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fade>
        <Head>
          <title>{pageTitle('ela')}</title>
          <meta name="description" content="This Enterprise License Agreement (“ELA”) is a binding legal agreement between the software developer i.e. “EdGE” & its affiliates and the user of the software" />
        </Head>
        <div className={styles.elapage}>
          <HeaderBanner data={this.props.headerData} />
          <div className={"container-inner " + styles.mt5}>
            <p className="text-xs text-line-height-1-6">
              {ReactHtmlParser(this.props?.description?.description)}
            </p>
          </div>

          <div className={"container-inner " + styles.infolisting}>
            {this.props?.ela?.map((data, index) => <InfoListCard key={index} data={data} index={index + 1} />)}
          </div>
          <div className={"section-padding xlLight-grey-bg " + styles.elafooter}>
            <Contact />
          </div>
        </div>
      </Fade>
    )
  }
}
export async function getStaticProps(context) {
  var headerData = await ELAHeaderData();
  var data = await ElaData();
  var description = await ElaTitle('ela');
  return {
    props: {
      headerData: headerData,
      ela: data,
      description: description
    }
  }
}