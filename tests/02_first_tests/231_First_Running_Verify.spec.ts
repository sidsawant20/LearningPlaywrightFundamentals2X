import {test, expect} from '@playwright/test';

test ("Verify first test case", async({page}) => {

await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
await page.pause();

});


