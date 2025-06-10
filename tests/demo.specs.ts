import { test, expect } from '@playwright/test';

test('check Google title', async ({ GooglePage }) => {
  await GooglePage.goto('https://www.google.com');
  await expect(GooglePage).toHaveTitle('Google');
});