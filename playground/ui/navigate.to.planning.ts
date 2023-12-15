/**
 * @desc In this exercise, you've already automated the login process. Now it's time to move around the DOM and navigate from Explore -> Planning
 * @criteria:
 * As a user that has an EM2 license, login then navigate to the Planning app. For the first criteria point which guidance / module / topic you use does not matter.
 * @extra: Login with a user that has an EM2 license, enter Grade 3, Module 2 then on the module page enter Topic A, lesson 1 and validate the user lands in Planning
 */

import { exploreOperations } from "../../lessons/ui/pom/explore.operations";
import { loginOperations } from "../../lessons/ui/pom/login.operations";
import { waitForPageToBeReady } from "../../utility/useful-functions";
import 'dotenv/config';

fixture('Explore - Planning navigation exercise').page('https://digital.uat.greatminds.dev/')
    test('Should login to Explore then navigate to Planning', async t => {
      await loginOperations.loginWithEmail(process.env.EM2_LOGIN,process.env.PASS)
      await exploreOperations.navigateToModuleOverviewPlanning('Module 1, Counting, Comparison, and Addition, 1 of 6')
      await waitForPageToBeReady('planning')
    });

    test('Should login to Explore then navigate to Module 2, Topic A, Lesson 1', async t => {
      await loginOperations.loginWithEmail(process.env.EM2_LOGIN,process.env.PASS)
      await exploreOperations.navigateToModuleLessonPlanning('Module 2, Place Value Concepts Through Metric Measurement, 2 of 6', 'ModulePageLessonLink-em2.g3.m2.ta.l1')
      await waitForPageToBeReady('planning')
    });