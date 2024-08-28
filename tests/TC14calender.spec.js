const { test, expect } = require('@playwright/test')

test('Verify datepicker with js values in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
    const date = new Date()
    date.setDate(date.getDate() + 200)
    // console.log(date.getDate())//Current date 
    // console.log(date.getMonth())//index of cureent month 
    // console.log(date.getFullYear())//current year 
    //0    1     2     3    4   5    6    7
    //jan feb  march april may june july Aug

    let d = date.getDate()
    let m = date.getMonth()+1 //current month index
    let y = date.getFullYear()
    console.log(m)
    //let mnt = date.toLocaleString('default',{month:'short'})//current month in short string
    let mnt = date.toLocaleString('default',{month:'long'})//current month in long string
    console.log(mnt)
    //24/03/2025
    let mm = `${0}${m}`
    console.log(mm)
})
