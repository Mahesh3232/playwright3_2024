//click 
//rightclick
//dblclick
//hover
const {test,expect} = require ('@playwright/test')

test('Verify dblclick in playwright',async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#doubleClickBtn').dblclick()
    await expect(page.locator('#doubleClickMessage')).toBeVisible()
    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click')
})

test('Verify rightclick in playwright',async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({ button: 'right' })
    await expect(page.locator('#rightClickMessage')).toBeVisible()
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')
})

test.only('Verify mouseHover in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Actions/index.html#')
    await page.getByText('Hover Over Me Third!').hover()
    await expect(page.locator('[style="float:right;"] > div > a').first()).toBeVisible()
    await expect(page.locator('[style="float:right;"] > div > a').last()).toBeVisible()
    await page.locator('[style="float:right;"] > div > a').nth(1).click()
    page.on('dialog',async simpleAlert =>{
        await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
        await simpleAlert.accept()
    })
})