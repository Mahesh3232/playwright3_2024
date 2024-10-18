const {test,expect} = require('@playwright/test')
const { Loginpage } = require('../PageObject/login')

test.only('Verify login functionality with valid credentails',async({page})=>{ 
    const loginpage =new Loginpage(page)
    loginpage.goto()
    loginpage.Login('Admin','admin123')
    await page.waitForTimeout(5000)
    loginpage.BannerAssert()
    //await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

test('Verify login functionality with invalid credentails',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('admin')
    await page.locator('input[placeholder="Password"]').fill('Pass123')
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('div[role="alert"]')).toBeVisible()
    await expect(page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
})
