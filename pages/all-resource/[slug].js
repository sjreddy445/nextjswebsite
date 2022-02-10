import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import { payload as BlogHeaderData } from '../../Payloads/Blog/Header'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { payload as blogType } from '../../Payloads/Blog/Blogs';
import Api from '../../Config/Api';
import BlogCard from '../../Components/CardList/BlogCard';
import BlogPodcast from '../../Components/CardList/BlogPodcast';
import BlogVideo from '../../Components/CardList/BlogVideo';
import { setNavColor } from '../../Components/TopNav/Utils'
import { withRouter } from 'next/router';
import Head from '../../Components/Metdata/head-1';
class resourceViewAll extends Component {

  constructor() {
    super();
    this.state = {
      activePage: 0,
      headerData: {}
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    setNavColor("transparent-bg text-white");
    this.scrollWindow()
  }

  scrollWindow = () => {
    window.scrollTo({
      top: 200,
      left: 0,
      behavior: 'smooth'
    })
  }

  componentDidMount() {
    this.handlePageChange(1);
    const { router: { pathname } } = this.props;
    Api.get(this.props.router?.query?.slug + "/count").then(({ data: totalItem }) => {
      this.setState({ ...this.state, ...{ totalItem } })
      // this.scrollWindow()
    });
  }
 
  handlePageChange(pageNumber) {
    this.setState({ ...this.state, activePage: pageNumber });

    Api.get(this.props.router?.query?.slug, { params: { _limit: 6, _start: 6 * (pageNumber - 1), _sort: "created_at:desc" } }).then(({ data: dataItems }) => {
      this.setState({ ...this.state, ...{ resouceItem: dataItems } })
    });
  }
  render() {
    var checkUrl = this.props?.router?.query?.slug;
    if (!this.state.resouceItem) {
      return (<p>Loading</p>);
    }
    return (
      <div>
        <div>
          <Head htitle={checkUrl} />
          <HeaderBanner data={this.props.headerData} />
        </div>
        <div className="mt-5 container-inner">
          <h3>All {this.props?.router?.params?.slug}</h3>
          {checkUrl?.includes('blogs') && <div className="row mt-4">
            {this.state?.resouceItem?.map(item => <BlogCard blog={item} key={item.id} {...this.props} />)}
          </div>}
          {checkUrl?.includes('podcast') && <div className="row mt-4">
            {this.state?.resouceItem?.map(item => <BlogPodcast podcast={item} key={item.id} {...this.props} />)}
          </div>}
          {checkUrl?.includes('video') && <div className="row mt-4">
            {this.state?.resouceItem?.map(item => <BlogVideo video={item} key={item.id} {...this.props} />)}
          </div>}
          {this.state?.totalItem ? <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={this.state.activePage}
            itemsCountPerPage={6}
            totalItemsCount={this.state.totalItem}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
          /> : ''}

        </div>
      </div>
    )
  }
}


export async function getStaticPaths() {
  var data = await blogType()
  const paths = data.map((user) => ({
    params: { slug: user.resourceUrl.toString().split('/')[1] },
  }))
  return { paths, fallback: false }
}



export async function getStaticProps(context) {
  var headerData = await BlogHeaderData();
  return {
    props: { headerData: headerData }
  }
}
export default withRouter(resourceViewAll)