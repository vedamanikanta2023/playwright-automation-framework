import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {
  readonly pageHeading: Locator;
  readonly cartLink: Locator;
  readonly addBackpackButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByText("Products", { exact: true });
    this.cartLink = page.locator(".shopping_cart_link");
    this.addBackpackButton = page.getByRole("button", {
      name: "Add to cart",
      exact: true
    }).first();
  }

  async expectLoaded(): Promise<void> {
    await expect(this.pageHeading).toBeVisible();
  }

  async addFirstProductToCart(): Promise<void> {
    await this.addBackpackButton.click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
