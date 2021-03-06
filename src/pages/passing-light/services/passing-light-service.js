import _ from 'lodash';


import PresentationModes from '../../../constants/presentation-modes';
import Settings from '../../../constants/settings';


// constants
const ENDPOINT_URL = 'http://' + Settings.ENDPOINT_HOST + ':' + Settings.ENDPOINT_PORT + '/passing-light/';


// public api
let PassingLightService = {
  setLightIntensity: setLightIntensity,
  setMode: setMode,
  shutDown: shutDown,
};
export default PassingLightService;


// methods definitions
function setMode(value) {
  var url;

  switch (value) {
    case PresentationModes.OFF:
      url = ENDPOINT_URL + 'mode/off'
      break;

    case PresentationModes.EVERYTHING:
      url = ENDPOINT_URL + 'mode/everything'
      break;

    case PresentationModes.FLUID:
      url = ENDPOINT_URL + 'mode/fluid'
      break;

    case PresentationModes.SHADOW:
      url = ENDPOINT_URL + 'mode/shadow'
      break;

      case PresentationModes.PARTY:
      url = ENDPOINT_URL + 'mode/party'
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
      'Error at PassingLightService#setLightIntensity: ' +
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
