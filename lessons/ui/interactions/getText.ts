import { waitForPageToBeReady } from '../../../utility/useful-functions';
import { Selector } from 'testcafe';

fixture('Show off how to pull text from the page')
    .page('https://digital.uat.greatminds.dev/')
    .beforeEach(async () => {
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');
    })

test('Should pull the text from the Login button and log to the console what the text fetches', async t => {
    const elementWithText = Selector('button[class*="LoginWithEmail"]')
    const text = await elementWithText.innerText;
    // Checks that the element's text is not null or undefined
    await t.expect(text).ok('Text is null or undefined')
    // Checks that text isn't just whitespace
    .expect(text.trim().length).gt(0, 'Text is an empty string.');
    console.log(text);
});
