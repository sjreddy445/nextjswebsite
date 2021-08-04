import React, { Component } from 'react';

class TextSect extends Component {
  render() {
  
    return (
      <div>
        <h4 className="text-lg mb-4 mt-2 font-weight-bold">
          {this.props?.title?.title}
        </h4>
        <h2 className="text-xl font-weight-bold">
        {this.props?.title?.description}
        </h2>
      </div>
    );
  }
}

export default TextSect;