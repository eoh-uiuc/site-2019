import React from 'react';

import ShuttleIcon from 'assets/icons/bus.svg';

import GMap from './GMap';
import './styles.scss';

const Info = () => {
  return (
    <div className="info dark-page">
      <div className="container">
        <div className="intro">
          <h3>Engineering Open House 2019</h3>
          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu leo ac neque mollis
            dictum. Nulla ut vehicula enim, sodales gravida orci. Cras commodo est non libero
            vestibulum, vel imperdiet sem faucibus. Fusce gravida nibh in ex suscipit egestas. Proin
            sollicitudin aliquet odio, consectetur ornare urna ullamcorper et. Quisque tristique ipsum
            vitae mattis pulvinar. Integer eget urna venenatis, volutpat ligula eget, semper magna.
          </p>
        </div>

        <div className="map">
          <div className="legend">
            <div className="item">
              <span className="exhibit area" />
              <p>Exhibiting Areas</p>
            </div>
            <div className="item">
              <span className="parking area" />
              <p>Parking Lots</p>
            </div>
            <div className="item">
              <span className="shuttle-route" />
              <p>Shuttle Route</p>
            </div>
            <div className="item">
              <img className="shuttle-icon" src={ShuttleIcon} alt="" />
              <p>Shuttle Stops</p>
            </div>
          </div>

          <GMap />

          <p>Shuttle moves in a clockwise direction</p>
        </div>

        <div className="transportation">
          <div className="header-wrapper">
            <h1>Transportation</h1>
          </div>

          <div className="qa-wrapper">
            <div className="qa">
              <h6>How can I commute around campus during EOH?</h6>
              <p>
                There is a shuttle service that will be provided on Friday and Saturday from 8am-5:30pm
                that runs from lot E-14 to North Quad/Engineering Campus.
              </p>
            </div>

            <div className="qa">
              <h6>Where are the shuttle stops located?</h6>

              <p>Shuttle stops are located:</p>
              <ul>
                <li>Near Talbot Laboratory on Wright St</li>
                <li>Near Lot B-22 on Clark St.</li>
                <li>Near Loomis Laboratory on Goodwin St.</li>
              </ul>
              <p>The stops will be indicated by signs and are located on the map.</p>
            </div>

            <div className="qa">
              <h6>Where can I park?</h6>

              <p>
                On Friday, March 8th, you can park for free at B-22, E-14, B-4, E-24 or in any covered
                parking garage on campus. You may also park on street parking assuming you pay for the
                meters. On Saturday, March 9th, you may park in any University lot for free as parking
                is not enforced on the weekends.
              </p>
            </div>

            <div className="qa">
              <h6>I am arriving in a school bus with my class, where should the bus drop off?</h6>

              <p>
                School buses should drop of students and teachers at the designated EOH stops on
                Goodwin Ave (marked by signs).  The bus drivers should then proceed to lot E-14 to park
                the bus and take the shuttle to Engineering Campus.
              </p>
            </div>

            <div className="qa">
              <h6>How far of a walk is it to EOH from the shuttle stops and lots?</h6>

              <p>
                All the lots mentioned above except for lot E-14 are within a block of Engineering
                Campus. Lot E-14 is about 1.5 miles from center of EOH action, which is why we provide
                the shuttle.
              </p>
            </div>

            <div className="qa">
              <h6>Do I need to pay for parking?</h6>

              <p>
                Parking is free in the lots mentioned above but you will have to pay for metered
                street parking.
              </p>
            </div>

            <div className="qa">
              <h6>Will there be any streets that are closed off or limited access?</h6>

              <p>
                Springfield Avenue will be closed from Wright St to Matthews Ave. Matthews Ave will
                also be closed from Green St to Springfield Ave. These street closures will be enforced
                from 7am to 5pm. Only corporate sponsors, judging, emergency vehicles, and food trucks
                may access these routes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
