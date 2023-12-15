import { Selector } from 'testcafe';

class StaffPage {
    private _optionsDropdown;
    private _createStaffUserButton;


    constructor() {
        this._optionsDropdown = Selector('button[id="school-staff-options"]');
        this._createStaffUserButton = Selector('button[id="options-create-staff-user"]')
    }

    get optionsDropdown() {
        return this._optionsDropdown;
    }

    get createStaffUserButton() {
        return this._createStaffUserButton;
    }
}

export const staffPage = new StaffPage();