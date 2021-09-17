import React, { Component } from 'react';

class AwardText extends Component {
    render() {
        return (
            <div>
                <p className="text-lg mb-4 mt-2 font-weight-bold">
                    {this.props?.title?.title}
                </p>
                <p className="text-xl font-weight-bold">
                {this.props?.title?.description}
                </p>
            </div>
        );
    }
}

export default AwardText;