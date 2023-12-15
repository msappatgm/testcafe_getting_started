import { t } from 'testcafe';
import { staffPage } from "./staff.page";
import { waitForElement, waitForPageToBeReady } from '../../../../../utility/useful-functions';
import { createStaffModal } from './create.staff.modal';

class StaffOperations {
    public async clickOptionsDropdown() {
        await t.click(staffPage.optionsDropdown);
    }

    public async openCreateStaffModal() {
        await waitForPageToBeReady();
        await this.clickOptionsDropdown();
        await t.click(staffPage.createStaffUserButton);
    }

    public async selectStaffRole(role: string) {
        await t.click(createStaffModal.roleDropdown);
        await t.click(createStaffModal.getRoleDropdownOption(role))
    }

    public async fillCreateStaffModal(
        firstName: string,
        lastName: string,
        staffId: string,
        role: string,
        emailAddress: string,
        password: string
    ) {
        await t.typeText(createStaffModal.firstNameInput, firstName);
        await t.typeText(createStaffModal.lastNameInput, lastName);
        await t.typeText(createStaffModal.staffIdInput, staffId);
        await this.selectStaffRole(role);
        await t.typeText(createStaffModal.emailAddressInput, emailAddress);
        await t.typeText(createStaffModal.passwordInput, password);
    }

    public async createStaff(
        firstName: string,
        lastName: string,
        staffId: string,
        role: string,
        emailAddress: string,
        password: string
    ) {
        await staffOperations.openCreateStaffModal();
        await this.fillCreateStaffModal(
            firstName,
            lastName,
            staffId,
            role,
            emailAddress,
            password
        )
        await t.click(createStaffModal.createButton);
    }
}

export const staffOperations = new StaffOperations();