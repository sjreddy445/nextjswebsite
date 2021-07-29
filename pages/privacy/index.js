import React, { Component } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { payload as PrivacyHeaderData } from '../../Payloads/Privacy/Header'
import InfoListCard from '../../Components/Cards/InfoListCard/InfoListCard'
import { payload as privacyPayload } from '../../Payloads/Privacy/PrivacyContent'
import Contact from '../../Components/ContactSect/Contact';
import styles from '../elapage/ElaPage.module.scss'
import { setNavColor } from '../../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import Api from '../../Config/Api'
import { pageTitle } from '../../Payloads/pageTitle/title';
export default class PrivacyPolicy extends Component {
  state = {
    headerData: {},
    privacyData: []
  }
  componentDidMount() {
    setNavColor("transparent-bg");
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Fade>
        <Head>
        <title>{pageTitle('privacy')}</title>
          <meta name="description" content="This Enterprise License Agreement (“ELA”) is a binding legal agreement between the software developer i.e. “EdGE” & its affiliates and the user of the software" />
        </Head>
        <div className={styles.elapage}>
          <HeaderBanner data={this.props.headerData} />
          <div className={"container-inner section-margin mt-5" + styles.infolisting}>
            {this.props?.privacyData?.map((data, index) => <InfoListCard key={index} data={data} index={index + 1} />)}
          </div>
          <div className={"section-padding xlLight-grey-bg " + styles.elafooter}>
            <Contact />
          </div>
        </div>
      </Fade>
    )
  }
}

export async function getServerSideProps(context) {
  var headerData = await PrivacyHeaderData();
  var privacyData = await privacyPayload();
  return {
    props: {headerData:headerData,privacyData:privacyData}
  }
}