/**
 * @desc In this exercise you will login to manage, create a teacher and login with them for the first time
 * @pre-reqs:
 * Manage user credentials: new.dis@greatmindsdemo.org // Test@123
 * You will need an existing district + school + school enrollment year. If this hasn't been provided to you then feel free to use automation__district_trash and school FillMeWithTrash
 * @criteria:
 * As a DIS User I want to login to Manage and create a teacher. After creation, I want to validate that the user was created and is licensed by logging into Explore for the first time.
 */

import { loginOperations } from "../../lessons/ui/pom/login.operations";
import 'dotenv/config';
import { waitForPageToBeReady } from "../../utility/useful-functions";
import { staffOperations } from "../../lessons/ui/pom/manage/school/staff.operations";
import { headerOperations } from "../../lessons/ui/pom/header.operations";
import { faker } from '@faker-js/faker';

fixture('Manage Create a Teacher and login for the first time').page('https://digital.uat.greatminds.dev/')
    test('Using POM design principles scaffold out a test that simulates: Login to Manage, create a teacher, logout of the DIS User, then login with the newly created teacher and set a new password. Validate that you land on the Explore Grade View.', async t => {
      let teacherEmail = faker.internet.email();
      await loginOperations.loginToManage(process.env.DIS_LOGIN, process.env.PASS, 'https://digital.uat.greatminds.dev/manage/school/staff?di=47bcc066-4e4e-464f-9538-1effa8264454&si=a7470c08-89d9-4ed2-92c9-5c4013c38bdc');
      await staffOperations.createStaff(
        faker.person.firstName(),
        faker.person.lastName(),
        faker.string.alphanumeric(8),
        'Teacher',
        teacherEmail,
        process.env.PASS
      );
      await headerOperations.logout();
      await t.navigateTo('https://digital.uat.greatminds.dev/');
      await loginOperations.replaceTempPassword(teacherEmail, process.env.PASS, process.env.PASS);
      await waitForPageToBeReady('explore');
    });