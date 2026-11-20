import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";
import users from "../../data/users.json";
import logger from "../../logging/logger";

test.describe("Login UI tests", () => {
  test("standard user can log in", async ({ page }) => {
    logger.info("Starting valid login test");

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );

    await inventoryPage.expectLoaded();
    await expect(page).toHaveURL(/inventory\.html/);
  });

  test("locked out user sees an error", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.lockedOutUser.username,
      users.lockedOutUser.password
    );

    await loginPage.expectLoginError("locked out");
  });
});
