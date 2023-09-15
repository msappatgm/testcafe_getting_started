/**
 * Throughout the lessons and examples you will see words like "async" or "await"
 * JS / TS is built off of "promises." A promise means that the next step, line of code, or process will not
 * kick off until the previous one has signaled that it is done
 * Luckily this process is now relatively simple to set up and doesn't require many Promise keyword statements.
 * the "async" keyword is how you signify that a function returns a promise
 * the "await" keyword is how you slow a test down and make sure that each step is run in a specific order.
 * If we did not await certain functions, such as clicking on elements then we run the risk of having a race condition inside our tests which could have adverse side effects (sounds kinda like a doctor prescribing medication)
 * This process is best explained by walking through the waitForPageToBeReady function located in /utility/useful-functions.ts
 */
import { getCurrentPageUrl } from '../../../utility/useful-functions';
import { ClientFunction } from 'testcafe';

fixture('Explaining the asynchronous process of WebDriverIO')
    .page('https://digital.uat.greatminds.dev/');

// This code signifies that the test will describe async proccesses of Testcafe 
test('Should explain the async process of Testcafe', async t => {
    // When ClientFunction is used here it's saying we're doing operations with the context of the web browser
    // document.readyState is JS/DOM property (other states include: loading and interactive)
    // so what we're doing is we're assigning the value of isPageReady to the comparison document.readyState ==='complete' 
    const isPageReady = ClientFunction(() => document.readyState === 'complete');

    // Here we're waiting until the document is completely loaded.
    // assuming isPageReady is true
    // the .ok() assertion will wait that timeout (in milliseconds) 
    // before throwing an error 
    await t.expect(isPageReady()).ok({ timeout: 60 * 1000 });
    
    // Check if the current URL includes the specified string.
    await t.expect(getCurrentPageUrl()).contains('/', { timeout: 60 * 1000 }); // waits up to 60 seconds

    // Sometimes you need a little explicit pause in your life. Use when needed, but not often.
    // This will pause your test for 5 seconds
    await t.wait(5000);
})