import { test, expect } from '@playwright/test';

test('navigates to login', async ({ page }) => {
  const response = await page.request.get('https://playwright.dev');
  await expect(response).toBeOK();
});