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

  btnSelectorFromName(btnName) {
    switch (btnName) {
      case 'scissors':
        return '#scissors'
        break
      case 'rock':
        return '#rock'
        break
      case 'paper':
        return '#paper'
        break
      case 'reset':
        return '#reset'
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

  async checkContactSessionStorageCount(expectedCount) {
    const actualCount = await this.page.evaluate(
      () => window.sessionStorage.length
    )
    expect(actualCount).to.be.eq(expectedCount)
  }

}

setWorldConstructor(PaperRockScissorsWorld)
