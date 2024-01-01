import { test, expect } from '@playwright/test';

test('start basic chat', async ({ browser }) => {
  const context = await browser.newContext({ storageState: 'state.json' });
  const page = await context.newPage();
  await page.goto('https://dev.ema.co/integrations');
  await page.locator('a').filter({ hasText: 'Chat' }).click();
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Ask Ema anything...').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: '+ New Chat' }).click();
  await page.getByPlaceholder('Ask Ema anything...').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Ask Ema anything...').fill('Hey, Ema!');
  await page.waitForTimeout(1000);
  await page.locator('div:nth-child(3) > svg').click();
});