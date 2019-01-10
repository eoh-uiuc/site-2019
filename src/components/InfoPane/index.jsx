import React, { Component } from 'react';

import './styles.scss';

class InfoPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  }

  render() {
    const { image, time, name, children } = this.props;
    const { collapsed } = this.state;

    return (
      <div className={`info-pane ${collapsed ? 'collapsed' : 'expanded'}`} onClick={this.toggle}>
        <div className="pane-img" style={{ backgroundImage: `url(${image})` }}/>

        <div className="content">
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
