const { expect } = require('@playwright/test');

class PlaywrightActionsUtils {
  constructor(page) {
    this.page = page;
  }

  async click(selector) {
    const locator = this.page.locator(selector);
    await this.toBeVisible(locator,{timeout: 20000});
    await locator.click({timeout: 20000});
  }

  async fill(selector, text) {
    const locator = this.page.locator(selector);
    await this.toBeVisible(locator,{timeout: 20000});
    await locator.fill(text,{timeout: 20000});
  }

  async toHaveURL(expectedURL, options = {}) {
    const timeout = options.timeout || 5000;  // Default timeout: 5000ms
    await expect(this.page).toHaveURL(expectedURL, { timeout });
  }

  async waitForSelector(selector) {
    await this.page.waitForSelector(selector);
  }

  async toBeVisible(locator) {
    await expect(locator).toBeVisible();
  }

  async toHaveText(locator, text) {
    await expect(locator).toHaveText(text);
  }
 
  async clickAndExpectText(locator, expectedText) {
    await this.click(locator);
    await this.toBeVisible(locator);
    await this.toHaveText(locator, expectedText);
  }
}

module.exports = PlaywrightActionsUtils;
