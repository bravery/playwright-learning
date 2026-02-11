# Playwright Learning Project

A project designed to help you learn and practice Playwright testing framework.

## Features

- ✅ End-to-end testing with Playwright
- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ GitHub Actions CI/CD integration
- ✅ Example test cases for common scenarios
- ✅ Local development server for testing
- ✅ Code quality tools (ESLint, Prettier)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd playwright-learning
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Project Structure

```
playwright-learning/
├── tests/
│   ├── examples/          # Example test files
│   │   ├── basic.test.ts  # Basic Playwright examples
│   │   └── advanced.test.ts # Advanced Playwright examples
│   ├── pages/            # Local test pages
│   │   ├── index.html    # Example HTML page
│   │   └── pages.test.ts # Tests for local pages
│   └── playwright.config.ts # Playwright configuration
├── .github/workflows/    # GitHub Actions workflows
├── package.json          # Project dependencies and scripts
├── README.md            # This file
└── .gitignore           # Git ignore rules
```

## Available Scripts

### Test Commands

```bash
# Run all tests
npm test

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests with debug mode
npm run test:debug

# Run tests in UI mode
npm run test:ui

# Run tests for specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Generate test code from browser actions
npm run codegen
```

### Development Commands

```bash
# Install Playwright browsers
npm run install-playwright

# Run linter
npm run lint

# Format code
npm run format
```

## Learning Resources

### Basic Concepts

1. **Page Navigation**: Learn how to navigate to pages and wait for elements
2. **Element Interaction**: Click, fill, hover, and other interactions
3. **Assertions**: Verify page state and element properties
4. **Locators**: Different ways to find elements on the page

### Advanced Topics

1. **Network Interception**: Mock API responses and monitor requests
2. **Authentication**: Handle login and session management
3. **File Upload/Download**: Test file operations
4. **Mobile Testing**: Test responsive designs and mobile views
5. **Visual Testing**: Compare screenshots for visual regression

## Example Tests

### Basic Test Example

```typescript
import { test, expect } from '@playwright/test';

test('should navigate to example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
```

### Form Test Example

```typescript
test('should fill and submit a form', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  await page.fill('#name', 'John Doe');
  await page.fill('#email', 'john@example.com');
  await page.click('button[type="submit"]');
  
  await expect(page.locator('#formResult')).toBeVisible();
});
```

## Best Practices

1. **Use Descriptive Test Names**: Clearly describe what each test does
2. **Keep Tests Independent**: Each test should be able to run independently
3. **Use Page Object Pattern**: Organize selectors and actions in reusable classes
4. **Handle Asynchronous Operations**: Use proper waiting strategies
5. **Clean Up After Tests**: Reset state between tests when needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

- [Playwright Documentation](https://playwright.dev/docs)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright)
- [Playwright Discord Community](https://discord.gg/mswWXmRZ)