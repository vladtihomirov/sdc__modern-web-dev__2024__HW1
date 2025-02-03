import {createBdd, test} from "playwright-bdd";
import {baseURL} from "../../playwright.config";

const {Given} = createBdd(test);

Given(/^I am on the (\/[a-zA-Z0-9-/]*) page$/, async function ({page}, path: string) {
  await page.goto(`${baseURL}${path}`, {waitUntil: 'networkidle'});
});