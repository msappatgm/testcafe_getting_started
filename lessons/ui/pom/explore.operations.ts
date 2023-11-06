import { Selector, t } from 'testcafe';
import { waitForPageToBeReady } from '../../../utility/useful-functions';
import { explorePage } from './explore.page';

const pageHeaderText = 'Explore: Curriculum'

class ExploreOperations {

  public async waitForPageToBeReady() {
    await waitForPageToBeReady('');
  }

  public async verifyHeaderText() {
    this.waitForPageToBeReady()
    await t.expect(explorePage.pageHeaderText).eql(pageHeaderText)
  }
}

export const exploreOperations = new ExploreOperations();