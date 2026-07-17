import { expect, test } from '@playwright/test';

test('mouse actions demo', async ({ page }) => {
	await page.setContent(`
		<button id="mouse-btn">Click me</button>
		<p id="left-count">Left: 0</p>
		<p id="right-count">Right: 0</p>
		<p id="double-count">Double: 0</p>

		<script>
			const button = document.getElementById('mouse-btn');
			const leftCount = document.getElementById('left-count');
			const rightCount = document.getElementById('right-count');
			const doubleCount = document.getElementById('double-count');
			let left = 0;
			let right = 0;
			let doubleClick = 0;

			button.addEventListener('click', (event) => {
				if (event.detail === 1) {
					left += 1;
					leftCount.textContent = 'Left: ' + left;
				}
			});

			button.addEventListener('contextmenu', (event) => {
				event.preventDefault();
				right += 1;
				rightCount.textContent = 'Right: ' + right;
			});

			button.addEventListener('dblclick', () => {
				doubleClick += 1;
				doubleCount.textContent = 'Double: ' + doubleClick;
			});
		</script>
	`);

	await page.locator('#mouse-btn').click();
	await expect(page.locator('#left-count')).toHaveText('Left: 1');

	await page.locator('#mouse-btn').click({ button: 'right' });
	await expect(page.locator('#right-count')).toHaveText('Right: 1');

	await page.locator('#mouse-btn').dblclick();
	await expect(page.locator('#double-count')).toHaveText('Double: 1');
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
