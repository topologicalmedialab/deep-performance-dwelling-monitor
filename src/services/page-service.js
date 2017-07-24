// public api
let PageService = {
  getPageClasses: getPageClasses,
  getPageHeight: getPageHeight,
};
export default PageService;


// methods definitions
function getPageClasses(pageId, position) {
  var baseClasses = ['page', pageId];
  if (position > 0) {
    baseClasses.push('hidden-right');
  } else if (position < 0) {
    baseClasses.push('hidden-left');
  }
  return baseClasses.join(' ');
}

function getPageHeight(pageUID) {
  var element = document.getElementById(pageUID);
  var style = window.getComputedStyle(element, null);
  var height = style.height;
  if (height.indexOf('px') > -1) {
    height = height.replace('px', '');
  }
  return parseInt(height, 10);
}
