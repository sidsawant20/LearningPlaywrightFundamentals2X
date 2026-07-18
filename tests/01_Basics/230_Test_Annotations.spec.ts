import {test, expect} from '@playwright/test';

// test("has Title", async ({page}) => {
//   await page.goto('https://playwright.dev');
//   await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
// });

// test.skip("Skip Test", async ({page}) => {
//   await page.goto('https://google.com');
//   await expect(page).toHaveTitle('Google');
// });

// // test.only("Only Test", async ({page}) => {
// //   await page.goto('https://bing.com');
// //   await expect(page).toHaveTitle('Search - Microsoft Bing');
// // });

// test.fail("Fail Test", async ({page}) => {
//   await page.goto('https://yahoo.com');
//   await expect(page).toHaveTitle('Yahoo | Mail, Weather, Search, Politics, News, Finance, Sports & Videos');
// });

test("Slow Test", async ({page}) => {
  await page.goto('https://duckduckgo.com');
  await expect(page).toHaveTitle('DuckDuckGo - Protection. Privacy. Peace of mind.');
});