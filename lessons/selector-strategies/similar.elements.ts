import { waitForPageToBeReady } from '../../utility/useful-functions';
import { Selector } from 'testcafe';

const emailField = Selector('#email');
const passwordField = Selector('#password')

fixture('Show off how to work with multiple elements that have the same DOM elements with WDIO')
    .page('https://digital.uat.greatminds.dev/')
    .beforeEach(async () => {
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');
    })
  
test('Should log into Explore', async t => {
    await t.click('button[class*="LoginWithEmail"]')
    await t.expect(emailField.visible).ok()
    await t.typeText(emailField, 'sit_em2_teacher1@greatmindsdemo.org')
    await t.typeText(passwordField,'Test@123');
    
    const loginBtn = Selector('[aria-label="Log in"]')
    .with({visibilityCheck: true})

    await t.click(loginBtn)
    await waitForPageToBeReady('/explore/curricula/grade?', '.curricula-navmenu-button', 2000);

    const modules = Selector('ul[class*="Modules"] li');
    const moduleToClick = 'Counting, Comparison, and Addition';

    for (let i = 0; i < await modules.count; i++) {
        const moduleItem = modules.nth(i);
        const moduleTitle = await moduleItem.find('span').innerText;

        if (moduleTitle === moduleToClick) {
            await t.click(moduleItem.find('span'));
            break;
        }
    }

    await waitForPageToBeReady('/explore/curricula/grade/module?', '.overview-module-button');
});