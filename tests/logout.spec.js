const { test } = require('@playwright/test')
const LoginPage = require("../pageObjects/loginPage")
const HomePage = require("../pageObjects/homePage")

test('Logout Functionality', async ({ page }) => {
  const loginpage = new LoginPage(page)
  const homepage = new HomePage(page)

  await page.goto('/');
  await loginpage.login()
  await homepage.logout()
  await homepage.verifyTitleAfterLogoutSuccessfully()
   
});