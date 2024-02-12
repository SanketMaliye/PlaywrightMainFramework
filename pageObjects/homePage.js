const { expect } = require("@playwright/test");
const PlaywrightActionsUtils = require("../utils/playwrightActionsUtil");

class HomePage {
  constructor(page, utils = new PlaywrightActionsUtils(page)) {
    this.page = page;
    this.utils = utils;
    this.profileButton = "a#profile__dropdown";
    this.logoutButton = "a#app__logout";
  }

  async logout() {
    await this.utils.click(this.profileButton);
    await this.utils.click(this.logoutButton);
  }

  async verifyTitleAfterLoginSuccessfully() {
    await this.utils.toHaveURL("https://accounts.lambdatest.com/dashboard", {
      timeout: 20000,
    });
  }

  async verifyTitleAfterLogoutSuccessfully() {
    await this.utils.toHaveURL("https://accounts.lambdatest.com/login", {
      timeout: 20000,
    });
  }
}

module.exports = HomePage;
