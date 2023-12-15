import { Selector, t } from 'testcafe';
import { waitForPageToBeReady } from '../../../utility/useful-functions';
import { loginPage } from './login.page';

class LoginOperations {
  public async inputCred(username: string, password: string) {
    await t.typeText(loginPage.inputEmail, username);
    await t.typeText(loginPage.inputPassword, password);
  }

  public async clickLoginBtn() {
    const loginBtn = Selector('[aria-label="Log in"]').with({visibilityCheck: true});
    await t.click(loginBtn);
  }

  public async loginWithEmail(username: string, password: string) {
    await waitForPageToBeReady();
    await t.click(loginPage.loginWithEmailBtn);
    await this.inputCred(username, password);
    await this.clickLoginBtn();
  }

  public async inputNewPassword(password: string) {
    await t.typeText(loginPage.newPassword, password);
    await t.typeText(loginPage.confirmNewPassword, password);
  }

  public async loginToManage(username: string, password: string, url: string) {
    await this.loginWithEmail(username, password);
    await waitForPageToBeReady('authorize');
    await t.navigateTo(url);
  }

  public async setNewPassword(password: string) {
    await this.inputNewPassword(password);
    await t.click(loginPage.setPasswordBtn);
  }

  public async replaceTempPassword(username: string, tempPassword: string, newPassword: string) {
    await this.loginWithEmail(username, tempPassword);
    await this.setNewPassword(newPassword);
  }
}

export const loginOperations = new LoginOperations();