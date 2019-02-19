import React from 'react';

import Ameren from 'assets/logos/Ameren.png';
import Beckman from 'assets/logos/Beckman.png';
import Caterpillar from 'assets/logos/Caterpillar.png';
import CERL from 'assets/logos/CERL.png';
import Chevron from 'assets/logos/Chevron.png';
import Cummins from 'assets/logos/Cummins.png';
import Exelon from 'assets/logos/Exelon.png';
import Exxon from 'assets/logos/Exxon.png';
import Ford from 'assets/logos/Ford.png';
import Huawei from 'assets/logos/Huawei.png';
import JohnDeere from 'assets/logos/JohnDeere.png';
import NCSA from 'assets/logos/NCSA.png';
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
        <div className="l1">
          <Logo className="rr" src={RR} alt="Rolls Royce" href="https://www.rolls-royce.com/" />
          <Logo src={Chevron} alt="Chevron" href="https://www.chevron.com/" />
        </div>

        <div className="l2">
          <Logo src={Ford} alt="Ford" href="https://www.ford.com/" />
          <Logo src={JohnDeere} alt="John Deere" href="https://www.deere.com/en/index.html" />
          <Logo long src={Walgreens} alt="Walgreens" href="https://www.walgreens.com/" />
          <Logo long src={Exelon} alt="Exelon" href="http://www.exeloncorp.com/" />
          <Logo className="cummins" src={Cummins} alt="Cummins" href="https://www.cummins.com/" />
        </div>

        <div className="l3">
          <Logo long src={Caterpillar} alt="Caterpillar" href="https://www.caterpillar.com/" />
          <Logo long src={Exxon} alt="Exxon" href="https://corporate.exxonmobil.com/" />
          <Logo src={Huawei} alt="Huawei" href="https://www.huawei.com/us/" />
          <Logo long src={Watlow} alt="Watlow" href="https://www.watlow.com/" />
          <Logo src={PG} alt="Procter and Gamble" href="https://us.pg.com/" />
          <Logo long src={Ameren} alt="Ameren" href="https://www.ameren.com/" />
          <Logo long src={Parker} alt="Parker Hannifin" href="https://www.parker.com" />
          <Logo src={CERL} alt="CERL" href="https://www.erdc.usace.army.mil/Locations/CERL/" />
          <Logo long src={SDI} alt="Steel Dynamics" href="http://www.steeldynamics.com/" />
        </div>

        <div className="l4">
          <Logo src={NCSA} alt="National Center for Supercomputing Applications" href="http://www.ncsa.illinois.edu/" />
          <Logo long src={Beckman} alt="Beckman Institute" href="https://beckman.illinois.edu/" />
        </div>
      </div>
    </div>
  </div>
);

export default Sponsors;
