const { expect } = require("@playwright/test");
const jsonData = JSON.parse(JSON.stringify(require("../data/loginData.json")));
const ExcelJS = require("exceljs");
const PlaywrightActionsUtils = require("../utils/playwrightActionsUtil");

class LoginPage {
    constructor(page, utils = new PlaywrightActionsUtils(page)) {
    this.page = page;
    this.utils = utils;
    this.emailTextField = "input#email";
    this.passwordTextField = "input#password";
    this.loginButton = "button#login-button";
  }

  async gotoLoginPage() {
    await this.page.goto("/");
  }

  async login() {  
    await this.utils.fill(this.emailTextField, "smaliye54@gmail.com");
    await this.utils.fill(this.passwordTextField, "Sanket@123");
    await this.utils.click(this.loginButton);
  }

  async loginUsingJSONData() {
    await this.utils.fill(this.emailTextField, jsonData.email);
    await this.utils.fill(this.passwordTextField, jsonData.password);
    await this.utils.click(this.loginButton);
  }

  async loginUsingExcelData() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("data/loginData.xlsx");
    const worksheet = workbook.getWorksheet("LoginDataSheet");
    const emailColumnIndex = 1;
    const passwordColumnIndex = 2;
    const rowNumber = 2;
    const email = worksheet.getRow(rowNumber).getCell(emailColumnIndex).value;
    const password = worksheet
      .getRow(rowNumber)
      .getCell(passwordColumnIndex).value;
    await this.utils.fill(this.emailTextField, email);
    await this.utils.fill(this.passwordTextField, password);
    await this.utils.click(this.loginButton);
  }
}

module.exports = LoginPage;
