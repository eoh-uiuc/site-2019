import React from 'react';

import InfoPane from 'components/InfoPane';

import teslaImage from 'assets/images/tesla-coil.jpeg';
import mrdcImage from 'assets/images/MRDC.jpg';
import msdcImage from 'assets/images/MSDC.jpg';

const Competitions = () => (
  <div className="content section">
    <h1>Competitions</h1>
    <InfoPane
      image={mrdcImage}
      time="Friday, 9 am - 4 pm | Saturday, 9 am - 3 pm"
      name="MRDC"
      location="Kenney Gym Annex"
    >
      <p>
        This student-run annual robotics competition lasts two days and features great
        ingenuity displayed by all participating teams. This competition started in 1987,
        making it one of the oldest continuing robotics competitions in America, predating
        both Battlebots and FIRST Robotics by several years.
      </p>
      <br />
      <p>
        The course involves the traversal of various obstacles to obtain game pieces.
        These game pieces will be rolled, thrown, or dropped into their respective goals,
        in order to score points. Each year there is a plethora of robot types, ranging
        from wheeled and manually-controlled robots, to autonomous robots and quadcopters.
        The arena is a raised platform with several different tiers. Obstacles can include
        moats, tunnels, and massive teeter totters. At the end of a competition there is an
        optional demolition round, in which robots can obliterate each other in a free for
        all frenzy to the last robot moving.
      </p>
    </InfoPane>
    <InfoPane
      image={teslaImage}
      time="Friday, 8:30 am - 2 pm"
      name="HSDC"
      location="ECEB"
    >
      <p>
        The High School Design Competition is a competiton for High Schoolers to show off
        the Rube Goldberg contraptions they have been designing and building. This year's
        competition involves having these students create a contraption which puts money
        in a puggy bank. 14 teams from the surrounding area will be competing for the top
        spot to qualify for the national competition.
      </p>
    </InfoPane>
    <InfoPane
      image={msdcImage}
      time="Saturday, 9 am - 2 pm"
      name="MSDC"
      location="ECEB"
    >
      <p>
        The Middle School Design Competition offers 6th through 8th graders an opportunity
        to engineer their own projects through a prepared design challenge. This year,
        the challenge is to build a a mousetrap car! Teams will compete to have the
        fastest car over a given distance. Contests have to apply engineering principles
        combined with creativity to compete for the best design. Come and check it out!
      </p>
    </InfoPane>
  </div>
);

export default Competitions;
