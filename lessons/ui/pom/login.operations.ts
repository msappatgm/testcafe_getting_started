import { Selector, t } from 'testcafe';
import { waitForPageToBeReady } from '../../../utility/useful-functions';
import { loginPage } from './login.page';

class LoginOperations {
  public async inputCred(username: string, password: string) {
    await t.typeText(loginPage.inputEmail, username)
    await t.typeText(loginPage.inputPassword, password)
  }

  public async clickLoginBtn() {
    const loginBtn = Selector('[aria-label="Log in"]').with({visibilityCheck: true})
    await t.click(loginBtn)
  }

  public async loginWithEmail(username: string, password: string) {
    await waitForPageToBeReady();
    await t.click(loginPage.loginWithEmailBtn)
    await this.inputCred(username, password)
    await this.clickLoginBtn()
  }
}

export const loginOperations = new LoginOperations();