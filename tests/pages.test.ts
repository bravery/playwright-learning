import { test, expect } from '@playwright/test';

test.describe('Local Page Tests', () => {
  test('should load local page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle('Playwright Learning Page');
  });

  test('should fill and submit form', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Fill form
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john@example.com');
    await page.fill('#message', 'This is a test message');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Verify result
    await expect(page.locator('#formResult')).toBeVisible();
    await expect(page.locator('#formResult')).toHaveText('Form submitted successfully!');
  });

  test('should handle button clicks', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Click button multiple times
    for (let i = 0; i < 3; i++) {
      await page.click('#clickButton');
    }
    
    // Verify click count
    await expect(page.locator('#clickCount')).toHaveText('3');
    await expect(page.locator('#clickResult')).toBeVisible();
  });

  test('should load dynamic content', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Load dynamic content
    await page.click('#loadContent');
    
    // Verify content loaded
    await expect(page.locator('#dynamicContent h3')).toHaveText('Dynamic Content Loaded');
    await expect(page.locator('#dynamicContent ul')).toBeVisible();
  });

  test('should handle modal dialog', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Open modal
    await page.click('#openModal');
    
    // Verify modal is visible
    await expect(page.locator('#modal')).toBeVisible();
    await expect(page.locator('#modal h3')).toHaveText('Modal Dialog');
    
    // Close modal
    await page.click('#closeModal');
    
    // Verify modal is hidden
    await expect(page.locator('#modal')).not.toBeVisible();
  });
});