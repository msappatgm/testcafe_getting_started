/**
 * @desc In this exercise, please automate the login process for multiple users. You should have 4 different Mocha it statements inside the Mocha Describe running through each criteria point below.
 * @criteria: Login with:
 * One user that has ONLY an EM2 licenses, so they land in Explore
 * One user that has ONLY a Geodes license, so they land in the Geodes app
 * One user that has ONLY an Affirm license, so they land in the Affirm app
 * One user that has ONLY an Insync license, so they land in the InSync app
 * @extra: One user that has an EM2 + EM2TN license, so they have to interact with the app picker page
 */

import { loginOperations } from "../../lessons/ui/pom/login.operations";
import { waitForPageToBeReady } from "../../utility/useful-functions";
import 'dotenv/config';

fixture('Authentication Tests Go Here').page('https://digital.uat.greatminds.dev/')
    test('Should allow an EM2 user to login', async t => {
      await loginOperations.loginWithEmail(process.env.EM2_LOGIN,process.env.PASS)
      await waitForPageToBeReady('explore')
    });

    test('Should allow a Geodes user to login', async t => {
      await loginOperations.loginWithEmail(process.env.GEODES_LOGIN,process.env.PASS)
      await waitForPageToBeReady('geodes')
    });

    test('Should allow a Affirm user to login', async t => {
      await loginOperations.loginWithEmail(process.env.AFFIRM_LOGIN,process.env.PASS)
      await waitForPageToBeReady('assessments')
    });

    test('Should allow a Insync user to login', async t => {
      await loginOperations.loginWithEmail(process.env.INSYNC_LOGIN,process.env.PASS)
      await waitForPageToBeReady('insync')
    });

    test('Should allow a EM2 + EM2TN user to login', async t => {
      await loginOperations.loginWithEmail(process.env.EM2_EM2TN_LOGIN,process.env.PASS)
      await waitForPageToBeReady('explore', 'h3[class*="StyledSubtitle"]')
    });