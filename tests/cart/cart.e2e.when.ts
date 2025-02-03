import {createBdd, test} from "playwright-bdd";
import {Locator} from "playwright";
import {baseURL} from "../../playwright.config";

const {When} = createBdd(test);

When(/^I add first product to the cart$/, async function ({page}) {
  const button: Locator = page.locator('.add-to-cart');
  await button.first().click();
});

When(/^I press button "([^"]*)"$/, async function ({page}) {
  const button: Locator = page.getByRole('button', { name: 'Login' });
  await button.click();
  await page.waitForTimeout(1000)
});

When(/^I go to the (\/[a-zA-Z0-9-/]*) page$/, async function ({page}, path: string) {
  await page.goto(`${baseURL}${path}`);
});

When(/^I reduce first product in the cart$/, async function ({page}) {
  const button: Locator = page.locator('.item-decrease-button').first();
  await button.click();
});