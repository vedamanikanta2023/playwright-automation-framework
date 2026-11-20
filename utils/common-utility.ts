import { Page } from "@playwright/test";

/**
 * Small generic browser helpers. Prefer Playwright's built-in
 * auto-waiting and locator assertions in test code.
 */
export async function takeScreenshot(
  page: Page,
  fileName: string
): Promise<void> {
  await page.screenshot({
    path: `test-results/${fileName}.png`,
    fullPage: true
  });
}
