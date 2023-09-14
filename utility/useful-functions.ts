import { ClientFunction, Selector, t } from 'testcafe';

export const getCurrentPageUrl = ClientFunction(() => document.location.href.toString());

export const waitForPageToBeReady = async (url: string, locator?: string, timeout: number = 30000) => {
    const isPageReady = ClientFunction(() => document.readyState === 'complete');
    await t.expect(isPageReady()).ok({ timeout: timeout });

    await t.expect(getCurrentPageUrl()).contains(url, undefined, { timeout: timeout });

    if (locator) {
        const element = Selector(locator).with({ visibilityCheck: true, timeout: timeout });
        await t.expect(element.visible).ok();
    }

    if (timeout) {
        await t.wait(timeout);
    }
}

export const waitForElement = async (locator: string, timeout: number = 30000) => {
    const isPageReady = ClientFunction(() => document.readyState === 'complete');
    await t.expect(isPageReady()).ok({ timeout: timeout });
    
    const element = Selector(locator).with({ visibilityCheck: true, timeout: timeout });
    await t.expect(element.visible).ok();

    if (timeout) {
        await t.wait(timeout);
    }
}