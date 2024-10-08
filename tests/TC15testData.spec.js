const { test, expect } = require('@playwright/test')
const data = require('../tests/TestData/ContactUS.json')
const{customTest}= require('../tests/TestData/Data')
// test('Verify test data in playwright', async ({ page }) => {
//     await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
//     await page.locator('[name="first_name"]').fill('Mahesh')
//     await page.locator('[name="last_name"]').fill('Aher')
//     await page.locator('[name="email"]').fill('mahesh.aher@gmail.com')
//     await page.locator('[name="message"]').fill('I am learning playwright')
//     await page.locator('[value="SUBMIT"]').click()
//     await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
// })

// test('Verify test data using Json file in playwright', async ({ page }) => {
//     await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
//     await page.locator('[name="first_name"]').fill(data.fstName)
//     await page.locator('[name="last_name"]').fill(data.lstNAme)
//     await page.locator('[name="email"]').fill(data.email)
//     await page.locator('[name="message"]').fill(data.msg)
//     await page.locator('[value="SUBMIT"]').click()
//     await expect(page.locator('h1')).toHaveText(data.SucessMsg)
//     await page.waitForTimeout(4000)
// })

data.forEach(ele => {
    test(`Verify contactUS form using multiple dataset ${ele.fstName} `, async ({ page }) => {
        await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        await page.locator('[name="first_name"]').fill(ele.fstName)
        await page.locator('[name="last_name"]').fill(ele.lstNAme)
        await page.locator('[name="email"]').fill(ele.email)
        await page.locator('[name="message"]').fill(ele.msg)
        await page.locator('[value="SUBMIT"]').click()
        await expect(page.locator('h1')).toHaveText(ele.SucessMsg)
    })
})

customTest.only('Verify contactUs form using Js file Data',async({page,testdataForContactUs})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill(testdataForContactUs.fstName)
    await page.locator('[name="last_name"]').fill(testdataForContactUs.lstNAme)
    await page.locator('[name="email"]').fill(testdataForContactUs.email)
    await page.locator('[name="message"]').fill(testdataForContactUs.msg)
    await page.locator('[value="SUBMIT"]').click()
    await expect(page.locator('h1')).toHaveText(testdataForContactUs.SucessMsg)
})
