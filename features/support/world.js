const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

const HOME_PAGE = 'http://localhost:3000'

class PaperRockScissorsWorld {
  constructor() {}

  // Open the home page using puppeteer
  async openHomePage() {
    this.browser = await puppeteer.launch({headless: false, slowmo: 100})
    this.page = await this.browser.newPage()
    await this.page.goto(HOME_PAGE)
  }

  async closeHomePage() {
    await this.browser.close()
  }

  async pageHasTextContent (expectedContent) {
    const pageContent = await this.page.content()
    const actualContent = pageContent.match(expectedContent)[0]
    expect(actualContent).to.be.eq(expectedContent)
  }
  
  async clickOnButton(btnName) {
    const btnSelector = this.btnSelectorFromName(btnName.toLowerCase())
    await this.page.waitForSelector(btnSelector)
    await this.page.click(btnSelector)
  }

  async fillFormField(field, content) {
    const inputSelector = `#contact-${field}`
    await this.page.waitForSelector(inputSelector)
    this.inputElement = await this.page.$(inputSelector)
    await this.inputElement.type(content)
  }

  btnSelectorFromName(btnName) {
    switch (btnName) {
      case 'play':
        return '#play'
        break
      case 'save contact':
        return '#save-contact'
        break
      case 'delete contact':
        return '#delete-contact'
        break
      case 'edit contact':
        return '#edit-contact'
        break
      case 'delete':
        return '#button_card_delete'
        break
      case 'edit':
        return '#button_card_edit'
        break
      default:
        throw `${btnName} button is not defined`
        break
    }
  }

  async checkContactStorageCount(expectedCount) {
    const actualCount = await this.page.evaluate(
      () => JSON.parse(window.localStorage.getItem('contacts')).length
    )
    expect(actualCount).to.be.eq(expectedCount)
  }

  async pageDoesNotHaveTextContent(unexpectedContent) {
    const pageContent = await this.page.content()
    let actualContent = pageContent.match(unexpectedContent)
    expect(actualContent).to.be.eq(null)
  }

  async pageHasVariousTextContent (expectedContent1,expectedContent2,expectedContent3) {
    const pageContent = await this.page.content()
    const actualContent = pageContent.match(expectedContent1, expectedContent2, expectedContent3)[0]
    expect(actualContent).to.be.oneOf(expectedContent1, expectedContent2, expectedContent3)
  }

}

setWorldConstructor(PaperRockScissorsWorld)