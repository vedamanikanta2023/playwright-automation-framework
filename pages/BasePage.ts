import { Page, expect } from "@playwright/test";

/**
 * Common browser actions shared by page objects.
 */
export class BasePage {
  constructor(protected readonly page: Page) {}

  async open(path = "/"): Promise<void> {
    await this.page.goto(path);
  }

  async expectPageTitle(title: string): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }
}
