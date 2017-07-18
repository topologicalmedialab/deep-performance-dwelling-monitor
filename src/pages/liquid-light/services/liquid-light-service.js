var _ = require('lodash');


// public api
let LiquidLightService = {
  setLightIntensity: setLightIntensity,
  setMode: setMode,
  shutDown: shutDown,
};
export default LiquidLightService;


// methods definitions
function setMode(value) {
  // TODO: send to endpoint
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
  // TODO: send to endpoint
}

function shutDown() {
  // TODO: send to endpoint
}
