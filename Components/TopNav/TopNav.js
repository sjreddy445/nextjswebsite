import React, { Component } from 'react';
import NavLink from 'next/link';
import { withRouter, Router } from 'next/router'
import { event } from "../../Utils/Utils";
// import "./TopNav.scss";
import { DropdownItem, NavItem, UncontrolledDropdown } from 'reactstrap';
import Scroll from 'react-scroll'
import Head from '../Metdata/head'
import { payload as TopBanner } from '../../Payloads/TopBanner/topbanner'

class TopNav extends Component {

  constructor(props) {
    super();
    this.state = {
      mobileMenuActive: false,
      bgClass: "",
      TopContainer: {}
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.hideMobileMenu = this.hideMobileMenu.bind(this);
    this.scrollDiv = React.createRef();
  }

  componentDidMount() {
    const { router: { pathname } } = this.props;
    if (pathname === "/blog") {
      this.setState({ bgClass: 'transparent-bg text-white' });
    }
    this.TopDataFunc();
    event.on("setNavColor", (data) => {
      this.setState({ ...this.state, bgClass: data })
    });
    this.setState({ ...this.state, bgState: 0 })
    window.addEventListener("scroll", () => {
      if (this.state.bgState === 0 && window.pageYOffset > 100) {
        this.setState({ ...this.state, bgState: 1 })
      } else if (this.state.bgState === 1 && window.pageYOffset <= 100) {
        this.setState({ ...this.state, bgState: 0 })
      }
    })
  }


  TopDataFunc = async () => {
    var topContainer = await TopBanner();
    this.setState({ TopContainer: topContainer })
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive
    })
  }

  hideMobileMenu() {
    this.setState({
      mobileMenuActive: false
    })
  }



  scrollToContact = () => {
    let scroller = Scroll.scroller
    scroller.scrollTo('contactWidget', {
      duration: 800,
      delay: 0,
      offset: -80,
      smooth: 'easeInOutQuart'
    })
  }

  handleNavigate = () => {
    const { router: { pathname } } = this.props;
    if (this.state.TopContainer.isContact) {
      if (pathname === '/' || pathname.includes('/products')) {
        this.scrollToContact();
      } else {
        this.props.router.push(this.state.TopContainer.redirectTo)
      }
    }
    else {
      this.props.router.push(this.state.TopContainer.redirectTo)
    }
  };

  render() {
    return (
      <>
        {/* <Head /> */}
        <div className="text-center" className="adv">
          <p onClick={() => { this.handleNavigate() }} className={`link-no-decor text-xs top-bar${this.state.mobileMenuActive ? ' zindex' : ''}`}>
            <strong style={{ color: 'black' }}>{this.state.TopContainer.strongText}</strong > {this.state.TopContainer.normalText}
          </p>
        </div>
        <div className={`${this.state.bgClass} ${this.state.bgState === 1 ? 'scrolled' : ''} top-nav`} id="topNav">
          <div className="d-flex justify-content-between align-items-center mt-3">
            <NavLink className="link-no-decor" href="/">
              <i style={{ cursor: 'pointer' }} className="icon-edge_logo edge-logo"></i>
            </NavLink>
            <div>
              <UncontrolledDropdown>
                <button className="mobile-hamburger" onClick={this.toggleMobileMenu}><i className="icon-menu"></i></button>
                <div className={`back-drop ${this.state.mobileMenuActive ? "active" : ''}`} onClick={this.hideMobileMenu}></div>
                <ul className={`top-menu  ${this.state.mobileMenuActive ? "active" : ''}`} onClick={this.hideMobileMenu}>
                  <li className="has-sub-menu nav-item">
                    <a className="link-no-decor nav-link" href="/#">Products <i className="arrow-down icon-chevron-down"></i></a>
                    <ul className="sub-menu dropdown-menu ">

                      <li>
                        <DropdownItem>
                          <NavLink activeClassName="selected" href="/products/pathfinder" ><a className="link-no-decor">Pathfinder <i className="mobile-only icon-chevron-right"></i></a></NavLink>
                        </DropdownItem>
                      </li>
                      <DropdownItem divider></DropdownItem>
                      <li>
                        <DropdownItem>
                          <NavLink activeClassName="selected" href="/products/mobility" ><a className="link-no-decor"> Mobility<i className="mobile-only icon-chevron-right"></i> </a></NavLink>
                        </DropdownItem>
                      </li>
                      <DropdownItem divider></DropdownItem>
                      <li>
                        <DropdownItem>
                          <NavLink activeClassName="selected" href="/products/recruit"  ><a className="link-no-decor">Recruit <i className="mobile-only icon-chevron-right"></i></a></NavLink>
                        </DropdownItem>
                      </li>
                    </ul>
                  </li>
                  <NavItem><NavLink activeClassName="selected" href="/blog"><a className="link-no-decor">Blog & Resources <i className="mobile-only icon-chevron-right"></i></a></NavLink></NavItem>
                  <NavItem><NavLink activeClassName="selected" href="/integrations"><a className="link-no-decor">Integrations <i className="mobile-only icon-chevron-right"></i></a></NavLink></NavItem>
                  <NavItem><NavLink activeClassName="selected" href="/contact"><a className="link-no-decor">Contact <i className="mobile-only icon-chevron-right"></i></a></NavLink></NavItem>
                  <NavItem><NavLink activeClassName="selected" href="/careers" ><a className="link-no-decor">Careers <i className="mobile-only icon-chevron-right"></i></a></NavLink></NavItem>
                  <NavItem><NavLink activeClassName="selected" href="/about"><a className="link-no-decor">About Us <i className="mobile-only icon-chevron-right"></i></a></NavLink></NavItem>
                </ul>
              </UncontrolledDropdown>
            </div>

          </div >
        </div >
      </>
    )
  }
}

export default withRouter(TopNav);