import React from 'react';

import email from 'assets/icons/email.svg';
import fb from 'assets/icons/facebook.svg';
import twitter from 'assets/icons/twitter.svg';


import './styles.scss';

const Footer = () => (
  <div className="footer">
    <a href="mailto:eoh@ec.illinois.edu">
      <img src={email} alt="email" />
    </a>
    <a href="https://www.facebook.com/EngineeringOpenHouse/" target="_blank" rel="noopener noreferrer">
      <img src={fb} alt="Facebook" />
    </a>
    <a href="https://twitter.com/IllinoisEOH" target="_blank" rel="noopener noreferrer">
      <img src={twitter} alt="Twitter" />
    </a>
  </div>
);

export default Footer;
