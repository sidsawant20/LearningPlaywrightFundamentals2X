import {test, expect} from "@playwright/test";

test ('Sign up for VWO page',async ({page}) => {
await page.goto ("https://vwo.com/free-trial/");

let inputBox = page.locator('#page-v1-step1-email');
await inputBox.fill('abccd');

await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").click();
await page.locator("//button[@data-qa='page-su-submit']").first().click();

let errorMessage = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();
await page.pause();
console.log(errorMessage);
expect(errorMessage).toContain("The email address you entered is incorrect.");

})
