import React, { Component } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { payload as ELAHeaderData } from '../../Payloads/Ela/Header'
import InfoListCard from '../../Components/Cards/InfoListCard/InfoListCard'
import { payload as ElaData } from '../../Payloads/Ela/ElaContents'
import Contact from '../../Components/ContactSect/Contact';
import styles from './ElaPage.module.scss'
import { setNavColor } from '../../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet'
import Api from '../../Config/Api';

export default class ElaPage extends Component {
  state = {
    headerData: {},
    ela: []
  }
  componentDidMount() {
    setNavColor("transparent-bg");
    window.scrollTo(0, 0)
    this.headerDataFunc();
    this.getELA();
  }
  render() {
    return (
      <Fade>
        <Helmet>
          <title>ELA - Enterprise License Agreement is a legal agreement.</title>
          <meta name="description" content="This Enterprise License Agreement (“ELA”) is a binding legal agreement between the software developer i.e. “EdGE” & its affiliates and the user of the software" />
        </Helmet>
        <div className={styles.elapage}>
          <HeaderBanner data={this.props.headerData} />
          <div className={"container-inner " + styles.mt5}>
            <p className="text-xs text-line-height-1-6">
              This Enterprise License Agreement (“ELA”) is a binding legal agreement between the software developer i.e. “EdGE” & its affiliates and the user of the software i.e. customer. This ELA governs a customer’s and/or any third party usage of our application called HIREalchemy and the HIREalchemy Magnet Extension (‘Extension’). By installing, using, copying or distributing the application and the Extension, customers and their employees/agents/representatives hereby agree to the following terms and conditions on which EdGe has agreed to license the application and the Extension. If you DO NOT AGREE WITH ANY OF THE TERMS OF THIS ELA, DO NOT DOWNLOAD, INSTALL, OR USE THE APPLICATION.
              <br></br>
              <br></br>
              This ELA hereby incorporates by reference all terms, conditions, rules, policies, and guidelines on the site. Please refer the EdGE’s privacy policy (the “Privacy Policy”) at https://edgenetworks.in/privacy-policy/
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
export async function getServerSideProps(context) {
  var headerData = await ELAHeaderData();
  var data = await ElaData();
  return {
    props: {headerData:headerData,ela:data}
  }
}