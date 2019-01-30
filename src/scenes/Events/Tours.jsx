import React from 'react';

import InfoPane from 'components/InfoPane';

import teslaImage from 'assets/images/tesla-coil.jpeg';

const Tours = () => (
  <div className="content section">
    <h1>Tours</h1>
    <InfoPane
      image={teslaImage}
      time="Friday &amp; Saturday, 9 am - 4 pm"
      name="Vistor Tours"
      location="Departs from Bardeen Quad"
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
      time="Friday &amp; Saturday, 9:30 am - 4 pm"
      name="MRL Open House"
      location="Materials Research Lab"
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
      time="Friday &amp; Saturday, 9 am - 4 pm"
      name="NCSA Tours"
      location="NCSA building &amp; National Petascale Computing Facility"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros odio,
        pretium et arcu eu, laoreet dignissim tellus. Nulla bibendum vestibulum arcu
        id pharetra. Morbi ultrices dolor eget lacinia molestie. Morbi et bibendum
        felis. Suspendisse gravida ligula ut accumsan porta.
      </p>
    </InfoPane>
  </div>
);

export default Tours;
