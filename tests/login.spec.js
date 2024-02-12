const { test } = require('@playwright/test')
const LoginPage = require("../pageObjects/loginPage")
const HomePage = require("../pageObjects/homePage")

test('Login Functionality', async({page})=>{
    const loginpage = new LoginPage(page)
    const homepage = new HomePage(page)

    await page.goto('/');
    await loginpage.login()
    await homepage.verifyTitleAfterLoginSuccessfully()
})

test('Login Functionality - Passing Data From Json File', async({page})=>{
    const loginpage = new LoginPage(page)
    const homepage = new HomePage(page)

    await page.goto('/');
    await loginpage.loginUsingJSONData()
    await homepage.verifyTitleAfterLoginSuccessfully()
})

test('Login Functionality - Passing Data From Excel File', async({page})=>{
    const loginpage = new LoginPage(page)
    const homepage = new HomePage(page)

    await page.goto('/');
    await loginpage.loginUsingExcelData()
    await homepage.verifyTitleAfterLoginSuccessfully()
})