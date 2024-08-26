const { test, expect } = require('@playwright/test')

test('Verify calender in playwright',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('23/08/2024')
    await page.waitForTimeout(3000)
})

test.only('Handling datePicker in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
    let year  = '2025'
    let month = "May"
    let date = '10'
    await page.locator('#datepicker').click()
    console.log(`${month} ${year}`)
    while(true){
        let monthYear = await page.locator('[class="datepicker-switch"]').first().textContent()
        console.log(monthYear)
        if(monthYear ===`${month} ${year}`){
            break
        }
        await page.locator('[class="next"]').first().click()
    }
    await page.waitForTimeout(3000)

})