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
          <h1>Events at EOH</h1>
          <InfoPane
            image={exhibitingImage}
            time="Friday 8 am - 4 pm, Saturday 8 am - 3:30 pm"
            name="Exhibiting Hours"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
            pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
            id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
            felis. Suspendisse gravida ligula ut accumsan porta.
          </InfoPane>
          <InfoPane
            image={teslaImage}
            time="Friday 8 pm - 9 pm"
            name="Tesla Coil Concert"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
            pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
            id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
            felis. Suspendisse gravida ligula ut accumsan porta.
          </InfoPane>
          <InfoPane
            image={exhibitingImage}
            time="Friday 8 am - 4 pm, Saturday 8 am - 3:30 pm"
            name="High School Showcase"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
            pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
            id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
            felis. Suspendisse gravida ligula ut accumsan porta.
          </InfoPane>
          <InfoPane
            image={exhibitingImage}
            time="Friday 8 am - 4 pm, Saturday 8 am - 3:30 pm"
            name="Startup Showcase"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
            pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
            id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
            felis. Suspendisse gravida ligula ut accumsan porta.
          </InfoPane>
          <InfoPane
            image={exhibitingImage}
            time="Friday 8 am - 4 pm, Saturday 8 am - 3:30 pm"
            name="Performances"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
            pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
            id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
            felis. Suspendisse gravida ligula ut accumsan porta.
          </InfoPane>
        </div>
      </main>
    );
  }
}

export default Events;
