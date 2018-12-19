Object.prototype.toType = function () {
    return ({}).toString.call(this).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

banner = function (name) {
    console.log("=======================================");
    console.log("=== " + name);
    console.log("=======================================");
    console.log("GLOBAL: URL                = " + $URL);
    console.log("GLOBAL: NextCrawlerRequest = " + JSON.stringify($NextCrawlerRequest));
    console.log("=======================================");
    Navigate("about:blank");
}

banner("AF - CRAWLER");

nav = Navigate($URL);
console.log("===> NAV: " + nav);

Sleep(2000);
WaitVisible("[class*='footer']", 5000);

img = CaptureScreenshot();
console.log("=======================================");
console.log("Image: " + img.toType());

html = GetOuterHTML();
// console.log("=======================================");

console.log("HTML: " + html.toType());
console.log("HTML: " + html);

console.log("=======================================");

Click("button.sbc-add-to-cart.btn.btn-primary.btn-lg.btn-block.sbc-selected", 1000);
Sleep(2000);
CaptureScreenshot();