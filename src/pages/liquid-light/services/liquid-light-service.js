import _ from 'lodash';


import LiquidLightModes from '../constants/liquid-light-modes';
import Settings from '../../../constants/settings';


// constants
const ENDPOINT_URL = 'http://' + Settings.ENDPOINT_HOST + ':' + Settings.ENDPOINT_PORT + '/liquid-light/';


// public api
let LiquidLightService = {
  setLightIntensity: setLightIntensity,
  setMode: setMode,
  shutDown: shutDown,
};
export default LiquidLightService;


// methods definitions
function setMode(value) {
  var url;

  switch (value) {
    case LiquidLightModes.ON:
      url = ENDPOINT_URL + 'mode/on'
      break;

    case LiquidLightModes.OFF:
      url = ENDPOINT_URL + 'mode/off'
      break;

    case LiquidLightModes.AUTOMATION:
      url = ENDPOINT_URL + 'mode/automation'
      break;

    case LiquidLightModes.DEMO:
      url = ENDPOINT_URL + 'mode/demo'
      break;

    case LiquidLightModes.PARTY:
      url = ENDPOINT_URL + 'mode/party'
      break;

    case LiquidLightModes.PASSIVE:
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

  // limit value
  if (value < 0) {
    value = 0;
  } else if (value > 1) {
    value = 1;
  }

  // post request
  var request = new XMLHttpRequest();   // new HttpRequest instance 
  request.open('POST', ENDPOINT_URL + 'light');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({
    intensity: Math.round(value * 255)
  }));
}

function shutDown() {
  var request = new XMLHttpRequest();
  request.open('GET', ENDPOINT_URL + 'shut-down');
  request.send();
}
