import React, { Component } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { payload as PrivacyHeaderData } from '../../Payloads/Privacy/Header'
import InfoListCard from '../../Components/Cards/InfoListCard/InfoListCard'
import { payload as ElaData } from '../../Payloads/Privacy/PrivacyContent'
import Contact from '../../Components/ContactSect/Contact';
import styles from '../elapage/ElaPage.module.scss'
import { setNavColor } from '../../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet'
import Api from '../../Config/Api'
export default class PrivacyPolicy extends Component {
  state = {
    headerData: {},
    privacyData: []
  }
  componentDidMount() {
    setNavColor("transparent-bg");
    window.scrollTo(0, 0)
    this.headerDataFunc();
    this.getContent();
  }
  headerDataFunc = async () => {
    var headerData = await PrivacyHeaderData();
    this.setState({ headerData: headerData })
  }
  getContent = async() => {
    var privacyData = await ElaData();
    this.setState({ privacyData: privacyData })
  }

  render() {
    return (
      <Fade>
        <Helmet>
          <title>Privacy Policy | Edge Networks</title>
          <meta name="description" content="This Enterprise License Agreement (“ELA”) is a binding legal agreement between the software developer i.e. “EdGE” & its affiliates and the user of the software" />
        </Helmet>
        <div className={styles.elapage}>
          <HeaderBanner data={this.state.headerData} />


          <div className={"container-inner section-margin " + styles.infolisting}>
            {this.state.privacyData.map((data, index) => <InfoListCard key={index} data={data} index={index + 1} />)}
          </div>
          <div className={"section-padding xlLight-grey-bg " + styles.elafooter}>
            <Contact />
          </div>
        </div>
      </Fade>
    )
  }
}
