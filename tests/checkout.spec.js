const { test, expect } = require('@playwright/test');

test('Guest checkout happy path completes order without promo code', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByTestId('catalog-section')).toBeVisible();
  await page.getByTestId('add-to-cart-btn-p-apples').click();
  await page.getByTestId('nav-cart').click();
  await page.getByTestId('proceed-to-checkout-btn').click();
  await page.getByTestId('checkout-name-input').fill('Romaisa Guest');
  await page.getByTestId('checkout-email-input').fill('capstone.guest@example.test');
  await page.getByTestId('checkout-address-input').fill('123 Orchard Lane, Lahore');
  await page.getByTestId('checkout-submit-btn').click();
  await expect(page.getByTestId('success-section')).toBeVisible();
  const orderId = await page.getByTestId('success-order-id').textContent();
  expect(orderId.trim().length).toBeGreaterThan(0);
});
