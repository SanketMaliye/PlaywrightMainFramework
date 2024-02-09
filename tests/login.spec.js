const { test } = require('@playwright/test')
const LoginPage = require("../pageObjects/loginPage")

test('Login Functionality', async({page})=>{
    const loginpage = new LoginPage(page)

    await page.goto('https://accounts.lambdatest.com/login');
    await loginpage.login()
    await loginpage.verifyTitleAfterLoginSuccessfully()
})

test('Login Functionality - Passing Data From Json File', async({page})=>{
    const loginpage = new LoginPage(page)

    await page.goto('https://accounts.lambdatest.com/login');
    await loginpage.loginUsingJSONData()
    await loginpage.verifyTitleAfterLoginSuccessfully()
})

test('Login Functionality - Passing Data From Excel File', async({page})=>{
    const loginpage = new LoginPage(page)

    await page.goto('https://accounts.lambdatest.com/login');
    await loginpage.loginUsingExcelData()
    await loginpage.verifyTitleAfterLoginSuccessfully()
})