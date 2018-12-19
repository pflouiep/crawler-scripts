console.log("=======================================");
console.log("=== MEIJER CRAWLER ====================");
console.log("=======================================");
console.log("GLOBAL: URL                = " + $URL);
console.log("GLOBAL: NextCrawlerRequest = " + JSON.stringify($NextCrawlerRequest));
console.log("=======================================");
Navigate("about:blank");

Navigate($URL);
Navigate($URL);

WaitReady(".footer");

CaptureScreenshot();
GetOuterHTML();

console.log("=======================================");