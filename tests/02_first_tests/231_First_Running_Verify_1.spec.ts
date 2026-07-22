import {test, expect} from "@playwright/test";

test("Verify our First Test case", async ({page}) => {
  await page.goto("https://app.vwo.com");

  await expect(page).toHaveTitle("Login - Wingify");
  
  const logo_image = page.locator("#vow-login-logo");
  await expect(logo_image).toBeVisible();


});
