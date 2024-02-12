const { chromium } = require('playwright');

async function launchBrowser() {
    return await chromium.launch();
}

async function closeBrowser(browser) {
    await browser.close();
}

async function navigateToPage(page, url) {
    await page.goto(url);
}

module.exports = {
    launchBrowser,
    closeBrowser,
};