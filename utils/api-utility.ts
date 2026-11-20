import { APIRequestContext, expect } from "@playwright/test";

export async function getJson(
  request: APIRequestContext,
  url: string
) {
  const response = await request.get(url);
  expect(response.ok()).toBeTruthy();
  return response;
}

export async function postJson(
  request: APIRequestContext,
  url: string,
  payload: object
) {
  const response = await request.post(url, { data: payload });
  expect(response.ok()).toBeTruthy();
  return response;
}
