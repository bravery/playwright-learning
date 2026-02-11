import { test, expect } from '@playwright/test';

test.describe('Practice Tests', () => {
  test('should practice element interaction', async ({ page }) => {
    await page.goto('https://example.com');
    
    // 练习1：点击链接并等待导航
    await Promise.all([
      page.waitForNavigation(),
      page.click('a')
    ]);
    
    // 验证跳转到了新页面
    await expect(page).toHaveURL(/iana\.org/);
    
    // 练习2：返回上一页
    await page.goBack();
    await expect(page).toHaveURL('https://example.com/');
    
    // 练习3：验证页面标题
    await expect(page).toHaveTitle('Example Domain');
  });
  
  test('should practice form filling', async ({ page }) => {
    // 注意：example.com没有表单，这里练习概念
    await page.goto('https://example.com');
    
    // 练习：查找所有链接
    const links = page.locator('a');
    const linkCount = await links.count();
    
    // 验证有链接存在
    expect(linkCount).toBeGreaterThan(0);
    
    // 练习：获取第一个链接的文本
    const firstLinkText = await links.first().textContent();
    console.log('First link text:', firstLinkText);
  });
});