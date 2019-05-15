const { After, Given, Then, When } = require('cucumber')

After(async function() {
  return await this.closeHomePage()
})

Given('I visit the site', async function() {
  return await this.openHomePage()
})

Then('I should see {string}', async function(content) {
  return await this.pageHasTextContent(content) 
})

When('I click {string}', async function(string) {
  return await this.clickOnButton(string)
})

Then('the session storage length must be {int}', async function (contactCount) {
  return await this.checkContactSessionStorageCount(contactCount)
})
