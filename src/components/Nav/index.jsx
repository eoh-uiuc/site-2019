import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from 'assets/logo-white.png';
import './styles.scss';

class Nav extends Component {
  render() {
    return (
      <nav id="site-nav">
        <img src={Logo} alt="EOH Logo" />

        <div className="spacing" />

        <nav className="nav-links">
          <Link to="/sponsor">Support Us</Link>
        </nav>
      </nav>
    );
  }
}

export default Nav;
