import { test, expect } from '@playwright/test';

test.describe('Basic Playwright Examples', () => {
  test('should navigate to example.com', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
    
    // 练习：添加更多断言
    await expect(page.locator('h1')).toHaveText('Example Domain');
    
    // 使用更具体的定位器
    await expect(page.locator('p').first()).toHaveText(/This domain is/);
    
    // 或者使用文本定位器
    await expect(page.getByText('This domain is for use in')).toBeVisible();
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