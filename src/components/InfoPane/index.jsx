import React, { Component } from 'react';

import arrow from 'assets/left.svg';
import './styles.scss';

const BASE_HEIGHT = 140;
const EXPANDED_HEIGHT = 220;

class InfoPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };

    this.toggle = this.toggle.bind(this);
    this.contentRef = React.createRef();
  }

  componentDidMount() {
    this.contentHeight = this.contentRef.current.clientHeight;
  }

  toggle() {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  }

  render() {
    const { image, time, name, children } = this.props;
    const { collapsed } = this.state;

    const paneStyles = {
      height: collapsed ? BASE_HEIGHT : EXPANDED_HEIGHT + this.contentHeight + 40,
    };
    const paneImageStyles = {
      backgroundImage: `url(${image})`,
      height: collapsed ? BASE_HEIGHT : EXPANDED_HEIGHT,
    };
    if (!collapsed) { paneImageStyles.opacity = 1; }
    const contentStyles = {
      paddingTop: collapsed ? 13 : EXPANDED_HEIGHT + 20,
    }

    return (
      <div className='info-pane' style={paneStyles} onClick={this.toggle}>
        <div className="pane-img" style={paneImageStyles}/>

        <div ref={this.contentRef} className="content" style={contentStyles}>
          <p className="time">{time}</p>

          <div className="split">
            <div className="name"><h3>{name}</h3></div>
            <div className="description">{children}</div>
          </div>
        </div>

        <img className={`arrow ${collapsed ? 'down' : 'up'}`} src={arrow} alt="arrow" />
      </div>
    );
  }
}

export default InfoPane;
