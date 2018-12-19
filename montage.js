console.log("=======================================");
console.log("=== Montage Hotel LB===================");
console.log("=======================================");
console.log("GLOBAL: URL                = " + $URL);
console.log("GLOBAL: NextCrawlerRequest = " + JSON.stringify($NextCrawlerRequest));
console.log("=======================================");

Navigate("about:blank");

Navigate("https://www.montagehotels.com/lagunabeach/");
WaitVisible("#show-reservations", 60000);

Click("#show-reservations");
WaitVisible("#calendar-accomodations > div.calendar-content > div.monthes-wrap > div.btns.clearfix > a.c-btn.btn-next", 60000);
CaptureScreenshot();

Click("//td[@id='calendar-accomodations']/td[@data-date='8/7/2017']", 60000);
CaptureScreenshot();

//*[@id="calendar-accomodations"]/div[1]/div[2]/div[1]/div[2]/table/tbody/tr[3]/td[2]
Click("//*[@id='calendar-accomodations']/div[1]/div[2]/div[1]/div[2]/table/tbody/tr[3]/td[contains(@data-date,'8/7/2017')]", 60000);
CaptureScreenshot();

Click("#calendar-accomodations > div.calendar-content > div.expier-block > div.border-wrap > div.ckeck-availability-btn.calendar-complete > a", 60000);
CaptureScreenshot();
GetOuterHTML();

// Click("#calendar-accomodations > div.calendar-content > div.monthes-wrap > div.monthes-holder > div:nth-child(3) > table > tbody > tr:nth-child(4) > td:nth-child(4)", 60000);
// CaptureScreenshot();
// Click("#calendar-accomodations > div.calendar-content > div.expier-block > div.border-wrap > div.ckeck-availability-btn.calendar-complete > a", 60000);

// WaitVisible("#content > div.step-2 > div > div.ch-date", 60000);

// //Sleep(1000);

// CaptureScreenshot();
// GetOuterHTML();

console.log("=======================================");