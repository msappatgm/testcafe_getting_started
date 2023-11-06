import { setTokenSourceMapRange } from 'typescript';
import { waitForPageToBeReady } from '../../../utility/useful-functions';
import { Selector, t } from 'testcafe';

class ExplorePage {
    private _pageHeader;

    constructor() {
        this._pageHeader = Selector('h1[class*="GlobalHeaderstyled"]')
    }

    get pageHeader() {
        return this._pageHeader;
    }

    get pageHeaderText() {
        return this.pageHeader.innerText;
    }
}

export const explorePage = new ExplorePage();