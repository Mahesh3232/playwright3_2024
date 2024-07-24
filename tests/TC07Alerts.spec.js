const { test, expect } = require('@playwright/test')

//types of alerts 
// js simple alert 
// js confirm alert 
// js prompt alert 

test('Handle js simple in playwright', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async simpleAlert => {
        // console.log(simpleAlert.message())
        await expect(simpleAlert.message()).toContain('I am a JS Alert')
        await simpleAlert.accept()
        console.log(simpleAlert.type())
    })
    await page.locator('button[onclick="jsAlert()"]').click()

    //await page.waitForTimeout(3000)
})


test.only('Verify simple alert in playwright', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    await page.waitForSelector('[class="card-title"] > a')
    let productCount = await page.locator('[class="card-title"] > a').count()
    //console.log(productCount)
    for (let i = 0; i < productCount; i++) {
        let text = await page.locator('[class="card-title"] > a').nth(i).textContent()
        //console.log(text)
        if (text === 'Nexus 6') {
            await page.locator('[class="card-title"] > a').nth(i).click()
            break
        }
    }
    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Product added')
        await simpleAlert.accept()
        await console.log(simpleAlert.type())
    })
    await page.locator('[onclick="addToCart(3)"]').click()
    await page.waitForTimeout(3000)
})