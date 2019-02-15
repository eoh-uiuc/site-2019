import React from 'react';

import Chevron from 'assets/logos/Chevron.png';
import Exelon from 'assets/logos/Exelon.png';
import Exxon from 'assets/logos/Exxon.png';
import Huawei from 'assets/logos/Huawei.png';
import JohnDeere from 'assets/logos/JohnDeere.png';
import Parker from 'assets/logos/Parker.jpg';
import PG from 'assets/logos/PG.png';
import RR from 'assets/logos/RollsRoyce.png';
import SDI from 'assets/logos/SDI.png';
import Walgreens from 'assets/logos/Walgreens.png';
import Watlow from 'assets/logos/Watlow.png';

import Logo from '../components/Logo';

const Sponsors = () => (
  <div className="sponsors-wrapper">
    <div className="sponsor-logos container">
      <h1>Sponsors</h1>
      <div className="logos">
        <Logo src={Chevron} alt="Chevron" href="https://www.chevron.com/" />
        <Logo long src={Exelon} alt="Exelon" href="http://www.exeloncorp.com/" />
        <Logo long src={Exxon} alt="Exxon" href="https://corporate.exxonmobil.com/" />
        <Logo src={Huawei} alt="Huawei" href="https://www.huawei.com/us/" />
        <Logo className="jd" src={JohnDeere} alt="John Deere" href="https://www.deere.com/en/index.html" />
        <Logo long src={Parker} alt="Parker Hannifin" href="https://www.parker.com" />
        <Logo src={PG} alt="Procter and Gamble" href="https://us.pg.com/" />
        <Logo className="rr" src={RR} alt="Rolls Royce" href="https://www.rolls-royce.com/" />
        <Logo long src={SDI} alt="Steel Dynamics" href="http://www.steeldynamics.com/" />
        <Logo long src={Walgreens} alt="Walgreens" href="https://www.walgreens.com/" />
        <Logo long src={Watlow} alt="Watlow" href="https://www.watlow.com/" />
      </div>
    </div>
  </div>
);

export default Sponsors;
