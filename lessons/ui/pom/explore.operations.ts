import { Selector, t } from 'testcafe';
import { waitForPageToBeReady } from '../../../utility/useful-functions';
import { explorePage } from './explore.page';

const pageHeaderText = 'Explore: Curriculum'

class ExploreOperations {
  public async verifyHeaderText() {
    await waitForPageToBeReady();
    await t.expect(explorePage.pageHeaderText).eql(pageHeaderText);
  }

  public async clickModule(module: string) {
    await waitForPageToBeReady();
    await t.click(explorePage.getModule(module));
  }

  public async clickModuleOverviewButton() {
    await waitForPageToBeReady();
    await t.click(explorePage.moduleOverviewButton);
  }

  public async selectLevelDropdown(level: string) {
    await t.click(explorePage.levelDropdown);
    await t.click(level);
  }

  public async navigateToModuleOverviewPlanning(module: string) {
    await this.clickModule(module);
    await this.clickModuleOverviewButton();
  }

  public async selectModuleLesson(lesson: string) {
    await t.click(explorePage.getLesson(lesson));
  }

  public async navigateToModuleLessonPlanning(module: string, lesson: string) {
    await this.clickModule(module);
    await this.selectModuleLesson(lesson);
  }
}

export const exploreOperations = new ExploreOperations();