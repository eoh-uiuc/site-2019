import React, { Component } from 'react';

import EventSection from './Events';
import Competitions from './Competitions';
import Tours from './Tours';
import SpecialExhibits from './SpecialExhibits';
import './styles.scss';

class Events extends Component {
  constructor() {
    super();

    this.state = {
      active: 0,
    };

    this.eventRef = React.createRef();
    this.compRef = React.createRef();
    this.toursRef = React.createRef();
    this.specRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { scrollY } = window;

    if (scrollY < this.compRef.current.offsetTop - 230) {
      this.setState({ active: 0 });
    } else if (scrollY < this.toursRef.current.offsetTop - 230) {
      this.setState({ active: 1 });
    } else if (scrollY < this.specRef.current.offsetTop - 230) {
      this.setState({ active: 2 });
    } else {
      this.setState({ active: 3 });
    }
  }

  handleClick = (ref) => () => {
    window.scroll({ top: ref.current.offsetTop - 70, behavior: 'smooth' });
  }

  render() {
    const { active } = this.state;
    console.log(active);

    return (
      <main className="events-container">
        <div className="events-nav">
          <a
            onClick={this.handleClick(this.eventRef)}
            className={active === 0 ? 'active' : ''}
            href="#events"
          >
            Events
          </a>
          <a
            onClick={this.handleClick(this.compRef)}
            className={active === 1 ? 'active' : ''}
            href="#competitions"
          >
            Competition
          </a>
          <a
            onClick={this.handleClick(this.toursRef)}
            className={active === 2 ? 'active' : ''}
            href="#tours"
          >
            Tours
          </a>
          <a
            onClick={this.handleClick(this.specRef)}
            className={active === 3 ? 'active' : ''}
            href="#specialEvents"
          >
            Special Exhibits
          </a>
        </div>
        <div className="events" ref={this.eventRef}>
          <EventSection />
        </div>
        <div className="events" ref={this.compRef}>
          <Competitions />
        </div>
        <div className="events" ref={this.toursRef}>
          <Tours />
        </div>
        <div className="events" ref={this.specRef}>
          <SpecialExhibits />
        </div>
      </main>
    );
  }
}

export default Events;
