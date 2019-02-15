import React, { Component } from 'react';

class Logo extends Component {
  render() {
    const { src, alt, long, className, href } = this.props;
    let cn = `logo ${ long ? 'long' : 'short' }`;
    if (className) {
      cn += ' ' + className;
    }
    return (
      <div className={cn}>
        <a href={href}>
          <img src={src} alt={alt} />
        </a>
      </div>
    );
  }
}

export default Logo;
