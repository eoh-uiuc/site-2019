import React from 'react';

import InfoPane from 'components/InfoPane';

import exhibitingImage from 'assets/images/eoh-sign.jpg';
import startupImage from 'assets/images/startup_showcase.jpg';
import teslaImage from 'assets/images/tesla-coil.jpeg';
import alumniImage from 'assets/images/Alumni.jpg';
import discoverImage from 'assets/images/Discover.jpg';
import robobrawlImage from 'assets/images/Robobrawl.jpg';

const EventSection = () => (
  <div className="content section">
    <h1>Events</h1>
    <InfoPane
      image={exhibitingImage}
      time="Friday &amp; Saturday, 9 am - 4 pm"
      name="Exhibiting Hours"
      location="Various Engineering Buildings"
    >
      <p>
        Interactive and exciting exhibits being made and run by students across campus from
        several majors surrouding topics that Dare to Defy in their field.
      </p>
    </InfoPane>
    <InfoPane
      image={startupImage}
      time="Friday, 8 am - 4 pm | Saturday, 8 am - 3:30 pm"
      name="Startup Showcase"
      location="Siebel Center Atrium"
    >
      <p>
        The Startup Showcase is a third-year exhibit that presents startup companies in the
        Champaign-Urbana area flourishing from the engineering and business programs here
        at the University of Illinois. These are groups that have spent countless hours
        developing their own ideas into a product and furthermore into a company. They will
        be demonstrating their unique ideas and showing how they are working towards a
        better and brighter future.
      </p>
    </InfoPane>
    <InfoPane
      image={discoverImage}
      time="Friday &amp; Saturday, 9 am - 4 pm"
      name="IEC &amp; Discover"
      location="Engineering Hall"
    >
      <p>
        IEC (Illini Engineering Challenge) and Discover provide a way to outreach
        to younger children and students by giving them opportunity to engage in
        engineering exhibits!
      </p>
      <br />
      <p>
        IEC will feature four mini-exhibits including chromatography, strawberry DNA
        extraction, a team drawing, talking, and building activity, and a simple sail car.
      </p>
      <br />
      <p>
        Discover gives
        visitors a guide to enjoying their EOH experience. This year, Discover will
        feature a BINGO card and visitors can complete their card by visiting certain
        Discover exhibits. When they visit these exhibits, they will be awarded a sticker.
        Discover provides visitors a great way to engage with exhibits and explore various
        departments of engineering.
      </p>
      <br />
      <p>
        Pick up your BINGO card at the EOH tent on Bardeen Quad!
      </p>
    </InfoPane>
    {/* <InfoPane
      image={teslaImage}
      time="Friday, 12 pm - 2 pm | Saturday, 11 am -  2:30 pm"
      name="Entertainment"
      location="Lawn North of Talbot Lab"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
        pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
        id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
        felis. Suspendisse gravida ligula ut accumsan porta.
      </p>
    </InfoPane> */}
    {/* <InfoPane
      image={teslaImage}
      time="Friday, 5 pm"
      name="Keynote Speaker"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
        pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
        id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
        felis. Suspendisse gravida ligula ut accumsan porta.
      </p>
    </InfoPane> */}
    <InfoPane
      image={teslaImage}
      time="Friday, 7:30 pm"
      name="Tesla Coil Concert"
      location="Bardeen Quad"
    >
      <p>
        Get excited for the annual Tesla Coil Concert! With some new tunes, let's
        rock it out engineering-style. 
      </p>
    </InfoPane>
    {/* <InfoPane
      image={teslaImage}
      time="Friday &amp; Saturday, 11 am - 2 pm"
      name="Speaker Series"
      location="Everitt Lab"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
        pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
        id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
        felis. Suspendisse gravida ligula ut accumsan porta.
      </p>
    </InfoPane> */}
    <InfoPane
      image={alumniImage}
      time="Friday, 2 pm - 3:30 pm"
      name="EOH Alumni Welcome"
      location="North Talbot Lawn"
    >
      <p>
        Welcome Alumni! We are excited to have you re-join us on campus for Engineering
        Open House 2019.
      </p>
      <br />
      <p>
        We invite you to take a break from visiting the exciting exhibits and competitions
        throughout the day at the alumni events Friday and Saturday! There will be
        refreshments and a raffle. Future Illini are more than welcome to attend!
      </p>
    </InfoPane>
    {/* <InfoPane
      image={teslaImage}
      time="Friday &amp; Saturday, 10 am - 3 pm"
      name="Alumni Welcome Center"
      location="Engineering Hall, 3rd Floor"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
        pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
        id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
        felis. Suspendisse gravida ligula ut accumsan porta.
      </p>
    </InfoPane> */}
    <InfoPane
      image={exhibitingImage}
      time="Friday &amp; Saturday, 9 am - 12 pm"
      name="Majors Fair"
      location="Digital Computer Lab Basement"
    >
      <p>
        The majors fair is a great way to learn about all the different engineering
        majors we offer here at Illinois. Come check us out at 3-5pm each day to talk
        with students about what they love about their major. There will also be
        handouts at each booth!
      </p>
    </InfoPane>
    <InfoPane
      image={robobrawlImage}
      time="Friday, 9 am - 4 pm | Saturday, 9 am - 3 pm"
      name="Robobrawl"
      location=""
    >
      <p>
        Do you want to see some battle-bots! Do you want to see some mass destruction!
        Welcome to 2019 Robobrawl! 
      </p>
      <br />
      <p>
        Robobrawl is an annual combat robotics event that takes place each year during
        the Engineering Open House on the University of Illinois campus. The event
        consists of a double elimination tournament over the two days of Engineering
        Open House where each team battles for dominance. The current format consists
        of 30 pound combat robots fighting in a 16′ x 16′ arena.
      </p>
      <br />
      <p>
        Find out more at <a href="http://robobrawl.illinois.edu">robobrawl.illinois.edu</a>
      </p>
    </InfoPane>
  </div>
);

export default EventSection;
