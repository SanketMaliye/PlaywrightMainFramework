import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { createHtmlReport } from 'axe-html-reporter';
const fs = require('fs');

test.describe('Vervali Homepage', () => {

  test('1 - Scan full page', async ({ page }) => {

    await page.goto('https://vervali.com/');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    const reportHTML = createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: "PlaywrightHomepage"
      },
    });

    if (!fs.existsSync("build/reports/accessibility-report.html")) {
      fs.mkdirSync("build/reports", {
        recursive: true,
      });
    }
    fs.writeFileSync("build/reports/accessibility-report.html", reportHTML);

    expect(accessibilityScanResults.violations).toEqual([]);

  });

  test('2 - Scan a specific component', async ({ page }) => {

    await page.goto('https://playwright.dev');

    await page.locator('#id').waitFor();

    const accessibilityScanResults = await new AxeBuilder({ page })
    .include('#id')
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);

  });

  test('3 - Scanning for WCAG violations', async ({ page }) => {
    await page.goto('https://vervali.com/');
  
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
  
        const reportHTML = createHtmlReport({
          results: accessibilityScanResults,
          options: {
            projectKey: "PlaywrightHomepage"
          },
        });
    
        if (!fs.existsSync("build/reports/accessibility-report.html")) {
          fs.mkdirSync("build/reports", {
            recursive: true,
          });
        }
        fs.writeFileSync("build/reports/accessibility-report.html", reportHTML);

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('4 - Excluding specific components from the scan', async ({ page }) => {

    await page.goto('https://playwright.dev');

    await page.locator('#id').waitFor();

    const accessibilityScanResults = await new AxeBuilder({ page })
    .exclude('#id')
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);

  });


  test('5 - Verify there is no accessibility issues', async ({ page }) => {

    await page.goto('https://vervali.com/');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    const reportHTML = createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: "PlaywrightHomepage"
      },
    });

    if (!fs.existsSync("build/reports/accessibility-report.html")) {
      fs.mkdirSync("build/reports", {
        recursive: true,
      });
    }
    fs.writeFileSync("build/reports/accessibility-report.html", reportHTML);

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('6 - Disable specific scan rules', async ({ page }) => {

    await page.goto('https://playwright.dev');

    const accessibilityScanResults = await new AxeBuilder({ page })
    .disableRules(['duplicate-id'])
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);

  });
});