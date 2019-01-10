import React, { Component } from 'react';

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

  toggle() {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  }

  render() {
    const { image, time, name, children } = this.props;
    const { collapsed } = this.state;
    let contentHeight = 0;
    if (this.contentRef.current) {
      contentHeight = this.contentRef.current.clientHeight;
    }

    const paneStyles = {
      height: collapsed ? BASE_HEIGHT : EXPANDED_HEIGHT + contentHeight + 30,
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
            <p className="description">{children}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoPane;
