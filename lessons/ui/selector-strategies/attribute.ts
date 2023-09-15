import { waitForPageToBeReady } from '../../../utility/useful-functions';
import { Selector } from 'testcafe';

fixture('Attribute Selector Strategies')
    .page('https://digital.uat.greatminds.dev/')
    .beforeEach(async () => {
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');
    })

test('Should show how to search by className', async t => {
    await t.click('.LandingLoginstyled__StyledLoginWithEmailOption')
});

test('Should show how to search by additional attributes, such as "aria - labels"', async t => {
    await t.typeText('[aria-label="Email"]', 'BingoBongo@gmail.comgo')
});

test('Should show how to search by ID attributes', async t => {
    await t.typeText('#password','Test@123')
});

test('Should show how to search by wildcard', async t => {
    // *=: Matches elements where the attribute value contains the specified substring.
    // ^=: Matches elements where the attribute value starts with the specified substring.
    // $=: Matches elements where the attribute value ends with the specified substring.
    await t.click('button[class*="ContinueButton"]')
});

test('Should show how to search by the $ selector strategy, or starting from the end of a class or attribute', async t => {
    const fullSelector = Selector('button[aria-label="Log in"]');
    const endOfAttributeSelector = Selector('[aria-label$="in"]');

    // TestCafe automatically waits for elements to become visible/clickable tho
    // BUT if you want to ensure that an element is visible before interacting, you can use the `expect` assertion:
    await t
        .expect(fullSelector.visible).ok()
        .expect(endOfAttributeSelector.visible).ok();
    // If you want to click on them, just use .click():
    // await t.click(fullSelector);
    // await t.click(endOfAttributeSelector);
});