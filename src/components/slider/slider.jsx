import React, { Component } from 'react';


require('./slider.scss');


export default class Slider extends Component {
  constructor(props) {
    super(props);

    // error checking
    if (this.props.id === undefined) {
      throw new Error(
        'Unable to instantiate Slider component: ' +
        'the "id" attribute is mandatory, but none was provided.'
      );
    }

    // dom
    this._handle = null;
    this._progressBar = null;

    // TODO: move to state?
    this._isDragging = false;

    this._handleOrigin = -1;
    this._dragOrigin = -1;
    this._dragDelta = -1;

    this._ratio = 0;
  }

  // react method definitions
  render() {
    return (
      <div id={this.props.id} className="slider">
        <span className="slider-handle"></span>
        <span className="slider-progress"></span>
        <span className="slider-track"></span>
      </div>
    );
  }

  componentDidMount() {
    // get dom elements
    let component = document.getElementById(this.props.id);
    this._handle = component.getElementsByClassName('slider-handle')[0];
    this._progressBar = component.getElementsByClassName('slider-progress')[0];

    this.updateProgressBar();

    // add event listeners
    this._handle.addEventListener('mousedown', this.onGrabbedHandle.bind(this));
    window.onmousemove = this.onMouseMoved.bind(this);
    window.onmouseup = this.onMouseReleased.bind(this);
  }


  // methods definitions
  getHandleOrigin() {
    var origin = this._handle.style.left;

    if (!origin) {
      origin = 0;

    } else if (origin.indexOf('px') > -1) {
      origin = origin.replace('px', '');
    }

    return parseInt(origin, 10);
  }

  getNewHandlePosition() {
    var value = this._handleOrigin + this._dragDelta;
    var max = 304; // 352 (max width) - 48 (handle width)

    if (value < 0) {
      value = 0;
    } else if (value > max) {
      value = max;
    }

    return value + 'px';
  }

  onGrabbedHandle(event) {
    this._isDragging = true;
    this._handleOrigin = this.getHandleOrigin();
    this._dragOrigin = event.clientX;
  }

  onMouseMoved(event) {
    if (this._isDragging) {
      this._dragDelta = event.clientX - this._dragOrigin;
      this._handle.style.left = this.getNewHandlePosition();
      this.updateRatio();
      this.updateProgressBar();
    }
  }

  onMouseReleased() {
    if (this._isDragging) {
      this._isDragging = false;
    }
  }

  updateProgressBar() {
    var newWidth = this._ratio * 304; // ratio * max width (304)
    this._progressBar.style.width = newWidth + 'px';
  }

  updateRatio() {
    var position = parseInt(this._handle.style.left.replace('px', ''), 10);
    var max = 304; // 352 (max width) - 48 (handle width)
    var newRatio = position / max;
    if (newRatio !== this._ratio) {
      this._ratio = position / max;
      if (this.props.onUpdated) {
        this.props.onUpdated({
          ratio: this._ratio
        });
      }
    }
  }
}
