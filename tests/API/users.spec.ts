import { test, expect } from "@playwright/test";
import { request as apiRequest } from "@playwright/test";
import config from "../../config/environment";
import apiRoutes from "../../routes/api.routes";
import createUserPayload from "../../payloads/create-user.json";
import { getJson, postJson } from "../../utils/api-utility";

test.describe("Users API tests", () => {
  test("GET users returns a list", async () => {
    const context = await apiRequest.newContext({
      baseURL: config.apiBaseUrl
    });

    try {
      const response = await getJson(context, apiRoutes.users);
      const users = await response.json();

      expect(response.status()).toBe(200);
      expect(Array.isArray(users)).toBeTruthy();
      expect(users.length).toBeGreaterThan(0);
    } finally {
      await context.dispose();
    }
  });

  test("POST user accepts a JSON payload", async () => {
    const context = await apiRequest.newContext({
      baseURL: config.apiBaseUrl
    });

    try {
      const response = await postJson(
        context,
        apiRoutes.users,
        createUserPayload
      );
      const responseBody = await response.json();

      expect(response.status()).toBe(201);
      expect(responseBody.name).toBe(createUserPayload.name);
    } finally {
      await context.dispose();
    }
  });
});
