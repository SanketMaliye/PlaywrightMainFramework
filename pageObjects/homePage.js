const { expect } = require("@playwright/test");

class HomePage {
    constructor(page) {
        this.page = page
        this.profileButton = page.locator('a#profile__dropdown')
        this.logoutButton = page.locator('a#app__logout')
    }

    async logout() { 
        await this.profileButton.click();
        await this.logoutButton.click();        
    }
    async verifyTitleAfterLogoutSuccessfully(){
        await expect(this.page).toHaveTitle("Log in");
    } 
}

module.exports = HomePage;