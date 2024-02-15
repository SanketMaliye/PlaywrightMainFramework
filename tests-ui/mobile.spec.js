import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 14 Pro Max'],
});

test('Mobile Device Test', async ({ page }) => {
  await page.goto('https://vervali.com/');
  await page.getByLabel('allow cookies').click();
  await page.getByLabel('Bars').click();
  await page.locator('#serviceMain').getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Mobile', exact: true }).click(); 
});