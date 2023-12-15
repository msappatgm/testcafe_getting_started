import { Selector, t } from 'testcafe';

class AssessmentsPage {
    private _libraryBtn;
    private _subjectFilter;
    private _courseFilter;
    private _moduleFilter;
    private _topicsFilter;
    private _singleSelectDropdownItem;

    constructor() {
        this._libraryBtn = Selector('a[data-testid="library"]');
        this._subjectFilter = Selector('button[id="library-subject-filter"]');
        this._courseFilter = Selector('button[id="library-grades-filter"]');
        this._moduleFilter = Selector('button[id="library-modules-filter"]');
        this._topicsFilter = Selector('button[id="library-topics-filter"]');
        this._singleSelectDropdownItem = Selector('a[class="dropdown-item"]');
    }

    get libraryBtn() {
        return this._libraryBtn;
    }

    get subjectFilter() {
        return this._subjectFilter;
    }

    get courseFilter() {
        return this._courseFilter;
    }

    get moduleFilter() {
        return this._moduleFilter;
    }

    get topicsFilter() {
        return this._topicsFilter;
    }

    getSingleSelectDropdownItemText(text: string) {
        return this._singleSelectDropdownItem.withText(text);
    }

    getMultiSelectDropdownItemCheckbox(text: string) {
        return Selector(`li[class="dropdown-item"][aria-label*="${text}"] span[class="checkmark"]`);
    }
}

export const assessmentsPage = new AssessmentsPage();