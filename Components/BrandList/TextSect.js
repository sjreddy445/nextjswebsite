import React, { Component } from 'react';

class TextSect extends Component {
  render() {
    let {data}= this.props
    return (
      <div>
        <h4 className="text-sm mb-4 mt-2 font-weight-bold">
          {data.mainTitle}
        </h4>
        <h2 className="text-xl font-weight-bold">
         {data.subTitle}
        </h2>
        <div className="text-sm mt-4 text-brand">
         {/* <b><a href="#" className="text-brand">VIEW CASE STUDIES</a></b> */}
        </div>
      </div>
    );
  }
}

export default TextSect;