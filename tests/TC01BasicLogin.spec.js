const {test,expect} = require('@playwright/test')

test('Verify login functionality with valid credentails',async({page})=>{
    //AAA
    //Arrange
    //Action
    //Assertion 
    let dashboardEle = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    //Step 1 ==> Visit Url 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Step 2 ==> Enter Username 
    await page.locator('input[name ="username"]').fill('Admin')
    //step 3 ==> Enter Password
    await page.locator('input[name="password"]').fill('admin123')
    //Step 4 ==> Click on login button 
    await page.locator('button[type="submit"]').click()
    //Step 5 ==> Assertion/ Validation 
    await expect(dashboardEle).toBeVisible()
    await expect(dashboardEle).toHaveText('Dashboard')
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})


//<input data-v-1f99f73c="" class="oxd-input oxd-input--active oxd-input--error" name="username" placeholder="Username" autofocus="">
//TagName[attr = "Value"]
//input[name ="username"]