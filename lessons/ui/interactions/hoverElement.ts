import { waitForPageToBeReady } from '../../../utility/useful-functions';

fixture('Show off how to hover elements')
    .page('https://digital.uat.greatminds.dev/')
    .beforeEach(async () => {
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');
    })

test('Should hover the login with email button, then the login with site code button', async t => {
    await t.hover('button[class*="LoginWithEmail"]')
    await t.hover('button[class*="LoginWithSitecode"]')
});