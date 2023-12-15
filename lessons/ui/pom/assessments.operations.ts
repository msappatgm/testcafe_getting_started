import { waitForElement } from "../../../utility/useful-functions";
import { assessmentsPage } from "./assessments.page";
import { t } from 'testcafe';

class AssessmentsOperations {
    public async clickLibraryBtn() {
        await t.click(assessmentsPage.libraryBtn);
    }

    public async multiSelectDropdownItem(list: string[]) {
        for (let item of list) {
            await t.click(assessmentsPage.getMultiSelectDropdownItemCheckbox(item))
        }
    }

    public async filterSubject(subject: string) {
        await t.click(assessmentsPage.subjectFilter);
        await t.click(assessmentsPage.getSingleSelectDropdownItemText(subject))
    }

    public async filterCourse(courses: string[]) {
        await t.click(assessmentsPage.courseFilter);
        await this.multiSelectDropdownItem(courses)
    }

    public async filterModule(modules: string[]) {
        await t.click(assessmentsPage.moduleFilter);
        await this.multiSelectDropdownItem(modules)
    }

    public async filterTopic(topics: string[]) {
        await t.click(assessmentsPage.topicsFilter);
        await this.multiSelectDropdownItem(topics)
    }

    public async waitForGradeModules(gradeList: string[], moduleList: string[]) {
        const moduleCount = moduleList.length
        for (var grade of gradeList) {
            await waitForElement(`h2[aria-label*="${grade}, with ${moduleCount} modules"]`)
        }
    }
}

export const assessmentsOperations = new AssessmentsOperations();