import React, { Component } from 'react';

import Logo from 'assets/logo-white.png';
import './styles.scss';

class Nav extends Component {
  render() {
    return (
      <nav id="site-nav">
        <img src={Logo} alt="EOH Logo" />
      </nav>
    );
  }
}

export default Nav;
