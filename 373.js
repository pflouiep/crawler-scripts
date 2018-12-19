console.log("=======================================")
console.log("=== ADORAMA CRAWLER ===================")
console.log("=======================================")
console.log("GLOBAL: URL                = " + $URL);
console.log("GLOBAL: NextCrawlerRequest = " + JSON.stringify($NextCrawlerRequest));
console.log("=======================================")

function takeScreenshot() {
  CaptureScreenshot();
  GetOuterHTML();
}

function loadTab(dataId) {
  WaitReady("a[data-track-data*=\'" + dataId + "\']");
  Click("a[data-track-data*=\'" + dataId + "\']", 240000);
  WaitReady("a[data-track-data*=\'" + dataId + "\'][class$=\'active\']");
}

function establishConnection() {
  Navigate("about:blank");
  Navigate($URL);
  Sleep(10000);
  WaitVisible("#footer", 10000);
}

function getTabs() {
  var selectors = document.querySelectorAll("a.tab-trigger.trackEvent.action");
  var dataIds = [];
  for (i = 0; i < selectors.length; i++) {
    dataIds.push(selectors[i].getAttribute('data-track-data'));
  }

  return dataIds;
}

function main() {
  establishConnection();

  // CaptureScreenshot({ selector: "#product-container > section > div.product-info-container.col1 > form > section > div.buy-section.price.product-price", name: "lense", timeout: 30000 });

  var dataIds = Evaluate(getTabs);
  console.log("Data IDs : " + dataIds);

  for (i = 0; i < dataIds.length; i++) {
    console.log("Data ID Value : ", dataIds[i]);
    loadTab(dataIds[i]);
    takeScreenshot();
  }

  console.log("=======================================");
  return;
}

main();