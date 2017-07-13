import React, { Component } from 'react';

require('./header-nav-button.scss');

export default class HeaderNavButton extends Component {
  constructor(props) {
    super(props);
  }

  // react methods definitions
  render() {
    var buttonClassName = 'header-nav-button ' + this.props.direction;

    return (
      <button
        className={buttonClassName}
        type="button"
        onClick={this.props.onClick}
      >
        <span className="arrow"></span>
      </button>
    );
  }
}
