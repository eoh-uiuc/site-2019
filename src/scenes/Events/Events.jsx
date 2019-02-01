import React from 'react';

import InfoPane from 'components/InfoPane';

import exhibitingImage from 'assets/images/eoh-sign.jpg';
import teslaImage from 'assets/images/tesla-coil.jpeg';

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
      image={exhibitingImage}
      time="Friday &amp; Saturday, 9 am - 4 pm"
      name="Startup Showcase"
    >
      <p>
        Startup Showcase is an exhibit at EOH that presents startup companies. These are
        the groups that have spent countless hours developing their own ideas into a product
        and furthermore into a company.
      </p>
      <br />
      <p>
        They will be demonstrating their unique ideas and showing how they are working
        towards a better and brighter future.
      </p>
      <br />
      <p>
        Startup Showcase is a second year exhibit as there has been a rise in startup ideas
        in the Urbana-Champaign area. This is due to the flourishing engineering and business
        programs here at the University of Illinois.
      </p>
    </InfoPane>
    <InfoPane
      image={exhibitingImage}
      time="Friday &amp; Saturday, 9 am - 4 pm"
      name="IEC &amp; Discover"
      location="Engineering Hall"
    >
      <p>
        IEC and Discover provide a way to outreach to younger children and students
        by giving them opportunity to engage in engineering exhibits! IEC will feature
        four mini-exhibits including chromatography, strawberry DNA extraction, a team
        drawing, talking, and building activity, and a simple sail car. Discover gives
        visitors a guide to enjoying their EOH experience. This year, Discover will
        feature a BINGO card and visitors can complete their card by visiting certain
        Discover exhibits. When they visit these exhibits, they will be awarded a sticker.
        Discover provides visitors a great way to engage with exhibits and explore various
        departments of engineering.
      </p>
    </InfoPane>
    <InfoPane
      image={teslaImage}
      time="Friday, 12 pm - 2 pm | Saturday, 11 am -  2:30 pm"
      name="Entertainment"
      location="Lawn North of Talbot"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
        pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
        id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
        felis. Suspendisse gravida ligula ut accumsan porta.
      </p>
    </InfoPane>
    <InfoPane
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
    </InfoPane>
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
    <InfoPane
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
    </InfoPane>
    <InfoPane
      image={teslaImage}
      time="Friday, 2 pm - 3:30 pm"
      name="Alumni Welcome"
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
  </div>
);

export default EventSection;
