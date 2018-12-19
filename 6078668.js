console.log("=============================================================================");
console.log("=========================== SOUTHWEST AIRLINES ==============================");
console.log("=============================================================================");
console.log("GLOBAL: URL = " + $URL);
console.log("GLOBAL: NextCrawlerRequest = " + JSON.stringify($NextCrawlerRequest));
console.log("=============================================================================");

var DELKEY = "\u007f";
var TABKEY = "\t";

function takescreenshot() {
  GetOuterHTML();
  CaptureScreenshot();
}

function main() {
  Navigate("about:blank");
  Navigate($URL);
  WaitVisible("[class*='footer']");
  WaitVisible("#air-city-departure");
  Click("#air-city-departure");
  SendKeys("#air-city-departure", DELKEY + "SNA");
  Click("#air-city-arrival");
  SendKeys("#air-city-arrival", DELKEY + "MCI");
  Click("#air-date-departure");
  SendKeys("#air-date-departure", DELKEY + "12/2");
  Click("#air-date-return");
  SendKeys("#air-date-return", DELKEY + "12/15");
  Click("#jb-booking-form-submit-button");
  WaitVisible("#faresOutbound");
  takescreenshot();
}

main();