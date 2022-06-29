// @ts-check
require('dotenv').config();
const { test, expect } = require('@playwright/test');
 
const url = process.env.URL


test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
      await page.goto(url);
      await page.waitForSelector(".a")
      await page.fill("//*", TODO_ITEMS[0])
  });
});
