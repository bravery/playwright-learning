import { test, expect } from '@playwright/test';

test.describe('Basic Playwright Examples', () => {
  test('should navigate to example.com', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should fill and submit a form', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Example form interaction
    await page.fill('input[type="text"]', 'Hello Playwright');
    await page.click('input[type="submit"]');
    
    // Wait for navigation
    await page.waitForURL('**/');
  });

  test('should click a button', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Click the "More information..." link
    await page.click('a');
    
    // Verify we navigated
    await expect(page).toHaveURL(/more-info/);
  });

  test('should handle popups', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Example of handling popups
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.click('a'),
    ]);
    
    await expect(popup).toHaveTitle(/More information/);
  });
});