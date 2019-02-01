import React, { Component } from 'react';

class Logo extends Component {
  render() {
    const { src, alt, long } = this.props;
    return (
      <div className={`logo ${ long ? 'long' : 'short' }`}>
        <img src={src} alt={alt} />
      </div>
    );
  }
}

export default Logo;
