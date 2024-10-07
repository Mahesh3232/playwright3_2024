const { test, expect } = require('@playwright/test')

//thead ==> Table header 
//tr ==> Table row 
//tbody ==> Table body 
//td ==> Table data 
// th ==> Table header 

test('Handling webTable in playwright',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    let table = await page.locator('#productTable')

    //1) Total number of rows and columns
    let columns = await table.locator('thead > tr >th').count()
    for(let i =0; i< columns;i++){ 
        let columnsText = await table.locator('thead > tr >th').nth(i).textContent()
        console.log(columnsText)
    }
    console.log(`Columns count = ${columns}`)

    let rowsCount = await table.locator('tbody > tr').count()
    console.log(`Rows count = ${rowsCount}`)

    //Select checkbox for singal Tablet 
     let rows = await table.locator('tbody > tr')
    // let matchRow = rows.filter({
    //     has:page.locator('td'),
    //     hasText:'Tablet '
    // })
    // await matchRow.locator('input').check()
    // await page.waitForTimeout(5000)

    //select checkbox for multiple products 
    await checkProducts(rows,page,'Laptop')
    await checkProducts(rows,page,'Smartwatch')
    await checkProducts(rows,page,'Wireless Earbuds')
    await page.waitForTimeout(5000)
})

async function checkProducts(row,page,productName){
    let matchRow = row.filter({
        has:page.locator('td'),
        hasText:productName
    })
    await matchRow.locator('input').check()
}

