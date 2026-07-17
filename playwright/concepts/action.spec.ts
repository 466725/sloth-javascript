import { expect, test } from '@playwright/test';

test('mouse actions demo', async ({ page }) => {
	await page.setContent(`
		<button id="mouse-btn">Click me</button>
		<p id="result">Not clicked</p>

		<script>
			const button = document.getElementById('mouse-btn');
			const result = document.getElementById('result');

			button.addEventListener('click', () => {
				result.textContent = 'Mouse click success';
			});
		</script>
	`);

	await page.locator('#mouse-btn').click();
	await expect(page.locator('#result')).toHaveText('Mouse click success');
});

test('keyboard actions demo', async ({ page }) => {
	await page.setContent(`
		<input id="name" />
	`);

	const input = page.locator('#name');
	await input.click();
	await input.pressSequentially('playwright');
	await input.press('Control+A');
	await input.press('Backspace');
	await input.type('keyboard done');

	await expect(input).toHaveValue('keyboard done');
});
