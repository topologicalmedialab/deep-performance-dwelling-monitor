var _ = require('lodash');


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

  // scale
  var intensity = Math.round(value * 255);
  // TODO: post to endpoint
}

function shutDown() {
  var request = new XMLHttpRequest();
  request.open('GET', ENDPOINT_URL + 'shut-down');
  request.send();
}
