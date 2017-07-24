var Signal = require('signals');


// vars
let _previousMode = null;
let _currentMode = null;


// public api
let LiquidLightModel = {
  // signals
  modeChanged: new Signal(),
  // methods
  changeMode: changeMode,
  getCurrentMode: getCurrentMode,
};
export default LiquidLightModel;


// methods definitions
function changeMode(modeId) {
  if (modeId === _currentMode) {
    return;
  }

  _previousMode = _currentMode;
  _currentMode = modeId;

  LiquidLightModel.modeChanged.dispatch();
}

function getCurrentMode() {
  return _currentMode;
}
