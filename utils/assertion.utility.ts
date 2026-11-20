import { expect, Locator } from "@playwright/test";

export async function expectVisible(locator: Locator): Promise<void> {
  await expect(locator).toBeVisible();
}

export async function expectText(
  locator: Locator,
  expectedText: string
): Promise<void> {
  await expect(locator).toContainText(expectedText);
}
