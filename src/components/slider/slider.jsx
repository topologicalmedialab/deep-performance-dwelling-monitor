import _ from 'lodash';
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
    this._touchId = null;

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

    this._handle.addEventListener('touchstart', this.onTouchedHandle.bind(this));
    this._handle.addEventListener('touchend', this.onTouchEnded.bind(this));
    this._handle.addEventListener('touchmove', this.onTouchMoved.bind(this));
  }


  // methods definitions
  dragHandle(clientX) {
    this._dragDelta = clientX - this._dragOrigin;
    this._handle.style.left = this.getNewHandlePosition();
    this.updateRatio();
    this.updateProgressBar();
  }

  getHandleOrigin() {
    let origin = this._handle.style.left;

    if (!origin) {
      origin = 0;

    } else if (origin.indexOf('px') > -1) {
      origin = origin.replace('px', '');
    }

    return parseInt(origin, 10);
  }

  getNewHandlePosition() {
    let value = this._handleOrigin + this._dragDelta;
    let max = 304; // 352 (max width) - 48 (handle width)

    if (value < 0) {
      value = 0;
    } else if (value > max) {
      value = max;
    }

    return value + 'px';
  }

  getTouchWithId(touches, id) {
    return _.find(touches, function findMatch(touch) {
      return touch.identifier === id;
    });
  }

  isSameTouch(touches) {
    let soughtId = this._touchId;
    let isSame = false;
    _.forEach(touches, function (touch) {
      if (touch.identifier !== soughtId) {
        return;
      } else {
        isSame = true;
      }
    });
    return isSame;
  }

  onGrabbedHandle(event) {
    this.startDraggingHandle(event.clientX);
  }

  onMouseMoved(event) {
    if (this._isDragging) {
      this.dragHandle(event.clientX);
    }
  }

  onMouseReleased() {
    this.stopDragging();
  }

  onTouchedHandle(event) {
    event.preventDefault();

    this._touchId = event.changedTouches[0].identifier;
    let touch = this.getTouchWithId(event.changedTouches, this._touchId);
    this.startDraggingHandle(touch.clientX);
  }

  onTouchEnded(event) {
    event.preventDefault();

    let isSameTouch = this.isSameTouch(event.changedTouches);
    if (isSameTouch) {
      this._touchId = null;
      this.stopDragging();
    }
  }

  onTouchMoved(event) {
    event.preventDefault();

    let isSameTouch = this.isSameTouch(event.changedTouches);
    if (this._isDragging && isSameTouch) {
      let touch = this.getTouchWithId(event.changedTouches, this._touchId);
      this.dragHandle(touch.clientX);
    }
  }

  startDraggingHandle(dragOrigin) {
    this._isDragging = true;
    this._handleOrigin = this.getHandleOrigin();
    this._dragOrigin = dragOrigin;
  }

  stopDragging() {
    if (this._isDragging) {
      this._isDragging = false;
    }
  }

  updateProgressBar() {
    let newWidth = this._ratio * 304; // ratio * max width (304)
    this._progressBar.style.width = newWidth + 'px';
  }

  updateRatio() {
    let position = parseInt(this._handle.style.left.replace('px', ''), 10);
    let max = 304; // 352 (max width) - 48 (handle width)
    let newRatio = position / max;
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
