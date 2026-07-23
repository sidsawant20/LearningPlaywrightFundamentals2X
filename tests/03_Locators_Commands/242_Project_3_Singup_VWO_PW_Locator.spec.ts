import {test, expect} from "@playwright/test";

test ("Sign up VWO with playwright locator",async ({page})=> {

await page.goto("https://vwo.com/free-trial/");

await page.getByRole ('textbox', {name : 'email'}).fill("abcdfed");
await page.getByRole ('checkbox').click();
await page.getByRole ('button',{name: 'Create a Free Trial Account'}).click()

let message = await page.locator ("xpath = //div[contains(@class,'invalid-reason')]").first().textContent();
console.log(message);

expect(message).toContain("The email address you entered is incorrect.");
await page.waitForTimeout(10000);



});