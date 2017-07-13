import React, { Component } from 'react';

require('./list-button.scss');

export default class ListButton extends Component {
  constructor(props) {
    super(props);
  }


  // react methods definitions
  render() {
    return (
      <button
        className={this.getClasses()}
        type="button"
        disabled={this.props.isDisabled}
        onClick={this.props.onClick}
      >
        <span className="li-btn-label">{this.props.label}</span>
        <span className="li-btn-current-value">{this.props.currentValue}</span>
      </button>
    );
  }


  // methods definitions
  getClasses() {
    let classes = ['li-btn'];
    let hasArrow = this.props.hasArrow === true;
    let isPropUndefined = this.props.hasArrow === undefined;
    if (hasArrow || isPropUndefined) {
      classes.push('has-arrow');
    }
    return classes.join(' ');
  }
}
