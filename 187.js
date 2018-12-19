console.log("=============================================================================");
console.log("=== BEST BUY ================================================================");
console.log("=============================================================================");
console.log("GLOBAL: URL = " + $URL);
console.log("GLOBAL: NextCrawlerRequest = " + $NextCrawlerRequest);
console.log("GLOBAL: NextCrawlerRequest = " + JSON.stringify($NextCrawlerRequest));
console.log("GLOBAL: NextCrawlerRequest.DoNotProcess = " + $NextCrawlerRequest.DoNotProcess);
console.log("=============================================================================");

function takescreenshot() {
  if (Attributes("#survey_window", 5000) != null) {
    Click("#survey_invite_no", 60000);
    Sleep(30000);
  }
  GetOuterHTML();
  CaptureScreenshot();
}

function main() {

  // Start with Blank Page
  Navigate("about:blank");

  // Fix for Rackspace & AWS -- Navigate to robots.txt
  Navigate("http://www.bestbuy.com/robots.txt");
  Sleep(1000);

  Navigate($URL);

  WaitReady("#footer");

  WaitReady("#postcard", 120000);

  //"This item is no longer available
  if (Attributes("#pdp-inactive-content", 5000) != null) {
    console.log("\\nThis item is no longer available.\\n");

    takescreenshot();

    return;
  }

  //Standard Product Details Page
  if ((Attributes(".pb-purchase-price", 5000) != null) || (Attributes(".item-price", 5000) != null)) {
    console.log("\\nItem Price Detected.\\n");
    WaitReady("img.b-error.loaded", 10000);
    WaitReady("img.b-loaded", 10000);
    takescreenshot();
    return;
  }

  //Basket Price Page
  if ((Attributes("//a[text()[contains(., 'See price in cart')]]", 90000) != null) || (Attributes("a.pb-restricted-price-cta", 90000) != null)) {
    console.log("\\nBasket Price Detected.\\n");

    // Wait for Large Image to Load
    WaitReady("#carousel-main div.item.active.image-wrapper img.loaded", 10000);

    // Wait for Thumbnail to Load
    WaitReady("#carousel-main div.indicators-row.images img", 10000);

    // Make sure Go To Cart Button is ready to Click
    WaitReady("#pdp-add-to-cart-button > div > a", 10000);
    // WaitReady("a.btn.btn-transaction.bby-icon", 10000);

    // Save html and screenshot
    takescreenshot();

    // Click  "Add to Cart Button"
    Click("#pdp-add-to-cart-button > div > a", 10000);
    // Click("a.btn.btn-transaction.bby-icon", 10000);

    // Wait for "No, Thanks. Go to Cart" 
    WaitReady("a.go-to-cart");
    // WaitReady("[class*='go-to-cart']");

    // Click "No, Thanks. Go to cart"
    Click("a.go-to-cart");
    // Click("[class*='go-to-cart']");

    // Wait for "Remove" link
    WaitReady("//a[text()[contains(., 'Remove')]]", 90000);
    takescreenshot();

    // Clean-up - empty cart
    Click("//a[text()[contains(., 'Remove')]]", 90000);

    return;
  }
  //Catch-all

  takescreenshot();

}

main();