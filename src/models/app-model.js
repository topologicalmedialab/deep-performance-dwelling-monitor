var Signal = require('signals');


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
