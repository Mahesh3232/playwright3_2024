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

test.only('Verify multiple file uplode in playwright',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    let file1 = 'tests/UplodeData/FileUplode Demo File 1.pdf'
    let file2 = 'tests/UplodeData/FileUplode Demo File 2.pdf'
    await page.locator('#filesToUpload').setInputFiles([file1,file2])
    let filecount = await page.locator('#fileList>li').count()
    expect(filecount).toBe(2)
    expect(await page.locator('#fileList>li').first()).toHaveText('FileUplode Demo File 1.pdf')
    expect(await page.locator('#fileList>li').last()).toHaveText('FileUplode Demo File 2.pdf')
    console.log(filecount)
    await page.waitForTimeout(3000)
})