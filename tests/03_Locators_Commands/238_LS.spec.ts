import {test , expect} from "@playwright/test"

test ("Verfify our first TC", async ({page}) => {

await page.goto ("https://app.thetestingacademy.com/playwright/ttacart/");

await page.pause();
});