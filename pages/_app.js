import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../Assets/css/_variable.scss'
import '../Assets/css/app.scss'
import '../Assets/css/icomoon.scss'
import '../Assets/css/responsive.scss'
import '../Assets/css/slick_overide.scss'
import '../Components/Footer/Footer.scss'
import '../Components/TopNav/TopNav.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../Components/Layout/Layout';
import ReactGa from 'react-ga'
import Api from "../Config/Api";
import { useEffect } from 'react';
import CookieConsent from "react-cookie-consent";
import { withRouter } from 'next/router';
import tawkTo from "tawkto-react";
const tawkToPropertyId = '58ad6d83a8edb309faaeb727';
const tawkToKey = '695ff1767a3b24f28b0749d9657e4b9bdbf77951';

function MyApp({ Component, pageProps }, props) {
  useEffect(() => {
    ReactGa.initialize('UA-35684919-1');
    ReactGa.pageview(window.location.pathname + window.location.search);
    Api.get("/page-titles").then(({ data }) => {
      localStorage.setItem("pageTitle", JSON.stringify(data));
    })
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    window.addEventListener('load',
      function () {
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/607e9262f7ce1827093c1f0f/1f3n6nkhl';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      }
    );
  }, [])

  return (
    <Layout {...props}>
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="I Accept"
        enableDeclineButton
        onDecline={() => {
        }}
        declineButtonText="Reject"
        declineButtonStyle={{color: "white", fontSize: "12px", padding:6, margin: "10px", marginRight: 10 }}
        cookieName="myAwesomeCookieName2"
        SameSite="none"
        setDeclineCookie={true}
        cookieSecurity={true}
        style={{ background: "#2B373B", margin: "0px" }}
        buttonStyle={{ color: "#4e503b", fontSize: "12px", margin: "10px", marginRight: 100 }}
        expires={150}
      >
        <span style={{ fontSize: "10px" }}>We use cookies to enhance the user experience.{" "}</span>
      </CookieConsent>
    </Layout>)
}
export default withRouter(MyApp)