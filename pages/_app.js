import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../Assets/css/_variable.scss'
import '../Assets/css/app.scss'
import '../Assets/css/icomoon.scss'
import '../Assets/css/responsive.scss'
import '../Assets/css/slick_overide.scss'
import '../Components/Accordion/Accordion.module.scss'
import '../Components/Awards/Awards.module.scss'
import '../Components/BrandList/BrandList.module.scss'
import '../Components/CardList/CardSect.scss'
import '../pages/careers/career.module.scss'
import './elapage/ElaPage.module.scss'
import '../Components/Cards/RatioCard/ratioCard.scss'
import '../Components/Cards/InfoListCard/InfoListCard.module.scss'
import '../Components/ContactSect/ContactSet.module.scss'
import '../Components/Footer/Footer.scss'
import '../Components/Footer/Footer.scss'
import "../Components/HeaderBanner/HeaderBanner.module.scss"
import '../Components/HomeStats/HomeStats.module.scss'
import '../Components/Leadership/Leadership.module.scss'
import '../Components/OurStory/OurStory.module.scss'
import '../Components/OurStory/StoryCard.module.scss'
import '../Components/ProductList/ProductList.module.scss'
import '../Components/ProductScreenShots/ProductScreenShots.module.scss'
import '../Components/ProductStats/ProductStats.module.scss'
import '../Components/ProductVideos/ProductVideos.module.scss'
import '../Components/ServiceBanner/ServiceBanner.module.scss'
import '../Components/SimpleSlider/SimpleSlider.module.scss'
import '../Components/SubHeader/SubHeader.module.scss'
import '../Components/SubMenu/submenu.module.scss'
import '../Components/Testimonials/testimonial.module.scss'
import '../Components/TopNav/TopNav.scss'
import '../Components/VerticalSlider/VerticalSlider.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../Components/Layout/Layout';
import ReactGa from 'react-ga'
import Api from "../Config/Api";
import { useEffect } from 'react';
import CookieConsent from "react-cookie-consent";
import { withRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGa.initialize('UA-35684919-1');
    ReactGa.pageview(window.location.pathname + window.location.search);

    Api.get("/blog-page-sections").then(({ data }) => {
      localStorage.setItem("blogPageSections", JSON.stringify(data));
    })
  })
  return (
    <Layout>
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="I Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B", margin: "0px" }}
        buttonStyle={{ color: "#4e503b", fontSize: "10px", margin: "10px" }}
        expires={150}
      >

        <span style={{ fontSize: "10px" }}>We use cookies to enhance the user experience.{" "}</span>
      </CookieConsent>
    </Layout>)
}

export default withRouter(MyApp)
