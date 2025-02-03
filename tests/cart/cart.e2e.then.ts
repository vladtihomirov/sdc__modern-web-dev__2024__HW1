import {createBdd, test} from "playwright-bdd";
import {Locator} from "playwright";
import {expect} from "playwright/test";

const {Then} = createBdd(test);

Then(/^The product quantity in the cart should be (\d)$/, async function ({ page }, count: number) {
  const cartButton: Locator = page.locator('.cart-button-number').first();
  expect(await cartButton.textContent()).toBe(count);
});

Then(/^I should see the (\/[a-zA-Z0-9-/]*) page$/, async function ({page}, path: string) {
  expect(page.url()).toContain(path);
});