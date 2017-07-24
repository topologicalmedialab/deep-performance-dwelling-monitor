import Settings from '../constants/settings';


// constants
const ENDPOINT_URL = 'http://' + Settings.ENDPOINT_HOST + ':' + Settings.ENDPOINT_PORT + '/pi/';


// public api
let PiService = {
  reboot: reboot
};
export default PiService;


// methods definitions
function reboot() {
  var request = new XMLHttpRequest();
  request.open('GET', ENDPOINT_URL + 'reboot');
  request.send();
}
