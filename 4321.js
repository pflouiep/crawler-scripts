console.log("=======================================");
console.log("=== DEFAULT CRAWLER ===================");
console.log("=======================================");
console.log("GLOBAL: URL                = " + $URL);
console.log("GLOBAL: NextCrawlerRequest = " + JSON.stringify($NextCrawlerRequest));
console.log("=======================================");
Navigate("about:blank");

Navigate($URL);

Sleep(1000);
WaitVisible("[class*='footer']", 5000);

CaptureScreenshot();
GetOuterHTML();

console.log("=======================================");