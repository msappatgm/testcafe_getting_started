import { Selector, t } from 'testcafe';

class CreateStaffModal {
    private _firstNameInput;
    private _lastNameInput;
    private _staffIdInput;
    private _roleDropdown;
    private _roleDropdownOption;
    private _emailAddressInput;
    private _usernameInput;
    private _passwordInput;
    private _createButton;


    constructor() {
        this._firstNameInput = Selector('input[id="input-first_name"]');
        this._lastNameInput = Selector('input[id="input-last_name"]');
        this._staffIdInput = Selector('input[id="school-staff-id"]');
        this._roleDropdown = Selector('div[id="select-combobox-role"]');
        this._roleDropdownOption = Selector('div[class="select__option-content"]');
        this._emailAddressInput = Selector('input[id="input-email"]');
        this._usernameInput = Selector('input[id="input-username"]');
        this._passwordInput = Selector('input[id="input-password"]');
        this._createButton = Selector('button[class*="SubmitButton"]');
    }

    get firstNameInput() {
        return this._firstNameInput;
    }

    get lastNameInput() {
        return this._lastNameInput;
    }

    get staffIdInput() {
        return this._staffIdInput;
    }

    get roleDropdown() {
        return this._roleDropdown;
    }

    getRoleDropdownOption(role: string) {
        return this._roleDropdownOption.withText(role)
    }

    get emailAddressInput() {
        return this._emailAddressInput;
    }

    get usernameInput() {
        return this._usernameInput;
    }

    get passwordInput() {
        return this._passwordInput;
    }

    get createButton() {
        return this._createButton;
    }
}

export const createStaffModal = new CreateStaffModal();