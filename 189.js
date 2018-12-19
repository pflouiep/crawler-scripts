console.log("=======================================");
console.log("=== TARGET CRAWLER ====================");
console.log("=======================================");
console.log("GLOBAL: URL                = " + $URL);
console.log("GLOBAL: NextCrawlerRequest = " + JSON.stringify($NextCrawlerRequest));
console.log("=======================================");
Navigate("about:blank");

Navigate($URL);

WaitReady("#pdpMainContainer", 15000);

CaptureScreenshot();
GetOuterHTML();

console.log("=======================================");