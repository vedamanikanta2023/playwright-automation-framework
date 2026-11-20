import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";
import users from "../../data/users.json";

test("user can add a product to the cart", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await inventoryPage.expectLoaded();
  await inventoryPage.addFirstProductToCart();

  await expect(page.getByRole("button", { name: "Remove" }).first())
    .toBeVisible();

  await inventoryPage.openCart();
  await expect(page.getByText("Your Cart")).toBeVisible();
  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
});
