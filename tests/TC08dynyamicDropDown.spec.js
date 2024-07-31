const { test, expect } = require('@playwright/test')

test('Verify dynyamic dropdown in playwright', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune')
    await page.waitForSelector('[class="placeHolderMainText"]')
    let optionCount = await page.locator('[class="placeHolderMainText"]').count()
    //console.log(optionCount)
    // let text = await page.locator('[class="placeHolderMainText"]').last().textContent()
    // console.log(text)
    for (let i = 0; i < optionCount; i++) {
        let text = await page.locator('[class="placeHolderMainText"]').nth(i).textContent()
        console.log(text)
        if(text === 'Wagholi'){
            await page.locator('[class="placeHolderMainText"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(4000)
})