const { test, expect } = require('@playwright/test')

test('Handling shadow Dom in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/shadow')
    await page.locator('#fname').fill('Minskole')
    await page.keyboard.press('Tab');
    await page.keyboard.type('hellowrodl')
    //await page.locator('#lname').fill('Aher')
    await page.waitForTimeout(5000)
})