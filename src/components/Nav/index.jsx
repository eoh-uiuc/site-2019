import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from 'assets/logo-white.png';
import './styles.scss';

class Nav extends Component {
  render() {
    return (
      <nav id="site-nav">
        <Link to="/">
          <img src={Logo} alt="EOH Logo" />
        </Link>

        <div className="spacing" />

        <nav className="nav-links">
          <Link to="/register">Registration</Link>
          <Link to="/sponsor">Support Us</Link>
        </nav>
      </nav>
    );
  }
}

export default Nav;
