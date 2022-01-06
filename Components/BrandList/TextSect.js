import React, { Component } from 'react';

class TextSect extends Component {
  render() {
    let {data}= this.props
    return (
      <div>
        <p className="text-sm mb-4 mt-2 font-weight-bold">
        {this.props?.title?.description}
        </p>
        <p className="text-xl font-weight-bold">
        {this.props?.title?.description}
        </p>
        <div className="text-sm mt-4 text-brand">
         {/* <b><a href="#" className="text-brand">VIEW CASE STUDIES</a></b> */}
        </div>
      </div>
    );
  }
}

export default TextSect;