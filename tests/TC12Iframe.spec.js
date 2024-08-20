const { test, expect } = require('@playwright/test')
//1st way 
test('Handling Iframeby .framelocator in playwright',async({page})=>{
    await page.goto('https://letcode.in/frame')
    //await page.locator('[placeholder="Enter name"]').fill('Minskole')
    let frame =await page.frameLocator('#firstFr')
    await frame.locator('[placeholder="Enter name"]').fill('Minskole')
    expect(frame.locator('[placeholder="Enter name"]')).toBeVisible()
    await page.waitForTimeout(3000)   
})

//2nd way by .frame method by passing name attr
test.only('Handling iframe by .frame method',async({page})=>{
    await page.goto('https://letcode.in/frame')
    let frame1 = await page.frame('firstFr')
    await frame1.locator('[name="lname"]').fill('Aher')
    await page.waitForTimeout(3000)  
})
