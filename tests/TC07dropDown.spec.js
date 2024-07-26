const { test, expect } = require('@playwright/test')

//Types of dropdown
// Static Dropdown
//Dynyamic dropdown

test('Handling static dropdown in playwright',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('3')
    let sucessEle = await page.locator('[class="subtitle"]')
    await expect(sucessEle).toBeVisible()
    await expect(sucessEle).toHaveText('You have selected Banana')
})