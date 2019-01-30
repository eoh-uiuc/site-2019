import React from 'react';

import InfoPane from 'components/InfoPane';

import teslaImage from 'assets/images/tesla-coil.jpeg';

const SpecialExhibits = () => (
  <div className="content section">
    <h1>Special Exhibits</h1>
    <InfoPane
      image={teslaImage}
      time="Friday &amp; Saturday, 9 am - 4 am"
      name="Majors Fair"
      location="DCL Basement"
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
      time="Friday &amp; Saturday, 10 am, 11:30 am, 1 pm, 2:30 pm"
      name="Concrete Crusher"
      location="Talbot Lab Basement"
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
    </InfoPane>
  </div>
);

export default SpecialExhibits;
