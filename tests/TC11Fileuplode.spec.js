const { test, expect } = require('@playwright/test')

test('Verify fileuplode in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/UplodeData/FileUplode Demo File 1.pdf')
    page.on('dialog',async alert =>{
        await expect(alert.message()).toContain('Your file has now been uploaded!')
        await expect(alert.type()).toContain('alert')
        alert.accept()
    })
    await page.locator('#submit-button').click()
    await expect(page.url())
    .toContain('https://webdriveruniversity.com/File-Upload/index.html?filename=FileUplode+Demo+File+1.pdf')
})