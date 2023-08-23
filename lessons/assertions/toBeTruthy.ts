import { waitForPageToBeReady } from '../../utility/useful-functions';
import { Selector } from 'testcafe';

fixture('Validating that something should equal true')
    .page('https://digital.uat.greatminds.dev/')
    .beforeEach(async () => {
        await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');
    });

test('Should display the login button', async t=> {
    await t.expect(Selector('button[class*="LoginWithEmail"]').visible).ok();
});