import React, { Component } from 'react';

class TextSect extends Component {
  render() {
    let {data}= this.props
    return (
      <div>
        <p className="text-sm mb-3 mt-2 pl-2 font-weight-bold">
          {data?.mainTitle}
        </p>
        <div className="px-2">
          <p className="text-weight-500 text-xl"> {data?.subTitle} </p>
        </div>
      </div>
    );
  }
}

export default TextSect;