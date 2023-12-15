import { Selector, t } from 'testcafe';

class ExplorePage {
    private _pageHeader;
    private _moduleOverviewButton;
    private _levelDropdown;

    constructor() {
        this._pageHeader = Selector('h1[class*="GlobalHeaderstyled"]')
        this._moduleOverviewButton = Selector('a[data-dp-analytics-id*="ModuleOverview"]')
        this._levelDropdown = Selector('button[aria-controls="menu-courses"]')
    }

    get pageHeader() {
        return this._pageHeader;
    }

    get pageHeaderText() {
        return this.pageHeader.innerText;
    }

    get moduleOverviewButton() {
        return this._moduleOverviewButton;
    }

    get levelDropdown() {
        return this._levelDropdown;
    }

    getModule(name: string) {
        return Selector(`ul[aria-label="Story of Units"] a[aria-label="${name}"]`);
    }

    getLesson(lesson: string) {
        return Selector(`a[data-dp-analytics-id="${lesson}"]`);
    }
}

export const explorePage = new ExplorePage();