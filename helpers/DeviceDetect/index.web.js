import * as mobileCheck from 'react-device-detect';

let os = "browser";
if (typeof window.APP_CONFIG != "undefined" && typeof window.APP_CONFIG.os != "undefined") {
    os = window.APP_CONFIG.os;
}
mobileCheck.os = os;
export default mobileCheck;