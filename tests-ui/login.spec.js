const { test, beforeEach, afterEach, context} = require('@playwright/test')
const LoginPage = require("../pageObjects/loginPage")
const HomePage = require("../pageObjects/homePage");

let loginpage;
let homepage;

beforeEach(async ({ page }) => {
    loginpage = new LoginPage(page);
    homepage = new HomePage(page);
    await page.goto('/');
});

test('Login Functionality', async ({ page }) => {
    await loginpage.login();
    await homepage.verifyTitleAfterLoginSuccessfully();  
}, { timeout: 60000 });

test('Login Functionality - Passing Data From Json File', async ({ page }) => {
    await loginpage.loginUsingJSONData();
    await homepage.verifyTitleAfterLoginSuccessfully();
}, { timeout: 60000 });

test('Login Functionality - Passing Data From Excel File', async ({ page }) => {
    await loginpage.loginUsingExcelData();
    await homepage.verifyTitleAfterLoginSuccessfully();
}, { timeout: 60000 });

afterEach(async ({ page }) => {
    const context = page.context();
    await context.close();
});