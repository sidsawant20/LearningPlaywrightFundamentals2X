import {test, expect} from "@playwright/test";

test ("TC#1 - Verify that the app.vwo login is not working and gives you an error with lazy, strict, and auto wait concepts" , async ({page}) => {

await page.goto("https://app.vwo.com/#login");

//await page.pause();

let userNameField = page.locator('#login-username');
let passwordField = page.locator('#login-password');
let loginButton = page.locator('#js-login-btn');
let errorMessage = page.locator('#js-notification-box-msg');

await userNameField.fill("admin@admin.com");
await passwordField.fill("pass123")
await loginButton.click();

let mesage = await errorMessage.innerText() 
console.log(mesage);


});