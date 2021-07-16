import React, { Component } from 'react';
import styles from './banner.module.scss'
import { Button } from 'reactstrap';
import Scroll  from 'react-scroll'
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
class TextSect extends Component {
  constructor(props) {
    super(props);
    this.state = { titleImg: "" };
  }

  loadImage = title => {
    let name = title
    let productImg
    import(`../../Assets/images/Products/${name}.svg`).then(image => {
      this.setState({
        titleImg: image.default.src
      });
    });
    return productImg
  };

  scrollToContact=()=>{
    let scroller = Scroll.scroller
    scroller.scrollTo('contactWidget', {
      duration: 800,
      delay: 0,
      offset: -80,
      smooth: 'easeInOutQuart' 
    })
  }

  componentDidMount() {
    if (this.props.data?.titleImg) {
      // this.loadImage(this.props.data.titleImg)
    }
  }
  render() {
    return (
      <>
        <div className={styles.headerbanner} >
          <div className={styles.headerTitle}>
            {!this.props.data?.titleImg ?
              <>
                <h1 className="text-xxl font-weight-bold">  {this.props.data?.mainTitle1}</h1>
                <h1 className="text-xxl font-weight-bold">{this.props.data?.mainTitle2}</h1>
              </>
              :
              <img src={AddCmsImgBaseUrl(this.props.data?.titleImg.url)} alt={this.props.data?.titleImg}  className="img-fluid" />
            }
          </div>
          <div className="mt-4">
            <h4 className="text-lg text-line-height-1-6 text-weight-400">{this.props.data?.subtitle}</h4>
          </div>
          {!this.props.data?.hideDemoBtn ?
            <div className="mt-4">
              <Button color="primary" onClick={this.scrollToContact}>REQUEST DEMO</Button>
            </div>
            :
            ""
          }
        </div>
      </>
    );
  }
}

export default TextSect;