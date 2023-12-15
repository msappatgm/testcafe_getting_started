import { t } from 'testcafe';
import { headerPage } from './header.page';

class HeaderOperations {
  public async logout() {
    await t.click(headerPage.avatarIcon);
    await t.click(headerPage.logoutButton);
  }
}

export const headerOperations = new HeaderOperations();