var Signal = require('signals');

import Settings from '../constants/settings';


// vars
let _previousPage = null;
let _currentPage = null;


// public api
let AppModel = {
  // signals
  pageChanged: new Signal(),
  // methods
  changePage: changePage,
  getCurrentPage: getCurrentPage,
  getPreviousPage: getPreviousPage,
  toggleScroll: toggleScroll,
};
export default AppModel;


// methods definitions
function changePage(pageId) {
  if (pageId === _currentPage) {
    return;
  }

  _previousPage = _currentPage;
  _currentPage = pageId;

  AppModel.pageChanged.dispatch();
}

function getCurrentPage() {
  return _currentPage;
}

function getPreviousPage() {
  return _previousPage;
}

function toggleScroll(pageHeight) {
  if (pageHeight > Settings.SCREEN_HEIGHT) {
    document.body.style.overflowY = 'auto';
  } else {
    document.body.style.overflowY = 'hidden';
  }
}
