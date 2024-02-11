const { test,expect } = require('@playwright/test')
 
test('Capture Screenshot Functionality', async ({ page }) => {
    await page.goto("https://www.google.com/")
    await page.screenshot({ path: 'screenshot/screenshot.png', fullPage: true });
});

test('Visual Comparison Functionality', async ({ page }) => {
    await page.goto("https://www.google.com/")
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('screenshot/screenshot.png');
});