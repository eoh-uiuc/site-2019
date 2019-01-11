import React, { Component } from 'react';

import InfoPane from 'components/InfoPane';

import exhibitingImage from 'assets/images/eoh-sign.jpg';
import teslaImage from 'assets/images/tesla-coil.jpeg';

import './styles.scss';

class Events extends Component {
  render() {
    return (
      <main className="events">
        <div className="content">
          <h1>Events</h1>
          <InfoPane
            image={exhibitingImage}
            time="Friday 8 am - 4 pm, Saturday 8 am - 3:30 pm"
            name="Exhibiting Hours"
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
            time="Friday 8 pm - 9 pm"
            name="Tesla Coil Concert"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
              pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
              id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
              felis. Suspendisse gravida ligula ut accumsan porta.
            </p>
          </InfoPane>
          <InfoPane
            image={exhibitingImage}
            time="Friday 8 am - 4 pm, Saturday 8 am - 3:30 pm"
            name="High School Showcase"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
              pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
              id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
              felis. Suspendisse gravida ligula ut accumsan porta.
            </p>
          </InfoPane>
          <InfoPane
            image={exhibitingImage}
            time="Friday 8 am - 4 pm, Saturday 8 am - 3:30 pm"
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
            time="Friday 8 am - 4 pm, Saturday 8 am - 3:30 pm"
            name="IEC & Discover"
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
        </div>
      </main>
    );
  }
}

export default Events;
