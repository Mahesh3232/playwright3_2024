const { expect } = require("@playwright/test")

class Loginpage{
    constructor(page){
        this.page = page
        this.username = page.locator('input[name ="username"]')
        this.password = page.locator('input[name="password"]')
        this.loginBtn = page.locator('button[type="submit"]')
        this.clientBanner = page.locator('img[alt="client brand banner"]')
    }

    async goto(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async Login(Username,Password){
        await this.username.fill(Username)
        await this.password.fill(Password)
        await this.loginBtn.click()
    }

    async BannerAssert (){
        await expect(this.clientBanner).toBeVisible()
    }
}
module.exports={Loginpage}