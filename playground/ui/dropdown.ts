/**
 * @desc In this exercise, you will learn how to interact with dropdown menus. This is used to switch grades or curriculums in Explore.
 * @criteria:
 * As a user that has an EM2 license, login to Explore and switch to Grade 3
 * Extra: As a user that has an affirm license, login to Affirm then switch to the Library view and interact with the Curriculum / Grade / Module / Topic filters to limit what content you see in the library.
 */

import { Selector } from "testcafe"
import { exploreOperations } from "../../lessons/ui/pom/explore.operations"
import { loginOperations } from "../../lessons/ui/pom/login.operations"
import { waitForPageToBeReady } from "../../utility/useful-functions"
import { explorePage } from "../../lessons/ui/pom/explore.page"
import { assessmentsOperations } from "../../lessons/ui/pom/assessments.operations"
import { assessmentsPage } from "../../lessons/ui/pom/assessments.page"

fixture('Dropdown exercises').page('https://digital.uat.greatminds.dev/')
    test('Should switch to Grade 3 in Explore', async t => {
      // Code goes here
      await loginOperations.loginWithEmail('doh_em2_teacher1@greatmindsdemo.org','Test@123');
      await exploreOperations.clickModule('Module 1, Counting, Comparison, and Addition, 1 of 6');
      await exploreOperations.selectLevelDropdown('a[data-dp-analytics-id="ControlPanelCourseNavigationMenu-em2.g3"]');
      await waitForPageToBeReady('em2.g3');
    })

    test('Affirm user switches to Library and filters to Grade/Course/Module/Topic', async t => {
      const gradeList = ['Grade 1','Grade 3']
      const moduleList = ['Module 1','Module 2', 'Module 3']
      const topicList = ['Topic A','Topic D']

      await loginOperations.loginWithEmail('doh_affirm_teacher1@greatmindsdemo.org','Test@123');
      await assessmentsOperations.clickLibraryBtn();
      await assessmentsOperations.filterSubject('Eureka Math');
      await assessmentsOperations.filterCourse(gradeList);
      await assessmentsOperations.filterModule(moduleList);
      await assessmentsOperations.filterTopic(topicList);
      await assessmentsOperations.waitForGradeModules(gradeList, moduleList);
    })
