import { waitForPageToBeReady } from '../../../utility/useful-functions';
import { Selector, t } from 'testcafe';

class LoginPage {
    private _inputEmail;
    private _inputPassword;
    private _btnSubmit;
    private _loginWithEmailBtn;
    private _newPasswordInput;
    private _confirmPasswordInput;
    private _loginToCmsBtn;
    private _emailErrorMessage;

    constructor() {
        this._inputEmail = Selector('input#email');
        this._inputPassword = Selector('#password');
        this._btnSubmit = Selector('button[aria-label="Log in"]');
        this._loginWithEmailBtn = Selector('button[class*="LoginWithEmail"]');
        this._newPasswordInput = Selector('#newPassword');
        this._confirmPasswordInput= Selector('#confirmPassword');
        this._loginToCmsBtn = Selector('button[color="primary"]');
        this._emailErrorMessage = Selector('#helper-message-email');
    }

    get inputEmail() {
        return this._inputEmail;
    }

    get inputPassword() {
        return this._inputPassword;
    }

    get btnSubmit() {
        return this._btnSubmit;
    }

    get loginWithEmailBtn() {
        return this._loginWithEmailBtn;
    }

    get newPasswordInput() {
        return this._newPasswordInput;
    }

    get confirmPasswordInput() {
        return this._confirmPasswordInput;
    }

    get loginToCmsBtn() {
        return this._loginToCmsBtn;
    }

    get emailErrorMessage() {
        return this._emailErrorMessage;
    }
    
    async waitForLoginPage() {
        return waitForPageToBeReady('/login', 'button[class*="LoginWithEmail"]');
    }
}

export const loginPage = new LoginPage();