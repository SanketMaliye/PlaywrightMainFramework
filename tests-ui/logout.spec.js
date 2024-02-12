const { test, beforeEach, afterEach} = require('@playwright/test')
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
 
// afterEach(async ({ page }) => {
//   // Close the browser after each test
//   await page.close();
// });