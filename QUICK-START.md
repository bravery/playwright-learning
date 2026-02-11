# Playwright 快速开始指南

## 5分钟快速开始

### 第一步：运行第一个测试
```bash
# 运行所有测试
npm test

# 或者运行特定测试
npx playwright test tests/examples/basic.test.ts
```

### 第二步：查看测试结果
测试运行后，你会看到：
- 测试通过/失败状态
- 详细的错误信息
- 测试执行时间

### 第三步：修改测试
打开 `tests/examples/basic.test.ts`，修改测试代码：
```typescript
test('my first test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
  
  // 添加你的测试代码
  await page.click('a');
  await expect(page).toHaveURL(/more-info/);
});
```

### 第四步：运行修改后的测试
```bash
npm test
```

## 10分钟学习路径

### 第1分钟：了解项目结构
```bash
# 查看项目文件
ls -la

# 查看测试目录
ls tests/
```

### 第2-3分钟：运行示例测试
```bash
# 运行基础示例
npx playwright test tests/examples/basic.test.ts

# 运行高级示例
npx playwright test tests/examples/advanced.test.ts
```

### 第4-5分钟：使用codegen生成测试
```bash
# 启动codegen工具
npm run codegen

# 在浏览器中操作，自动生成测试代码
```

### 第6-7分钟：测试本地页面
```bash
# 启动本地服务器并测试
npm test

# 或者单独运行本地页面测试
npx playwright test tests/pages.test.ts
```

### 第8-9分钟：查看测试报告
```bash
# 查看HTML报告
open playwright-report/index.html

# 或者查看控制台输出
npm test -- --reporter=line
```

### 第10分钟：开始学习计划
```bash
# 查看学习计划
cat LEARNING_PLAN.md

# 开始跟踪进度
node track-progress.js help
```

## 常用命令速查

### 测试命令
```bash
# 基本测试
npm test

# 可见浏览器模式
npm run test:headed

# UI测试模式
npm run test:ui

# 特定浏览器测试
npm run test:chromium
npm run test:firefox
npm run test:webkit

# 调试模式
npm run test:debug
```

### 开发命令
```bash
# 生成测试代码
npm run codegen

# 安装浏览器
npm run install-playwright

# 代码检查
npm run lint

# 代码格式化
npm run format
```

### 学习命令
```bash
# 查看学习计划
cat LEARNING_PLAN.md

# 查看30天计划
cat 30-DAY-PLAN.md

# 跟踪进度
node track-progress.js show

# 查看统计
node track-progress.js stats
```

## 快速学习示例

### 示例1：页面导航测试
```typescript
import { test, expect } from '@playwright/test';

test('navigate to example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
```

### 示例2：表单测试
```typescript
test('fill and submit form', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  await page.fill('#name', 'John Doe');
  await page.fill('#email', 'john@example.com');
  await page.click('button[type="submit"]');
  
  await expect(page.locator('#formResult')).toBeVisible();
});
```

### 示例3：交互测试
```typescript
test('button click test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  await page.click('#clickButton');
  await expect(page.locator('#clickCount')).toHaveText('1');
});
```

## 常见问题快速解决

### 问题1：测试失败
```bash
# 查看详细错误
npm test -- --verbose

# 运行单个测试
npx playwright test tests/examples/basic.test.ts:3
```

### 问题2：浏览器未安装
```bash
# 安装浏览器
npm run install-playwright

# 或者
npx playwright install
```

### 问题3：端口被占用
```bash
# 修改端口
# 编辑 playwright.config.ts，修改 webServer.port
```

### 问题4：测试超时
```bash
# 增加超时时间
# 在测试中添加 timeout 选项
test('my test', async ({ page }) => {
  // 测试代码
}, { timeout: 30000 });
```

## 下一步行动

### 立即开始
1. ✅ 运行 `npm test` 查看现有测试
2. ✅ 使用 `npm run codegen` 生成测试代码
3. ✅ 修改一个测试并重新运行

### 今天完成
1. 📚 阅读 `LEARNING_PLAN.md` 前两页
2. 📊 运行 `node track-progress.js help` 了解进度跟踪
3. 🎯 完成第一个学习任务

### 本周目标
1. 🎯 完成第1周学习计划
2. 📝 编写5个自己的测试
3. 📊 每天更新学习进度

## 学习资源

### 快速参考
- **官方文档**: https://playwright.dev/docs
- **API参考**: https://playwright.dev/docs/api/class-page
- **示例代码**: 项目中的 `tests/` 目录

### 学习工具
- **Codegen**: `npm run codegen`
- **测试UI**: `npm run test:ui`
- **进度跟踪**: `node track-progress.js`

### 社区支持
- **GitHub Issues**: https://github.com/microsoft/playwright/issues
- **Stack Overflow**: https://stackoverflow.com/questions/tagged/playwright
- **Discord**: https://discord.gg/mswWXmRZ

---

**现在就开始你的Playwright学习之旅吧！** 🚀

*记住：最好的学习方式就是动手实践！*