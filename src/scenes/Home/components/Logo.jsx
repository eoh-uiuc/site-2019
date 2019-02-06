import React, { Component } from 'react';

class Logo extends Component {
  render() {
    const { src, alt, long, className } = this.props;
    let cn = `logo ${ long ? 'long' : 'short' }`;
    if (className) {
      cn += ' ' + className;
    }
    return (
      <div className={cn}>
        <img src={src} alt={alt} />
      </div>
    );
  }
}

export default Logo;
