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
      >{this.props.label}</button>
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
