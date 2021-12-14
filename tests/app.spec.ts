import { test, expect } from '@playwright/test';

test.describe('Test image parameters', () => {
  test('Image Size', async ({ page }) => {
    await page.goto('http://localhost:8080');

    const image = page.locator('data-test=image');
    await expect(image).toHaveCSS('width', '300px');
  });
});
