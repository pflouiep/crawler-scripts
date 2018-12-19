// http://ca.insight.com/en_CA/buy/product/NX.G6JAA.002/ACER%20AMERICA/NX.G6JAA.002/Acer-Aspire-V-15-Nitro-7-592G-71ZL--Black-Edition--15.6/

console.log("=======================================");
console.log("=== INSIGHT CRAWLER ===================");
console.log("=======================================");
console.log("GLOBAL: URL                = " + $URL);
console.log("GLOBAL: NextCrawlerRequest = " + JSON.stringify($NextCrawlerRequest));
console.log("=======================================");
Navigate("about:blank");

Navigate($URL);

Sleep(1000);
WaitVisible("//p[text()[contains(., 'List price')]]", 10000);

CaptureScreenshot();
GetOuterHTML();

console.log("=======================================");