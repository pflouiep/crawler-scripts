// Basic:
// - https://www.newegg.com/Product/Product.aspx?Item=12K-01W9-00001&ignorebbr=1

// "Other Sellers"
// - https://www.newegg.com/Product/Product.aspx?Item=N82E16882203146&Tpk=MU12MF

// -- "No, thanks ..." page doesn't alwas show up

console.log("=======================================");
console.log("=== NEWEGG CRAWLER ====================");
console.log("=======================================");
console.log("GLOBAL: URL = " + $URL);
console.log("GLOBAL: NextCrawlerRequest = " + $NextCrawlerRequest);
console.log("GLOBAL: NextCrawlerRequest = " + JSON.stringify($NextCrawlerRequest));
console.log("GLOBAL: NextCrawlerRequest.DoNotProcess = " + $NextCrawlerRequest.DoNotProcess);
console.log("=======================================");
Navigate("about:blank");

function main() {
    Navigate($URL);
    Sleep(1000);
    WaitVisible("footer.page-footer");

    CaptureScreenshot();
    GetOuterHTML();

    if (Attributes("//a[text()[contains(., 'other sellers')]]", 1000) != null) {
        console.log("Found Other Sellers link");

        Click("//a[text()[contains(., 'other sellers')]]");

        Sleep(30000);
        CaptureScreenshot();
        GetOuterHTML();

        // Find Next Button
        var page;
        if (page = Attributes("#page-buying-new button.btn i.fa.fa-caret-right", 1000) != null) {
            console.log("Found Next Button: ", page);

            Click("#page-buying-new button.btn i.fa.fa-caret-right");
            Sleep(30000);
            CaptureScreenshot();
            GetOuterHTML();

            return;
        }

        console.log("Next Button NOT Found");

        return;
    }

    // div.item-price
    if (Attributes("div.item-price", 1000) != null) {
        console.log("item-price is set")
        return;
    }

    // a.see-in-cart-link
    // if (Attributes("a.see-in-cart-link", 1000) != null) {
    //     console.log("see-in-cart-link is set")

    //     // Click  "Add to Cart"
    //     // Click("//a[text()[contains(., 'Add to Cart')]]");
    //     Click("a.btn.btn-transaction.bby-icon")

    //     // Click "No, thanks. Go to cart"
    //     // Click("//a[text()[contains(., 'No, thanks. Go to cart')]]");
    //     Click("a.go-to-cart");

    //     // WaitVisible("//a[text()[contains(., 'Remove')]]");
    //     WaitVisible("a.remove-link")

    //     CaptureScreenshot()
    //     GetOuterHTML()

    //     // Clean-up - empty cart
    //     Click("a.remove-link")

    //     return
    // }

    // "no longer available"
    // if (Attributes("//*[text()[contains(., 'no longer available')]]", 1000) != null) {
    //     console.log("no longer available is set")
    //     return
    // }

    // survey_window ???
    console.log("What the hack is goin on???");
}

main();