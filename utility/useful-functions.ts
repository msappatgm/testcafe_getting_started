/*
import { ClientFunction } from 'testcafe';
  
export const waitUntilPageToBeReady = async(pageUrl: string) => {
    const documentRedyState = ClientFunction(() => document.readyState);
    let isPageLoaded: boolean;
    const startTime = Date.now();
    let endTime: number;
    do {
      isPageLoaded = await documentRedyState() === 'complete' && (await currentPageUrl).includes(pageUrl);
      endTime = Date.now();
    } while (!isPageLoaded && (endTime - startTime) <= 45000);

    return isPageLoaded;
  }
  
export const waitForElement = async (locator: string, timeout?: number) => {
    return
}

// Returns a string of the current URL
export const currentPageUrl = async () => {
    return ClientFunction(() => document.location.href.toString())();
}
*/