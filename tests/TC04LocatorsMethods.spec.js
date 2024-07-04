const {test,expect} = require ('@playwright/test')
//getbyAltText
//getByLabel
//getByPlaceholder
//getByRole
//getByTestId
//getByText
//getByTitle
//.locator

test('verify getByAltText method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = await page.getByAltText('letcode')
    await expect(page.getByAltText('letcode')).toBeVisible()
    expect(ele).toHaveAttribute('src','../../assets/logo.png')
    expect(ele).toHaveAttribute('alt','letcode')
})

test.only('Verify getByLabel method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele2 = page.getByLabel('main navigation')
    await expect(page.getByLabel('main navigation')).toBeVisible()
    await expect(ele2).toHaveAttribute('role','navigation')
})
