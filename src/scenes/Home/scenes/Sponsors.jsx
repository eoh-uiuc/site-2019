import React from 'react';

import Chevron from 'assets/logos/Chevron.png';
import Huawei from 'assets/logos/Huawei.png';
import JohnDeere from 'assets/logos/JohnDeere.png';
import Parker from 'assets/logos/Parker.jpg';
import SDI from 'assets/logos/SDI.png';
import Walgreens from 'assets/logos/Walgreens.png';
import Watlow from 'assets/logos/Watlow.png';

import Logo from '../components/Logo';

const Sponsors = () => (
  <div className="sponsors-wrapper">
    <div className="sponsor-logos container">
      <h1>Sponsors</h1>
      <div className="logos">
        <Logo src={Chevron} alt="Chevron" />
        <Logo src={Huawei} alt="Huawei" />
        <Logo src={JohnDeere} alt="John Deere" />
        <Logo long src={Parker} alt="Parker Hannifin" />
        <Logo long src={SDI} alt="Steel Dynamics" />
        <Logo long src={Walgreens} alt="Walgreens" />
        <Logo long src={Watlow} alt="Watlow" />
      </div>
    </div>
  </div>
);

export default Sponsors;
