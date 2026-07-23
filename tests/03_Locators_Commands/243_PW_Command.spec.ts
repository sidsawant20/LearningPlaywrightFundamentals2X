import {test,expect} from '@playwright/test';

test("Go to with different wait until options", async({page}) => {

    await page.goto("https://google.com",{waitUntil : "commit"});
    console.log ("Commit : server responded");

        // Wait for HTML to be parsed
    await page.goto("https://google.com",{waitUntil : "domcontentloaded"});
    console.log("domcontentloaded : HTML parsed");

   // DEFAULT — wait for everything (images, CSS, scripts)
   await page.goto("https://google.com",{waitUntil : "load"});
   console.log("load : all resources are loaded")


   // SLOWEST — wait for all network activity to stop
   await page.goto("https://google.com",{waitUntil : "networkidle"});
   console.log ("networkidle : no request for 500ms");

   await page.pause();
});