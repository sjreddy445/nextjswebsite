import React, { Component } from 'react';

class TextSect extends Component {
  render() {
    let {data}= this.props
    return (
      <div>
        <h4 className="text-sm mb-3 mt-2 pl-2 font-weight-bold">
          {data.mainTitle}
        </h4>
        <div className="px-2">
          <h2 className="text-weight-500 text-xl"> {data.subTitle} </h2>
        </div>
      </div>
    );
  }
}

export default TextSect;