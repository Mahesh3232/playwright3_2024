const {test,expect} = require ('@playwright/test')

//types of alerts 
// js simple alert 
// js confirm alert 
// js prompt alert 

test('Handle js simple in playwright',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog',async simpleAlert=>{
       // console.log(simpleAlert.message())
        await expect(simpleAlert.message()).toContain('I am a JS Alert')
        await simpleAlert.accept()
        console.log(simpleAlert.type())
    })
    await page.locator('button[onclick="jsAlert()"]').click()
  
    //await page.waitForTimeout(3000)
})
