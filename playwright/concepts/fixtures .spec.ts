import { expect, test as base } from '@playwright/test';

type DemoFixtures = {
  message: string;
};

const test = base.extend<DemoFixtures>({
  message: async ({}, use) => {
    // Setup
    const value = 'Hello from fixture';

    // Provide fixture value to the test
    await use(value);

    // Teardown (nothing needed for this simple demo)
  },
});

test('uses a custom fixture value', async ({ message }) => {
  expect(message).toBe('Hello from fixture');
});