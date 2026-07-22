import {test, expect} from "@playwright/test";

test ("How to handle mulitple elements",async ({page}) =>{

    await page.goto ("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPaneLinksText : string[] = await page.locator("a.list-group-item").allInnerTexts(); 
    
    await page.pause();
    console.log("Total numbers of elements "+rightPaneLinksText.length);
  


});