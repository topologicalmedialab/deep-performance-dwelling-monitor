// public api
let PageService = {
  getPageClasses: getPageClasses
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
