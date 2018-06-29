import _ from 'lodash';


import PresentationModes from '../../../constants/presentation-modes';
import Settings from '../../../constants/settings';


// constants
const ENDPOINT_URL = 'http://' + Settings.ENDPOINT_HOST + ':' + Settings.ENDPOINT_PORT + '/liquid-light/';


// public api
let LiquidLightService = {
  reset: reset,
  setLightIntensity: setLightIntensity,
  setMode: setMode,
  setMotorSpeed: setMotorSpeed,
  shutDown: shutDown,
};
export default LiquidLightService;


// methods definitions
function setMode(value) {
  var url;

  switch (value) {
    case PresentationModes.ON:
      url = ENDPOINT_URL + 'mode/on'
      break;

    case PresentationModes.OFF:
      url = ENDPOINT_URL + 'mode/off'
      break;

    case PresentationModes.AUTOMATION:
      url = ENDPOINT_URL + 'mode/automation'
      break;

    case PresentationModes.DEMO:
      url = ENDPOINT_URL + 'mode/demo'
      break;

    case PresentationModes.PARTY:
      url = ENDPOINT_URL + 'mode/party'
      break;

    case PresentationModes.PASSIVE:
      url = ENDPOINT_URL + 'mode/passive'
      break;

    default:
      // TODO: throw error for unhandled case?
  }

  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
}

function setLightIntensity(value) {
  // error checking
  if (!_.isNumber(value)) {
    throw new Error(
      'Error at LiquidLightService#setLightIntensity: ' +
      'Argument is expected to be a number.'
    );
  }

  value = limitRatio(value);

  // post request
  var request = new XMLHttpRequest();   // new HttpRequest instance 
  request.open('POST', ENDPOINT_URL + 'light');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({
    intensity: Math.round(value * 255)
  }));
}

function setMotorSpeed(value) {
  // error checking
  if (!_.isNumber(value)) {
    throw new Error(
      'Error at LiquidLightService#setMotorSpeed: ' +
      'Argument is expected to be a number.'
    );
  }

  value = limitRatio(value);

  // post request
  var request = new XMLHttpRequest();   // new HttpRequest instance 
  request.open('POST', ENDPOINT_URL + 'motor');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({
    speed: Math.round(value * 255)
  }));
}

function reset() {
  var request = new XMLHttpRequest();
  request.open('GET', ENDPOINT_URL + 'reset');
  request.send();
}

function shutDown() {
  var request = new XMLHttpRequest();
  request.open('GET', ENDPOINT_URL + 'shut-down');
  request.send();
}


// utils
function limitRatio(value) {
  if (value < 0) {
    value = 0;
  } else if (value > 1) {
    value = 1;
  }
  return value;
}
