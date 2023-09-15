import { waitForPageToBeReady } from '../../../utility/useful-functions';
import { Selector } from 'testcafe';

fixture('Example Click Interactions')
    .page('https://digital.uat.greatminds.dev/')
    .beforeEach(async () => {
    // using the helper/utility function
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');
    })

test('Should show off how to click an element', async t => {
  await t.click('button[class*="LoginWithEmail"]')
});

test('Should show off how to double click an element', async t => {
  await t.doubleClick('#email')
  await t.typeText('#email', 'BingoBongo@gmail.com')
  await t.doubleClick('#password')
  await t.typeText('#password', 'BingoBongo@gmail.com')

  const loginBtn = Selector('[aria-label="Log in"]')
      // waiting for an element to be visible
      .with({visibilityCheck: true})
  await t.doubleClick(loginBtn)
});
