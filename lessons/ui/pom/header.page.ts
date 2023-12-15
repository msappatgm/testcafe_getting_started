import { Selector } from 'testcafe';

class HeaderPage {
    private _avatarIcon;
    private _logoutButton;


    constructor() {
        this._avatarIcon = Selector('button[id="avatar-card-btn"]');
        this._logoutButton = Selector('button[data-testid="logout-button"]')
    }

    get avatarIcon() {
        return this._avatarIcon;
    }

    get logoutButton() {
        return this._logoutButton;
    }
}

export const headerPage = new HeaderPage();