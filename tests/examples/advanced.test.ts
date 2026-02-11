import { test, expect } from '@playwright/test';

test.describe('Advanced Playwright Examples', () => {
  test('should use locators', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Using different locator strategies
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Example Domain');
    
    const link = page.getByRole('link', { name: 'More information' });
    await expect(link).toBeVisible();
  });

  test('should handle iframes', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Example iframe handling
    const frame = page.frameLocator('iframe');
    await expect(frame.locator('body')).toBeVisible();
  });

  test('should use assertions', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Various assertions
    await expect(page).toHaveTitle('Example Domain');
    await expect(page.locator('h1')).toHaveText('Example Domain');
    await expect(page.locator('p')).toHaveText(/This domain is/);
  });

  test('should handle network requests', async ({ page }) => {
    // Wait for a specific request
    await page.goto('https://example.com');
    
    // Intercept and wait for requests
    const responsePromise = page.waitForResponse('**/*.css');
    await page.reload();
    const response = await responsePromise;
    
    expect(response.status()).toBe(200);
  });
});