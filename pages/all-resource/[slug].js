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
      headerData: {},
      duplicateData: []
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
    // const { router: { pathname } } = this.props;
    // Api.get(this.props.router?.query?.slug + "/count").then(({ data: totalItem }) => {
    // this.setState({ ...this.state, })
    this.setState({ ...this.state, totalItem: this.props.count, activePage: 1, resouceItem: this.props.data?.slice(0, 6), duplicateData: this.props.data })
    // this.scrollWindow()
    // });
    // this.handlePageChange(1);

  }

  handlePageChange(pageNumber) {
    
    let abc = [...this.state.duplicateData];
    let a= abc.splice((pageNumber - 1) * 6, 6);
    this.setState({ ...this.state, activePage: pageNumber, resouceItem: a });
    // Api.get(this.props.router?.query?.slug, { params: { _limit: 6, _start: 6 * (pageNumber - 1), _sort: "created_at:desc" } }).then(({ data: dataItems }) => {
    //   this.setState({ ...this.state, ...{ resouceItem: dataItems } })
    // });

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



export async function getStaticProps({ params }) {
  var headerData = await BlogHeaderData();
  var data = [];
  let count = await Api.get(params?.slug + "/count").then((res) => {
    return res.data;
  });
  let no = 0;
  if (count > 0) {
    no = Math.ceil(count / 6)
  }
  for (var i = 1; i <= no; i++) {
    let ds = await Api.get(params?.slug, { params: { _limit: 6, _start: 6 * (i - 1), _sort: "created_at:desc" } }).then((res) => {
      return res.data
    });
    data = [...data, ...ds]
  }

  return {
    props: { headerData: headerData, count: count, data: data }
  }
}
export default withRouter(resourceViewAll)