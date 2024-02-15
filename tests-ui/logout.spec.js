const { test, beforeEach, afterEach, context } = require('@playwright/test')
const LoginPage = require("../pageObjects/loginPage")
const HomePage = require("../pageObjects/homePage");

let loginpage;
let homepage;

beforeEach(async ({ page }) => {
  loginpage = new LoginPage(page);
  homepage = new HomePage(page);
  await page.goto('/');
});

test('Logout Functionality', async ({ page }) => {
  await loginpage.login()
  await homepage.logout()
  await homepage.verifyTitleAfterLogoutSuccessfully()
});

afterEach(async ({ page }) => {
  const context = page.context();
  await context.close();
});